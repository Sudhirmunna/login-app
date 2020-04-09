import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'login-app';

  loginForm: FormGroup;
  @Output() emitLoginEvent = new EventEmitter<any>();
  // @Output() open: EventEmitter<any> = new EventEmitter();

  constructor() {
   }

  ngOnInit(): void {

    this.loginForm = new FormGroup({
      userName: new FormControl(''),
      password: new FormControl(''),
    });

  }

  onSubmit() {
    console.warn(this.loginForm.value);
    localStorage.setItem('profile', JSON.stringify(this.loginForm.value));
    this.emitLoginEvent.emit(this.loginForm.value);

  }


}
