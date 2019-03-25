import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-reigster',
  templateUrl: './reigster.component.html',
  styleUrls: ['./reigster.component.css']
})
export class ReigsterComponent implements OnInit {
  @Output() cancelRegister = new EventEmitter();
  model: any = {};
  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  register() {
    this.authService.register(this.model).subscribe(() => {
      console.log('registration Successful');
    }, error => {
      console.log(error);
    } );
  }
  cancel() {
    this.cancelRegister.emit(false);
    console.log('cancelled');
  }

}
