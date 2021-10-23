import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

const headers = { ContentType: "application/json", responseType: "text" };
//Modals
import { userRegisterRequest } from "../modals/userAuth";
@Injectable({
  providedIn: "root",
})
export class UserAuthService {
  apiBaseUrl = `api/v1`;
  constructor(private _httpClient: HttpClient) {}

  //POST NEWLY SIGNUP USER DETAILS
  public postUserLogin(sendUserData: userRegisterRequest) {
    return this._httpClient.post<userRegisterRequest>(
      `${this.apiBaseUrl}/user`,
      sendUserData,
      {
        headers,
      }
    );
  }

  //GET ALL USERS
  public getUsers() {
    return this._httpClient.get<userRegisterRequest[]>(
      `${this.apiBaseUrl}/user`,
      { headers }
    );
  }
}
