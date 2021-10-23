import { Component, OnInit, Inject } from "@angular/core";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from "@angular/material/dialog";
import { EMOJIOPTS } from "src/app/constants/sharedConstants";
//Components
import { remindersComponent } from "../remainders/remainders.component";
@Component({
  selector: "app-gratitude",
  templateUrl: "./gratitude.component.html",
  styleUrls: ["./gratitude.component.css"],
})
export class GratitudeComponent implements OnInit {
  expressionEmojis = EMOJIOPTS;
  emojiID: number = null;
  titleDate: string = null;
  todaysreminders: string[] = [];
  constructor(
    private dialog: MatDialog,
    private dialogRef: MatDialogRef<GratitudeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    if (data) {
      this.titleDate = data.selectedDate;
    }
  }

  ngOnInit(): void {}

  openreminders() {
    const eventDate = this.titleDate;
    const reminderDialog = this.dialog.open(remindersComponent, {
      disableClose: true,
      width: "500px",
      height: "450px",
      panelClass: "reminder-wrapper",
      data: { selectedDate: eventDate },
    });
    reminderDialog.afterClosed().subscribe((response) => {
      console.log("reminder Component after close: ", response);
    });
  }

  selectEmoji(_emojiID: number) {
    this.emojiID = _emojiID;
  }

  hideModal() {
    this.dialogRef.close();
  }
}
