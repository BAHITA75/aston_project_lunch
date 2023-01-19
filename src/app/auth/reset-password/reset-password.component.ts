import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_services/auth/auth.service';
import { UserService } from 'src/app/_services/user-service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  submitted = false; //Necessaire à la gestion des erreurs (activation des validators)
  resetPasswordForm: FormGroup; 
  email: FormControl;

  constructor( private router: Router, private builder: FormBuilder, private authService: AuthService){
    // Configuration des validators Email
    this.email = new FormControl('', [Validators.required, Validators.email]);

    // Création du formulaire réactif
    this.resetPasswordForm = this.builder.group({
      email: this.email,
    });
  }

  ngOnInit(): void {}
//-------------------- Envoi du mot de passe ----------------------------------------------
  async resetPassword() {

    try { 

      await this.authService.forgotPassword(this.resetPasswordForm); 

      this.router.navigate(['auth/login']);
    } 
    catch (error: any) {
      error
    }
  }
//-------------------- RETOUR VERS LA PAGE DE CONNEXION  ----------------------------------------------
  onReturn() {
    //REDIRECTION
    this.router.navigate(['login']);
  }
}
