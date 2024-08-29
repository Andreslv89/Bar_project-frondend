import { Component, OnInit } from '@angular/core';
import { ReserveService } from '../../services/reserve.service';
import Swal from 'sweetalert2';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-reserve',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './reserve.component.html',
  styleUrl: './reserve.component.css'
})
export class ReserveComponent implements OnInit{ 
  constructor(private reserveService: ReserveService, private fb: FormBuilder){}

  reserveForm!: FormGroup

  ngOnInit(): void {
    this.reserveForm = this.fb.group({
      name: ['', [Validators.required]],
      date: ['', [Validators.required]],
      email: ['', [Validators.required]],
    })
  }

  onSubmit() :void {
    this.reserveService.createReserve(this.reserveForm.value).subscribe(
      response => {
        if(response.ok) {
          Swal.fire('Haz reservado de manera exitosa!!')
          this.resetForm()
          
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

  private resetForm () {
    this.reserveForm.reset()
    this.reserveForm.markAsPristine()
    this.reserveForm.markAsUntouched()
  }
}
