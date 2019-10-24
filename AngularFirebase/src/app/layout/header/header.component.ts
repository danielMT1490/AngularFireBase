import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  color = 'primary';
  checked = false;
  disabled = false;

  text = 'Sign In';
  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

  changeChecked(){
    this.checked = !this.checked;
    if(this.checked){
      this.authService.logIn().then((name: any) => {
        console.log(name);
        this.text = name
      });
    }
    else{
      this.authService.logOut()
      this.text = 'Sign In';
    }
  }
}
