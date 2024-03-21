import { Component, OnInit } from '@angular/core';
import { Specialite } from '../../models/specialite';
import { SpecService } from '../../services/spec.service';

@Component({
  selector: 'app-specialite',
  templateUrl: './specialite.component.html',
  styleUrl: './specialite.component.css'
})

export class SpecialiteComponent implements OnInit {
  specialites: Specialite[] = [];

  constructor(private specService: SpecService) { }

  ngOnInit(): void {
    this.specService.getSpecialite().then(data => {
      this.specialites = data;
    });
  }
}
