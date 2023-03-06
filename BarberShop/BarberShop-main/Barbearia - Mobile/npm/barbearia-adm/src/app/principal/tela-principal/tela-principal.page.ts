import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TelaLoginPage } from 'src/app/login/tela-login/tela-login.page';
import { User } from 'src/app/models/cadastro';
import { ServicesService } from 'src/app/service/service.service';



@Component({
  selector: 'app-tela-principal',
  templateUrl: './tela-principal.page.html',
  styleUrls: ['./tela-principal.page.scss'],
})
export class TelaPrincipalPage implements OnInit {
  public consultas : Observable<User[]>
  public login: TelaLoginPage

  constructor(
    private service: ServicesService) {
      this.consultas = this.service.getContacts()
    }


  ngOnInit() {
  }

}
