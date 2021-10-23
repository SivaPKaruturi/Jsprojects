import { Injectable } from "@angular/core";
import { ToastrService } from "ngx-toastr";
@Injectable({
  providedIn: "root",
})
export class MessageService {
  constructor(private _toastrService: ToastrService) {}

  popupSuccess(message: string, title: string) {
    this._toastrService.success(message, title);
  }
  popupError(message: string, title: string) {
    this._toastrService.error(message, title);
  }
}
