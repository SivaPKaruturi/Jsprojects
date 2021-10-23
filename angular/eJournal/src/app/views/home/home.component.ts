import { Component, OnInit } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import { MatIconRegistry } from "@angular/material/icon";
import { Router } from "@angular/router";
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from "@angular/forms";
import { MatDialog } from "@angular/material/dialog";

import {
  GoogleLoginProvider,
  AuthService,
  SocialUser,
} from "angularx-social-login";
//Services
import { UserAuthService } from "../../services/user-auth.service";
import { MessageService } from "../../services/message.service";
//Modals
import { userRegisterRequest } from "../../modals/userAuth";
import * as svgs from "../../../assets/svgs/journal_svgs";
const google_icon = svgs.GOOGLE_ICON;
//Constants
import { fieldValidationPattern } from "../../constants/regexPattern";
//Components
import { RegisterComponent } from "../register/register.component";
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  public user: SocialUser = new SocialUser();
  loginForm: FormGroup;
  allUsers: userRegisterRequest[] = [];
  constructor(
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer,
    private formBuilder: FormBuilder,
    private router: Router,
    private dialog: MatDialog,
    private authService: AuthService,
    private loginService: UserAuthService,
    private toastr: MessageService
  ) {
    iconRegistry.addSvgIconLiteral(
      "google_icon",
      sanitizer.bypassSecurityTrustHtml(google_icon)
    );
  }

  ngOnInit(): void {
    this.getAllUsers();
    this.initLoginForm();
  }

  getAllUsers() {
    this.loginService.getUsers().subscribe(
      (users) => {
        this.allUsers = users;
      },
      (error) => {
        console.log("Something went wrong while fetching all users");
      }
    );
  }

  initLoginForm() {
    this.loginForm = this.formBuilder.group({
      emailCtrl: [null, [Validators.required]],
      passwordCtrl: [null, [Validators.required]],
    });
  }

  socialLogin() {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
    this.authService.authState.subscribe((user) => {
      console.log("UserSocialLoginData: ", user);
      if (user) {
        const sendUserDetails: userRegisterRequest = {
          user_id: null,
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          google_id: user.id,
          photoUrl: user.photoUrl,
        };
        const isUserExisted: userRegisterRequest = this.allUsers.find(
          (checkuser) =>
            checkuser.email === sendUserDetails.email &&
            checkuser.google_id === sendUserDetails.google_id
        );
        if (!isUserExisted) {
          this.loginService.postUserLogin(sendUserDetails).subscribe(
            (response) => {
              this.showSuccessMessage(
                "Account created successfully",
                "Coungratulations!!!"
              );
              this.router.navigate(["dashboard"]);
            },
            (error) => {
              this.showErrorMessage(
                "Please try to SignUp",
                "Oops!!! Something went wrong..."
              );
            }
          );
        } else {
          this.showSuccessMessage("Welcome back!!!", "");
          this.router.navigate(["dashboard"]);
        }
      }
    });
  }

  signUp() {
    const registerDialog = this.dialog.open(RegisterComponent, {
      disableClose: true,
      width: "600px",
      height: "550px",
      panelClass: "register-wrapper",
    });
    registerDialog.afterClosed().subscribe((response) => {
      console.log("Register Component after close: ", response);
    });
  }

  signIn(userLogin) {
    const user: userRegisterRequest = this.allUsers.find(
      (checkuser) =>
        checkuser.email === userLogin.emailCtrl &&
        checkuser.google_id === userLogin.passwordCtrl
    );
    if (user) {
      this.showSuccessMessage("Welcome back!!!", "");
      this.router.navigate(["dashboard"]);
    } else {
      this.showErrorMessage(
        "Please Signup or Login with Gmail account",
        "Invalid Credentials"
      );
    }
    this.loginForm.reset();
  }

  showSuccessMessage(message: string, title: string) {
    this.toastr.popupSuccess(message, title);
  }

  showErrorMessage(message: string, title: string) {
    this.toastr.popupError(message, title);
  }
}
