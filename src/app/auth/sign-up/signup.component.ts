import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/_services/user-service'; //Service de gestion de l'utilisateur
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';//Imports necessaires au formulaire reactifs et au bon fonctionnement du formulaire (validators)
import { Observable, ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})

export class SignupComponent implements OnInit {

  submitted = false; //Necessaire à la gestion des erreurs (activation des validators)
  createAccountForm: FormGroup; //Formulaire de creation de compte
  name: FormControl;
  firstname: FormControl;
  phone: FormControl;
  email: FormControl; 
  adress: FormControl;
  postalCode: FormControl;
  image: FormControl ;
  town: FormControl;
  password: FormControl; 
  passwordVerif: FormControl;
  sex: FormControl;
  avatar: any ;
  image64:string = "" ;
  imagePath:string = "" ;
  msgError: string = '';
  people:any ;
  base64Output : string = "data:image/png;base64,";

  constructor( private router: Router, private builder: FormBuilder,private userService:UserService ) {

     //Configuration des contraintes des validators
     this.email = new FormControl('', [
      Validators.required,
      Validators.email
    ]);

    this.password = new FormControl('', [
      Validators.required,
      Validators.minLength(8)
    ]);

    this.name = new FormControl('', [
      Validators.required,
      Validators.pattern('[a-zA-Z]*')
    ]);

    this.firstname = new FormControl('', [
      Validators.required,
      Validators.pattern('[a-zA-Z]*')
    ]);

    this.phone = new FormControl('', [
      Validators.required,
      Validators.pattern('[0-9]*'),
      Validators.minLength(10),
      Validators.maxLength(10)
    ]);

    this.adress = new FormControl('', [
      Validators.required
    ]);

    this.postalCode = new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(5),
      Validators.pattern('[0-9]*')
    ]);

    this.passwordVerif = new FormControl('', [
      Validators.required,
      Validators.minLength(8)
    ]);

    this.town = new FormControl('', [
      Validators.required
    ]);

    this.sex = new FormControl('', [
      Validators.required
    ]);

    this.image = new FormControl('', [
      Validators.required
    ]);

    //Création du formulaire de création de compte
    this.createAccountForm = this.builder.group({
      name: this.name,
      firstname: this.firstname,
      phone: this.phone,
      email: this.email,
      adress: this.adress,
      postalCode: this.postalCode,
      password: this.password,
      passwordVerif: this.passwordVerif,
      image: this.image,
      sex: this.sex,
      town: this.town
    });
  }

  ngOnInit(): void {}
//-------------------- Creation d'un compte utilisateur ----------------------------------------------
  async createAccount(){
    //Gestion des validateurs
    this.submitted = true;

    //Recupérations des informations saisies dans le formulaire d'enregistrement
    this.people = {
      "address": this.createAccountForm.value.adress,
      "wallet": 0,
      "postalCode": this.createAccountForm.value.postalCode,
      "email": this.createAccountForm.value.email,
      "isLunchLady": false,
      "password": this.createAccountForm.value.password,
      "name": this.createAccountForm.value.name,
      "firstname": this.createAccountForm.value.firstname,
      "phone": this.createAccountForm.value.phone,
      "town": this.createAccountForm.value.town,
      "sex": this.createAccountForm.value.sex,
      "image": {
        "imagePath": this.imagePath,
        "image64": this.avatar
      }
    }
     try {
      //Requete au service des utilisateurs
      await this.userService.createAccount(this.people);

      this.router.navigate(['auth/login']);
    }
    catch (error: any) {
      
    }
  }
//-------------------- Return vers la page login ----------------------------------------------
 returnLogin(){
    this.router.navigate(['auth/login']);
  }
//-------------------- FONCTIONS DES TOASTER ----------------------------------------------
  // showGoodToaster(message:string){
  //   this.toastr.success(message) ;
  // }
  // showBadToaster(message:string){
  //   this.toastr.error(message) ;
  // }
  // showCleverToaster(message:string){
  //   this.toastr.info(message) ;
  // }
//-------------------- MODIFICATION DE L'AVATAR --------------------------------------------
  async onModifyAvatar(file:any){
    try {
        //Récuperation du path de l'image choisie
        this.imagePath = file.name ;

        //Conversion du path de l'image choisie, enregistrement et modification de l'avatar
        this.convertFile(file).subscribe(base64 => {
          this.base64Output = this.base64Output + base64;
          this.avatar = this.base64Output ;
        });
    }
    catch (error:any) {
      //GESTION DES ERREURS ET MESSAGES D'ERREURS
      // if(error['status'] == 401){
      //   this.showBadToaster("Mais Chef ! T'es plus connecté :( ... Reviens :D ! ");
      // }else{
      //   this.showBadToaster('Chef, chef ! On a un problème :( ' + error['status'] + ' ' + error.error['exceptionMessage']);
      // }
    }
  }
//-------------------- Convertion du path d'une image en string de base 64 ------------------------
  convertFile(file : File) : Observable<string> {
    const result = new ReplaySubject<string>(1);
    const reader = new FileReader();
    reader.readAsBinaryString(file);
    reader.onload = (event:any) => result.next(btoa(event.target.result.toString()));
    return result;
  }
}
