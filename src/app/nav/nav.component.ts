import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  employee: any
  logo = ""
  public id: string;

  constructor(private userService: UserService,private currentRoute: ActivatedRoute) { 

     this.id = this.currentRoute.snapshot.paramMap.get('id');
    
    console.log(this.id)
    if(this.id)
    {
      this.userService.getpatient(this.id).then(data => {
        this.employee = data
        this.logo = this.employee.person_full_name

        console.log(this.logo)

      })
    }
    else {
      this.logo="Queue Managment";
    }

  }

 ngOnInit() {

  }

}
