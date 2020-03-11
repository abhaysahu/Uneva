import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-screen1',
  templateUrl: './screen1.component.html',
  styleUrls: ['./screen1.component.css']
})
export class Screen1Component implements OnInit {


  employee = []
  user =[]
  complete = 0;
  waiting = 0; 

  constructor(private userService: UserService) {

    this.userService.getUser().then(data => {
      this.employee.push(data)
      console.log(this.employee)
      
      for(let item of this.employee[0])
      {
        console.log(item.status)
        if(item.status)
        {
          this.complete = this.complete + 1;
        }
        else
        {
          this.waiting = this.waiting + 1;
        }

      }
    })

   }

   getDetails(id)
   {
     console.log(id)

   }

  ngOnInit() {
  }

}
