import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LibrarylogService {


  url = "http://localhost/library/";

  //'http://localhost/Sales/';

  //Applications/MAMP/tmp/mysql/mysql.sock


  constructor(private http: HttpClient) { }

  saveService(lib:any){
    return this.http.post(this.url + 'newuser.php',JSON.stringify(lib));
  }

  SaveUser(lib:any){
    return this.http.post(this.url + 'user.php',JSON.stringify(lib));
  }

  StudentLogs(lib:any){
    return this.http.post(this.url + 'log.php',JSON.stringify(lib));
  }
  
  Login(log: any) {
    return this.http.post(this.url + 'userlogin.php', JSON.stringify(log));
  }

  patron(){
    return this.http.get(this.url + 'display.php');
  }

  getStudent(){
    return this.http.get(this.url + 'display.php');
  }

  StudLog(eid: any) {
    return this.http.get(this.url + 'displayOne.php?eid=' + eid);
  }

  StudLogin(log: any) {
    return this.http.post(this.url + 'studlog.php', JSON.stringify(log));
  }
}
