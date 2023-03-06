import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tela-agenda',
  templateUrl: './tela-agenda.page.html',
  styleUrls: ['./tela-agenda.page.scss'],
})
export class TelaAgendaPage implements OnInit {
  
  customPopoverOptions = {
    header: 'escolha o serviço',
    subHeader: 'agendamentos rapidos',
    message: '',
  };

  public editMode = 1

  constructor() { }

  edit(){
    switch (this.editMode){
      case 1:
        this.editMode = 2;
        break;

      case 2:
        this.editMode = 3;
        break;
    }
  }

  tela(){
    this.editMode = 1
  }

  ngOnInit() {

}
}
