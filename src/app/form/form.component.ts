import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { createMask } from '@ngneat/input-mask';
import { MailerService } from '../mailer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {

  years: number[] = [];
  images: File[] = [];
  formData: FormData = new FormData();
  badFile: boolean = false;
  form: FormGroup;

  constructor(private mailerService: MailerService, public fb: FormBuilder, private router: Router) {
    this.form = this.fb.group({
      firstName : ['', Validators.required],
      lastName : ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      make: ['', Validators.required],
      model: ['', Validators.required],
      year: ['', Validators.required],
      miles: ['', Validators.required],
      condition: ['', Validators.required],
      photos: [''],
      vin: [''],
      comments: ['']
    });
  }

  ngOnInit(): void {
    let today = new Date();
    for(let i=1950; i <= today.getFullYear(); i++){
      this.years.push(i);
    }
  }

  phoneInputMask = createMask({
    regex: "[0-9]{3}-[0-9]{3}-[0-9]{4}",
    placeholder: '_'
  });
  
  mileInputMask = createMask({
    alias:'numeric',
    groupSeparator: ',',
    digits: 0,
    digitsOptional: false,
    placeholder: ''
  });

  uploadFiles(event: any){
    // This is essentially a Validator for the photos field
    // FormControls are flawed for file inputs because it only shows the last entry as the "value", so I can't use a normal Validator for this
    if(this.formData.getAll('photos').length > 0){
      this.formData.delete('photos');
    }
    for(let file of event.target.files){
      if(file.type.startsWith('image/')){
        this.formData.append('photos', file);
      } else {
        this.form.controls['photos'].setErrors({'invalidFile' : true});
      }
    }
    console.log(this.formData.getAll('photos'));
  }

  onSubmit() {

    // Pack up all the information from the form into a FormData
    for(const control of Object.keys(this.form.controls)){
      if(control != "photos"){
        this.formData.set(control, this.form.controls[control].value);
      }
    }

    // Alert when the message is delivered, redirect to home after you click "Okay"
    this.mailerService.sendLead(this.formData).subscribe(() => {
      alert("Message sent");
      this.form.reset();
      this.router.navigateByUrl('/')
    }, error => {
      console.log('Error:', error);
    });
  }

}
