import { Component, OnInit } from '@angular/core';
import { Etudiant } from '../../models/etudiant';
import { EtudiantService } from '../../services/etudiant.service';

@Component({
  selector: 'app-form-etudiant',
  templateUrl: './form-etudiant.component.html',
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
  } `
})
export class FormEtudiantComponent implements OnInit {
  etudiants: Etudiant[] = [];
  searchValue: string = '';
  searchResult: Etudiant | undefined;

  constructor(private etudiantService: EtudiantService) { }

  ngOnInit(): void {
    this.etudiantService.getEtudiants().then(data => {
      this.etudiants = data;
    });
  }

  searchEtudiant(): void {
    this.searchResult = this.etudiants.find(etudiant =>
      etudiant._nom.toLowerCase() === this.searchValue.toLowerCase() || etudiant._idCand.toString() === this.searchValue
    );
  }

  resetSearch(): void {
    this.searchValue = '';
    this.searchResult = undefined;
  }
}
