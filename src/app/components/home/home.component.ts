import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { AuthService } from '../../services/auth.service';
import { IAluno } from '../../interfaces/ialuno';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  alunos: IAluno[] = []
  constructor(public auth: AuthService, public ds: DataService) {
    
  }

  getTurma(turma: string): void {
    this.ds.getDataByTurma(turma).subscribe(a=>{
      const tmp = a
      this.alunos = tmp.sort((a, b) => a.numero - b.numero)
    })
  }

  ngetTurma(turma: string){
    console.log(turma);
  }

  ngOnInit(): void {
  }

}
