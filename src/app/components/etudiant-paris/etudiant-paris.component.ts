import { Component, OnInit } from '@angular/core';
import { Etudiant } from '../../models/etudiant';
import { EtudiantService } from '../../services/etudiant.service';

@Component({
  selector: 'app-etudiant-paris',
  templateUrl: './etudiant-paris.component.html',
  styleUrl: './etudiant-paris.component.css'
})
export class EtudiantParisComponent {

  etudiantsParis: Etudiant[] = [];

  constructor(private etudiantService: EtudiantService) { }

  async ngOnInit(): Promise<void> {
    // Attendre la résolution de la promesse
    const etudiants = await this.etudiantService.getEtudiants();
    // Filtrer les étudiants résidant à Paris
    this.etudiantsParis = etudiants.filter(etudiant => etudiant._ville === 'Paris');
  }
}
