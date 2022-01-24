import { Component, Input, OnInit } from '@angular/core';
import { IAluno } from '../../interfaces/ialuno';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {
  @Input() alunos: IAluno[] = []
  constructor() { }

  ngOnInit(): void {
  }

}
