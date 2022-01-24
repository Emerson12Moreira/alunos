import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-selection-turma',
  templateUrl: './selection-turma.component.html',
  styleUrls: ['./selection-turma.component.scss']
})
export class SelectionTurmaComponent implements OnInit {
  @Output() newTurmaValue = new EventEmitter()
  turmas: any[] = [
    {value: '6A', viewValue: '6º Ano A'  },
    {value: '6B', viewValue: '6º Ano B'  },
    {value: '6C', viewValue: '6º Ano C'  },
    {value: '7A', viewValue: '7º Ano A'  },
    {value: '7B', viewValue: '7º Ano B'  },
    {value: '7C', viewValue: '7º Ano C'  },
    {value: '8A', viewValue: '8º Ano A'  },
    {value: '8B', viewValue: '8º Ano B'  },
    {value: '8C', viewValue: '8º Ano C'  },
    {value: '9A', viewValue: '9º Ano A'  },
    {value: '9B', viewValue: '9º Ano B'  },
    {value: '9C', viewValue: '9º Ano C'  }
  ]

  selectedTurma: any = {value: '', viewValue: ''  }

  constructor() { }

  ngOnInit(): void {
  }

  setNewValue(newValue: string) {
    this.newTurmaValue.emit(newValue)
  }

}
