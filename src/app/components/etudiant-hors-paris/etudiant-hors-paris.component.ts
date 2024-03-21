import { Component, OnInit } from '@angular/core';
import { Etudiant } from '../../models/etudiant';
import { EtudiantService } from '../../services/etudiant.service';

@Component({
  selector: 'app-etudiant-hors-paris',
  templateUrl: './etudiant-hors-paris.component.html',
  styleUrls: ['./etudiant-hors-paris.component.css']
})
export class EtudiantHorsParisComponent implements OnInit {
  etudiantsHorsParis: Etudiant[] = [];

  constructor(private etudiantService: EtudiantService) { }

  async ngOnInit(): Promise<void> {
    const etudiants = await this.etudiantService.getEtudiants();
    this.etudiantsHorsParis = etudiants.filter(etudiant => etudiant._ville !== 'Paris');
  }
}
