import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( private http: HttpClient) { }

  getUser()
  {
    return this.http.get(environment.apiUrl+'/list.php').toPromise();
  }

  getpatient(id: any)
  {
    return this.http.get(environment.apiUrl+'/patient.php?id='+id).toPromise();

  }

}
