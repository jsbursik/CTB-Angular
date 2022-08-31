import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MailerService {
  
  host: string = "cartruckbuyer"

  url: string = `https://${this.host}:3000/send`

  constructor(private http: HttpClient) { }

  sendLead(formData: FormData) {
    return this.http.post(this.url, formData, { responseType: 'text' });
  }
}

