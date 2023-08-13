import { Component, OnInit } from '@angular/core';

import { SubtService } from './service';

@Component({
  selector: 'app-subtt',
  templateUrl: './subtt.component.html',
  styleUrls: ['./subtt.component.css']
})
export class SubttComponent implements OnInit {
  private res : number = 0;

  constructor(private SubtService: SubtService) {}

  ngOnInit(): void {
  }

  subt(numero1: string, numero2: string): void {
    let n1: number;
    let n2: number;
    n1 = parseFloat(numero1);
    n2 = parseFloat(numero2);
    this.res = this.SubtService.subt(n1, n2);
    }

  get resultado(): string {
    return this.res.toString();
  }
  
}
