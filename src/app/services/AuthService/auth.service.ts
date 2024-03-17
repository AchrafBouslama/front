import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 private url = 'http://localhost:8080/api/vi/auth/';

  constructor(private http: HttpClient) { }
register (user : any ){  
  return this.http.post(this.url +'register',user )
}

}
