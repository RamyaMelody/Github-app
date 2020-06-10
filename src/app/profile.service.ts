import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private username: string;
  //Client_ID and ClientSecret
  //optional but main purpose to use for to avoid limited number of times hit from git hub api
  private clientId:'5c3ce33a946cfbd350d3';
  private clientSecret: '8007192340036dabf128a7299abf3d9508c3e0f0';

  constructor(private http: HttpClient) {
    console.log("Service is ready");
    this.username = 'RamyaMelody';
  }
  getProfileInfo() {
    // return this.http.get("https://api.github.com/users/" + this.username +"?client_id=" +this.clientId+ "&client_secret=" +this.clientSecret);
    return this.http.get("https://api.github.com/users/" + this.username);
  }

  getProfileRepos() {
    // return this.http.get("https://api.github.com/users/" + this.username + "/repos?client_id=" +this.clientId+ "&client_secret=" +this.clientSecret);
    return this.http.get("https://api.github.com/users/" + this.username + "/repos?");
  }

  updateProfile(username: string) {
    this.username = username;
  }

}
