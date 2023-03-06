import { Component, OnInit } from '@angular/core';
import { TelaPrincipalPage } from 'src/app/principal/tela-principal/tela-principal.page';
import { ServicesService } from 'src/app/service/services.service';


@Component({
  selector: 'app-tela-login',
  templateUrl: './tela-login.page.html',
  styleUrls: ['./tela-login.page.scss'],
})
export class TelaLoginPage implements OnInit {
  input_name: string;
  public mostrar: TelaPrincipalPage


  constructor(private service: ServicesService){}

 
  
  ngOnInit() {
  }

}
