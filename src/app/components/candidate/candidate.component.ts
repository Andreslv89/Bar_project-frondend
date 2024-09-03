import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import Swal from 'sweetalert2'
import { CandidateService } from '../../services/candidate.service';
import { CarouselComponent } from '../carousel/carousel.component';
import { ContactfooterComponent } from '../contacts/contactfooter/contactfooter.component';

@Component({
  selector: 'app-candidate',
  standalone: true,
  imports: [ReactiveFormsModule,CarouselComponent,ContactfooterComponent],
  templateUrl: './candidate.component.html',
  styleUrl: './candidate.component.css'
})

export class CandidateComponent  implements OnInit {
  hv: File | null = null
  constructor(private candidateServices: CandidateService,private fb: FormBuilder){}
  
  candidateForm! : FormGroup

  ngOnInit(): void {
    this.candidateForm = this.fb.group({
      NombreCompleto: ['',[Validators.required]],
      Telefono:['',[Validators.required]],
      Email:['',[Validators.required]],
      Cv:[null, [Validators.required]]
    })
  }

  onFileSelected(event: any) {
    const hv = event.target.files[0]
    this.candidateForm.patchValue({
      Cv: hv   
    })
    console.log(hv)
  }
  
  onUpload() :void {
      const formData = new FormData()
      formData.append('NombreCompleto', this.candidateForm.get('NombreCompleto')?.value)
      formData.append('Telefono', this.candidateForm.get('Telefono')?.value)
      formData.append('Email', this.candidateForm.get('Email')?.value)
      formData.append('Cv', this.candidateForm.get('Cv')?.value)

      this.uploadCandidate(formData)
  }

  uploadCandidate(formData: FormData) {
    this.candidateServices.uploadCandidate(formData).subscribe(
      response => {
        console.log("response", response)
        this.resetForm()
        Swal.fire('Felicidades la tribuna te contactara pronto!!')
      },
      error => {
        console.log("error", error)
        Swal.fire('Ups!!', error.error.msg, 'error')
      }
    )
  }
    
  private resetForm () {
    this.candidateForm.reset()
    this.candidateForm.markAsPristine()
    this.candidateForm.markAsUntouched()
  }
}
