import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sub-task2',
  templateUrl: './sub-task2.component.html',
  styleUrls: ['./sub-task2.component.scss']
})

export class SubTask2Component {

  sForm2 : any;

  ipf = document.getElementsByClassName('ipf'); 

  toAddField = '';

  ngOnInit(): void {

    this.sForm2 = new FormGroup({
        fname : new FormControl('', Validators.required),
        lname : new FormControl('', Validators.required)
    })

    console.log(this.sForm2);

  }

  
  onSelect( rv : any){
      //console.log('phone is clicked - ', rv.target.value);
      if( rv.target.value === 'phn' ) {
          //console.log('phone');
          this.sForm2.controls.phn = new FormControl('', Validators.required);
          console.log(this.sForm2);
          this.toAddField = `
          <div class="form-group">
            <label for="phn">Phone</label>
            <input type="text" 
                name="" 
                id="phn" 
                class="form-control"
                formControlName="phn"
                >
            </div>
                `;
      }
      else {
          // console.log('email');
          this.sForm2.controls.eml = new FormControl('', Validators.required);
          console.log(this.sForm2);
          this.toAddField = `
          <div class="form-group">
            <label for="eml">Email</label>
            <input type="text" 
                name="" 
                id="eml" 
                class="form-control"
                formControlName="eml"
                >
            </div>
                `;
      }
  }

}
