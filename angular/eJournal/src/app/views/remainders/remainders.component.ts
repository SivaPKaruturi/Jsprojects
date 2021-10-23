import { Component, OnInit, Inject } from "@angular/core";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from "@angular/material/dialog";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
//Constants
import { NOTETYPES } from "../../constants/sharedConstants";
@Component({
  selector: "app-remainders",
  templateUrl: "./remainders.component.html",
  styleUrls: ["./remainders.component.css"],
})
export class remindersComponent implements OnInit {
  reminderForm: FormGroup;
  noteTypeOpts = NOTETYPES;
  constructor(
    private formBuilder: FormBuilder,
    private dialog: MatDialog,
    private dialogRef: MatDialogRef<remindersComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    this.initReminderForm();
  }

  initReminderForm() {
    this.reminderForm = this.formBuilder.group({
      titleCtrl: [null, [Validators.required]],
      noteCtrl: [null, Validators.required],
      startDate: [null, []],
      endDate: [null, []],
      eventTimeCtrl: [null, []],
      preferredTimeCtrl: [null, []],
      descriptionCtrl: [null, []],
    });
  }

  hideModal() {
    this.dialogRef.close();
  }
}
