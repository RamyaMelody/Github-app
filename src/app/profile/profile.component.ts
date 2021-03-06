import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile;
  repos;
  username: string;
  pageOfItems: Array<any>;
  pageSize:number =5;

  constructor(private profileService: ProfileService) {

  }
  findUsersProfile() {
    this.profileService.updateProfile(this.username);
    this.profileService.getProfileInfo().subscribe((profile) => {
      console.log(profile)
      this.profile = profile;
    });
    this.profileService.getProfileRepos().subscribe((repos) => {
      console.log(repos)
      this.repos = repos;
    });
  }

  ngOnInit(): void {
  }

  pageClick(pageOfItems: Array<any>){
    this.pageOfItems = pageOfItems;
  }



}
