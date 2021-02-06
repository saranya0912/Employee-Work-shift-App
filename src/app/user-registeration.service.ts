import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserRegisterationService {

  constructor(private http:HttpClient) { }

  public doRegisteration(user:any){
    return this.http.post("http://localhost:6039/create",user,{responseType:'text' as 'json'});  }

}
