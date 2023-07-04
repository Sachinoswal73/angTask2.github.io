import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sub-task1',
  templateUrl: './sub-task1.component.html',
  styleUrls: ['./sub-task1.component.scss']
})

export class SubTask1Component implements OnInit {

  sForm1 : any;

  ipf = document.getElementsByClassName('ipf'); 

  toAddField = '';

  ngOnInit(): void {

    this.sForm1 = new FormGroup({
        fname : new FormControl('', Validators.required),
        lname : new FormControl('', Validators.required)
    })

    console.log(this.sForm1);

  }

  
  onSelect( rv : any){
      //console.log('phone is clicked - ', rv.target.value);
      if( rv.target.value === 'phn' ) {
          //console.log('phone');
          this.sForm1.controls.phn = new FormControl('', Validators.required);
          console.log(this.sForm1);
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
          this.sForm1.controls.eml = new FormControl('', Validators.required);
          console.log(this.sForm1);
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
