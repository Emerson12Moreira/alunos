import { Component } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  /* alunos: any[] = []
  constructor(private ds: DataService) {
    this.ds.getDataByName().subscribe(a=>{
      this.alunos = a
      console.log(a);
    })
  } */
}
