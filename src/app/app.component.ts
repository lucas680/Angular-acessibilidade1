import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'a11y-p1';
  yesNoAnswer = 'no';
  public form: FormGroup = null;

  constructor(formBuilder: FormBuilder){
    this.form = formBuilder.group({
      yesNoAnswer: [{
        value: 'no',
        disabled: false
      }]
    });
  }

  public submit(): void{
    console.log(this.form.value)
  }
}
