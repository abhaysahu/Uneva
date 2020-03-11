import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-screen2',
  templateUrl: './screen2.component.html',
  styleUrls: ['./screen2.component.css']
})
export class Screen2Component implements OnInit {

  employee = {}

  public id: string;
  

  constructor(private userService: UserService,private currentRoute: ActivatedRoute) {

     this.id = this.currentRoute.snapshot.paramMap.get('id');
    console.log(this.id)

    this.userService.getpatient(this.id).then(data => {
      this.employee = data
      
      console.log(this.employee)
    })
   }

  ngOnInit() {
  }

}
