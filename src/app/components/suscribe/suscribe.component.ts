import { Component } from '@angular/core';
import { FormBuilder, FormsModule,FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { SuscribeService } from '../../services/suscribe.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-suscribe',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './suscribe.component.html',
  styleUrl: './suscribe.component.css'
})
export class SuscribeComponent {
  email:string =''
  isOpen:boolean= false

  constructor(private suscribeServices:SuscribeService,private fb: FormBuilder ){}

  suscribeForm!: FormGroup

  ngOnInit():void{
    this.suscribeForm = this.fb.group({
      email: ['', [Validators.required]]
    })
  }
  onSubmit() :void {
    this.suscribeServices.createSubcribe(this.suscribeForm.value).subscribe(
      response => {
        if(response.ok) {
          Swal.fire('Felicidades ya haces parte de la tribuna!!')
          this.resetForm()
          this.openModal()
          
        } else {
          Swal.fire('Ups!! error', response.error.msg, 'error')
        }
      },
      error => {
        Swal.fire('Ups!!', error.error.msg, 'error')      
        console.error(error)
      }
    )
  }

  openModal(){
    this.isOpen=!this.isOpen
  }
  private resetForm () {
    this.suscribeForm.reset()
    this.suscribeForm.markAsPristine()
    this.suscribeForm.markAsUntouched()
  }
}


