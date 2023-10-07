import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HelloService {

  constructor(private http: HttpClient) { }

  getGreeting(name: string) {
      const url = environment.helloApiUrl
      const body = {
        Name: name
      }
    return this.http.post(url, body);
  }
}
