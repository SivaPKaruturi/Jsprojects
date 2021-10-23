import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { remindersComponent } from "./reminders.component";

describe("remindersComponent", () => {
  let component: remindersComponent;
  let fixture: ComponentFixture<remindersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [remindersComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(remindersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
