import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  ismenu = false
  constructor() { }
  toggleMenu(){ this.ismenu = !this.ismenu }
}
