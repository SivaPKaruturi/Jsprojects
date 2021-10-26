import { Component, OnInit, Inject, ViewChild } from "@angular/core";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from "@angular/material/dialog";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import * as moment from "moment";
import { DaterangepickerDirective } from "ngx-daterangepicker-material";
//Constants
import { NOTETYPES } from "../../constants/sharedConstants";
@Component({
  selector: "app-remainders",
  templateUrl: "./remainders.component.html",
  styleUrls: ["./remainders.component.css"],
})
export class remindersComponent implements OnInit {
  @ViewChild(DaterangepickerDirective, { static: true })
  picker: DaterangepickerDirective;
  selected: { startDate: moment.Moment; endDate: moment.Moment };
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
      // startDate: [null, []],
      // endDate: [null, []],
      dateRangeCtrl: [null, []],
      eventTimeCtrl: [null, []],
      preferredTimeCtrl: [null, []],
      descriptionCtrl: [null, []],
    });
  }

  openDatepicker() {
    this.picker.open();
  }

  hideModal() {
    this.dialogRef.close();
  }
}
