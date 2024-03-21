import { Component, OnInit } from '@angular/core';
import { Specialite } from '../../models/specialite';
import { SpecService } from '../../services/spec.service';

@Component({
  selector: 'app-form-specialite',
  templateUrl: './form-specialite.component.html',
  styles: `input{background-color: #fff7e0; color: #334456; placeholder: #334456; border: 1px solid #334456; border-radius: 5px; padding: 5px; font-family: "Days One", sans-serif;; font-size: 18px; outline: none; }
  h3{color: #334456; font-family: "Days One", sans-serif; font-size: 20px; }
  .Rechercher{background-color: #334456; color: #fff7e0; border: none; border-radius: 5px; padding: 5px 10px; font-family: "Days One", sans-serif; font-size: 18px; cursor: pointer;  margin-left: 10px; }
  .reinitialiser{background-color: #FF97D9; color: #fff7e0; border: none; border-radius: 5px; padding: 5px 10px; font-family: "Days One", sans-serif; font-size: 18px; cursor: pointer; margin-left: 10px; }
  table {
    font-family: "Inter", sans-serif;
    border-spacing: 20px 5px;
    border-collapse: separate;
    background-color: #fcfaf0;
    /* width: 80%; */
    border-collapse: collapse;
  }
  
  table th {
    font-family: "Days One", sans-serif;
    text-align: left;
  }
  
  
  th,
  td {
    padding: 8px;
    text-align: left;
    border: none;
  }
  
  tr:nth-child(even) {
    background-color: #fff7e0;
  }`
})
export class FormSpecialiteComponent implements OnInit {
  specialites: Specialite[] = [];
  searchValue: string = '';
  searchResult: Specialite | undefined;

  constructor(private specialiteService: SpecService) { }

  ngOnInit(): void {
    this.specialiteService.getSpecialite().then(data => {
      this.specialites = data;
    });
  }

  searchSpecialite(): void {
    this.searchResult = this.specialites.find(specialite =>
      specialite._libelle.toLowerCase() === this.searchValue.toLowerCase() || specialite._idSpec.toString() === this.searchValue
    );
  }

  resetSearch(): void {
    this.searchValue = '';
    this.searchResult = undefined;
  }
}
