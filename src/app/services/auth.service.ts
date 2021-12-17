import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  BASE_URL:string = 'http://localhost:5000'

  constructor(private http: HttpClient) { }

  public userAuth(requestObject:any){

      
      if(requestObject.METHOD === 'get'){

        const URL = `${this.BASE_URL}/${requestObject.LOCATION}/${requestObject.BODY.email}/${requestObject.BODY.password}`
        return this.http.get(URL).toPromise();

      }
      
      if(requestObject.METHOD === 'post'){

        const URL = `${this.BASE_URL}/${requestObject.LOCATION}`
        return this.http.post(URL, requestObject.BODY).toPromise();
      }

  }
}
