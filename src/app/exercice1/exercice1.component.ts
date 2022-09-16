import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.css']
})
export class Exercice1Component implements OnInit {

  myVariable: string = 'Passez votre souris sur moi';
  shape: string;

  constructor() { }

  ngOnInit(): void {
  }

  changeClass = ($event) => {
    this.shape = 'square';
    this.myVariable = 'Et voilà :)'
  }

}
