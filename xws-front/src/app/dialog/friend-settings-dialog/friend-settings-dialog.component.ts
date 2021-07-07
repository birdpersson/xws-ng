import { FormBuilder, FormGroup } from '@angular/forms';
import { NotificationSettings } from './../../dto/notification-settings.model';
import { UserService } from './../../services/user.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from 'src/app/dto/user.model';

@Component({
  selector: 'app-friend-settings-dialog',
  templateUrl: './friend-settings-dialog.component.html',
  styleUrls: ['./friend-settings-dialog.component.css']
})
export class FriendSettingsDialogComponent implements OnInit {

  constructor(private fb: FormBuilder ,private userService:UserService, public dialogRef: MatDialogRef<FriendSettingsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  settingsForm:FormGroup;
  user:User=new User();
  friend:NotificationSettings=new NotificationSettings();
  settingsFound:boolean=false;

  ngOnInit(): void {
    console.log(this.data.username);
    this.settingsForm=this.fb.group({
      stories:[''],
      posts:[''],
      comments:[''],
      messages:['']
    })

    this.userService.getLoggedUser().subscribe(
        data=>{
          this.user=data;
          this.user.notifications.forEach((notification)=>{
              if(notification.username===this.data.username)
                {
                  this.friend=notification;
                  this.settingsFound=true;
                  this.fillForm();
                }
            });
        if(!this.settingsFound)
        {
          this.friend.comments=true;
          this.friend.messages=true;
          this.friend.posts=true;
          this.friend.stories=true;
          this.fillForm();
        };

          
      }
    );
      
  }

  mute(){
    this.userService.muteUser(this.data.username).subscribe(res=>{
      this.dialogRef.close("User "+this.data.username+" muted");
    })
  }

  block(){
    this.userService.blockUser(this.data.username).subscribe(res=>{
      this.dialogRef.close("User "+this.data.username+" blocked");
    })
  }

  save(){
    this.friend.stories=this.settingsForm.controls['stories'].value;
    this.friend.messages=this.settingsForm.controls['messages'].value;
    this.friend.posts=this.settingsForm.controls['posts'].value;
    this.friend.comments=this.settingsForm.controls['comments'].value;
    this.userService.saveNotificationSettings(this.friend).subscribe(
      data=>{
            console.log(data);
            this.dialogRef.close();
      }
    )
  }
  fillForm(){
    this.settingsForm.get('stories').setValue(this.friend.stories);
    this.settingsForm.get('messages').setValue(this.friend.messages);
    this.settingsForm.get('posts').setValue(this.friend.posts);
    this.settingsForm.get('comments').setValue(this.friend.comments);
  }
}
