import { Injectable } from '@angular/core';
import { Specialite } from '../models/specialite';

@Injectable({
  providedIn: 'root'
})

export class SpecService {
  private specialitesUrl = '../../assets/specialite.json';
  private dataspecialite: Specialite[] = [];

  constructor() {
    this.loadSpecialite();
  }

  private async loadSpecialite() {
    const response = await fetch(this.specialitesUrl);
    const data = await response.json();
    this.dataspecialite = data.map((item: any) => new Specialite(
      item.specialite,
      item.id
    ));
  }

  getSpecialite(): Promise<Specialite[]> {
    return this.loadSpecialite().then(() => this.dataspecialite);
  }
}

