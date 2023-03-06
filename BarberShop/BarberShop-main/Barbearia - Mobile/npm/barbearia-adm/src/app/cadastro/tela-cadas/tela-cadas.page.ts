import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/cadastro';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { ServicesService } from 'src/app/service/service.service';


@Component({
  selector: 'app-tela-cadas',
  templateUrl: './tela-cadas.page.html',
  styleUrls: ['./tela-cadas.page.scss'],
})
export class TelaCadasPage implements OnInit {
  user = [];
  segId = "overview";
  public userForm: FormGroup;
  public editMode = false


  constructor(
    private service:ServicesService, 
    private router:Router, 
    private userBuilder:FormBuilder,
    private alertController: AlertController) {}

    async presentAlert() {
      const alert = await this.alertController.create({
        header: 'Alerta!',
        subHeader: 'Algo deu errado =(',
        message: 'Por Favor, preencha todos os campos corretamente.',
        buttons: ['Voltar'],
      });
  
      await alert.present();
    }

    signUp(data:User): void {
switch (this.editMode){
  case false:
  this.editMode = true
  break

  case true:
    this.editMode = false
    break
  }

  if(this.userForm.valid){
    this.service.userSignUp(data);
    this.router.navigate(['/tela-login'])
   
  }
  else{
    this.presentAlert()
  }

}

    ngOnInit(){

      this.userForm = this.userBuilder.group({
        nome: ['',Validators.compose([Validators.required,Validators.minLength(3),Validators.maxLength(50),Validators.pattern('[a-zA-Z]*')])],
        email: ['',Validators.compose([Validators.required,Validators.email])],
        telefone: ['',Validators.compose([Validators.required, Validators.minLength(14)])],
        senha: ['',Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(16)])]
      });

}
}
