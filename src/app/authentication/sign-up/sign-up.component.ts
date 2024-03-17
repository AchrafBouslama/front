import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/AuthService/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  signInButton!: HTMLElement | null;
  container!: HTMLElement | null;
  audioPlayer!: HTMLAudioElement;
  router!: any;

  user = {
    firstname:'' ,
    lastname: "",
    email:'',
  }
 

  constructor(private _auth:AuthService) {}

  ngOnInit(): void {
    
  /*  this.audioPlayer = new Audio('assets/bruit.mp3'); 

  this.audioPlayer.addEventListener('ended', () => {
    setTimeout(() => {
      this.audioPlayer.currentTime = 0; 
      this.audioPlayer.play(); 
    }, 5000); 
  });
  this.audioPlayer.play();
  this.audioPlayer.play();
*/

  this.signInButton = document.getElementById('signIn');
    this.container = document.getElementById('container');
    if (this.signInButton && this.container) {
      this.signInButton.addEventListener('click', () => {
        this.container?.classList.remove('right-panel-active');
      });
    }
    const signUpButton = document.getElementById('signUp');
    if (signUpButton && this.container) {
      signUpButton.addEventListener('click', () => {
        this.container?.classList.add('right-panel-active');
      });
    }
  }
register (){

  let r = new FormData()
  r.append('firstname',this.user.firstname)
  r.append('lastname',this.user.lastname)
  r.append('email',this.user.email)
  this._auth.register(r).subscribe();

}


}
