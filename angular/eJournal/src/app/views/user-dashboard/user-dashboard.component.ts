import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "angularx-social-login";
import { CalendarOptions } from "@fullcalendar/angular";
import { MatDialog } from "@angular/material/dialog";
//Constants
import { EMOJIOPTS, QUOTES } from "../../constants/sharedConstants";
//Components
import { GratitudeComponent } from "../gratitude/gratitude.component";
@Component({
  selector: "app-user-dashboard",
  templateUrl: "./user-dashboard.component.html",
  styleUrls: ["./user-dashboard.component.css"],
})
export class UserDashboardComponent implements OnInit {
  expressionEmojis = EMOJIOPTS;
  quoteOpts = QUOTES;
  todaysQuote: string = null;
  emojiID: number = null;
  Events = [
    { title: "event 1", date: "2020-06-27" },
    { title: "event 2", date: "2020-06-30" },
  ];
  calendarOptions: CalendarOptions;
  constructor(
    private authService: AuthService,
    private router: Router,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.getTodaysQuote();
    // setTimeout(() => {
    //   return this.httpClient
    //     .get("http://localhost:8888/event.php")
    //     .subscribe((res) => {
    //       this.Events.push(res);
    //       console.log(this.Events);
    //     });
    // }, 2200);

    setTimeout(() => {
      this.calendarOptions = {
        initialView: "dayGridMonth",
        dateClick: this.onDateClick.bind(this),
        events: this.Events,
      };
    }, 2500);
  }

  // addIcon() {
  //   return function (date, cell) {
  //     cell.prepend('<i class="fa fa-plane" aria-hidden="true"></i>');
  //   };
  // }

  getTodaysQuote() {
    const quoteID = Math.floor(Math.random() * 11);
    this.todaysQuote = this.quoteOpts[quoteID].quote;
  }

  onDateClick(res) {
    console.log("FROM FULLCALENDER: ", res);
    const selectedDate = new Date(res.dateStr).toDateString();
    this.openGratiduteJar(selectedDate);
  }

  openGratiduteJar(selectedDate?: string) {
    const dateToShow = selectedDate ? selectedDate : new Date().toDateString();
    const gratitudeJarDialog = this.dialog.open(GratitudeComponent, {
      disableClose: true,
      width: "650px",
      height: "710px",
      panelClass: "gratitude-wrapper",
      data: { selectedDate: dateToShow },
    });
    gratitudeJarDialog.afterClosed().subscribe((response) => {
      console.log("Graditude Component after close: ", response);
    });
  }

  selectEmoji(_emojiID: number) {
    this.emojiID = _emojiID;
  }

  logoutUser() {
    this.authService.signOut();
    this.router.navigate(["home"]);
  }
}
