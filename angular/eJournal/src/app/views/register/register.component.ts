import { Component, OnInit, Inject } from "@angular/core";
import { Observable } from "rxjs";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from "@angular/material/dialog";
//Services
import { UserAuthService } from "src/app/services/user-auth.service";
import { MessageService } from "src/app/services/message.service";
//Modals
import { userRegisterRequest } from "src/app/modals/userAuth";
//Constants
import { fieldValidationPattern } from "../../constants/regexPattern";
@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"],
})
export class RegisterComponent implements OnInit {
  registrationForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private signUpService: UserAuthService,
    private toastr: MessageService,
    private dialog: MatDialog,
    private dialogRef: MatDialogRef<RegisterComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    this.initRegistrationForm();
  }

  initRegistrationForm() {
    this.registrationForm = this.formBuilder.group({
      emailCtrl: [
        null,
        [
          Validators.required,
          Validators.pattern(fieldValidationPattern.emailRegex),
        ],
        this.checkInUseEmail,
      ],
      fnameCtrl: [null, Validators.required],
      lnameCtrl: [null, []],
      passwordCtrl: [null, [Validators.required, this.checkPassword]],
    });
  }

  checkPassword(control) {
    let enteredPassword = control.value;
    let passwordCheck: RegExp = fieldValidationPattern.passwordRegex;
    return !passwordCheck.test(enteredPassword) && enteredPassword
      ? { requirements: true }
      : null;
  }

  checkInUseEmail(control) {
    // mimic http database access
    let db = ["tony@gmail.com"];
    return new Observable((observer) => {
      setTimeout(() => {
        let result =
          db.indexOf(control.value) !== -1 ? { alreadyInUse: true } : null;
        observer.next(result);
        observer.complete();
      }, 4000);
    });
  }

  getErrorEmail() {
    return this.registrationForm.get("emailCtrl").hasError("required")
      ? "Field is required"
      : this.registrationForm.get("emailCtrl").hasError("pattern")
      ? "Not a valid emailaddress"
      : this.registrationForm.get("emailCtrl").hasError("alreadyInUse")
      ? "This emailaddress is already in use"
      : "";
  }

  getErrorPassword() {
    return this.registrationForm.get("passwordCtrl").hasError("required")
      ? "Field is required (at least eight characters, one uppercase letter and one number)"
      : this.registrationForm.get("passwordCtrl").hasError("requirements")
      ? "Password needs to be at least eight characters, one uppercase letter and one number"
      : "";
  }

  signUp(user) {
    //console.log("USER: ", user);
    const sendUserDetails: userRegisterRequest = {
      user_id: null,
      firstName: user.fnameCtrl,
      lastName: user.lnameCtrl,
      email: user.emailCtrl,
      google_id: user.passwordCtrl,
      photoUrl: null,
    };
    this.signUpService.postUserLogin(sendUserDetails).subscribe(
      (response) => {
        this.toastr.popupSuccess(
          "Account created successfully",
          "Coungratulations!!!"
        );
        this.router.navigate(["dashboard"]);
        //console.log("Manual Signup: ", response);
        this.dialogRef.close();
      },
      (error) => {
        this.toastr.popupError(
          "We couldn't create your account",
          "Oops!!! We are sorry..."
        );
      }
    );
  }

  hideModal() {
    this.dialogRef.close();
  }
}
