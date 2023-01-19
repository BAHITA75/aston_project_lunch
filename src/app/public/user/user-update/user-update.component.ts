import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../../_services/user-service';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { User } from '../../../_interfaces/user';
import { Observable, ReplaySubject } from 'rxjs';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.scss'],
})
export class UserUpdateComponent implements OnInit {
  submitted: boolean = false;

  user: any;
  userUpdated: any;

  updateUserInfos: FormGroup;
  name: FormControl;
  firstname: FormControl;
  phone: FormControl;
  email: FormControl;
  address: FormControl;
  postalCode: FormControl;
  town: FormControl;
  password: FormControl;
  passwordVerif: FormControl;
  sex: FormControl;

  imagePath: string = '';
  image64: any;
  base64: string = 'data:image/png;base64,';

  jwt: any = '';

  //-------------------- CONSTRUCTEUR ----------------------------------------------
  constructor(
    private router: Router,
    private builder: FormBuilder,
    private userService: UserService
  ) {
    //CONFIGURATEUR DES VALIDATORS : EMAIL
    this.email = new FormControl('', [Validators.required, Validators.email]);

    //CONFIGURATEUR DES VALIDATORS : MOT DE PASSE
    this.password = new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]);

    //CONFIGURATEUR DES VALIDATORS : NOM
    this.name = new FormControl('', [
      Validators.required,
      Validators.pattern('[a-zA-Z]*'),
    ]);

    //CONFIGURATEUR DES VALIDATORS : PRENOM
    this.firstname = new FormControl('', [
      Validators.required,
      Validators.pattern('[a-zA-Z]*'),
    ]);

    //CONFIGURATEUR DES VALIDATORS : TELEPHONE
    this.phone = new FormControl('', [
      Validators.required,
      Validators.pattern('[0-9]*'),
      Validators.minLength(10),
      Validators.maxLength(10),
    ]);

    //CONFIGURATEUR DES VALIDATORS : ADRESSE POSTALE
    this.address = new FormControl('', [Validators.required]);

    //CONFIGURATEUR DES VALIDATORS : CODE POSTALE
    this.postalCode = new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(5),
      Validators.pattern('[0-9]*'),
    ]);

    //CONFIGURATEUR DES VALIDATORS : VERIFICATION DE MOT DE PASSE
    this.passwordVerif = new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]);

    //CONFIGURATEUR DES VALIDATORS : VILLE
    this.town = new FormControl('', [Validators.required]);

    //CONFIGURATEUR DES VALIDATORS : SEXE
    this.sex = new FormControl('', [Validators.required]);

    //CRÉATION DU FORMULAIRE REACTIF DE CREATION DE COMPTE
    this.updateUserInfos = this.builder.group({
      name: this.name,
      firstname: this.firstname,
      phone: this.phone,
      email: this.email,
      address: this.address,
      postalCode: this.postalCode,
      password: this.password,
      passwordVerif: this.passwordVerif,
      sex: this.sex,
      town: this.town,
    });

    // Recuperation de l'objet user dans le storage pour recuperer les informations à modifier
    let userCrypted: any = localStorage.getItem('user');
    let userUncrypted: User = JSON.parse(userCrypted);
    this.user = userUncrypted;

    // Ajout des valeurs récupérées de l'utilisateur dans le formulaire pré-rempli
    this.updateUserInfos.setValue({
      name: this.user.name,
      firstname: this.user.firstname,
      phone: this.user.phone ? this.user.phone : '', // récupérer la propriété dans l'objet user si elle existe sinon on recupère un champs vide
      email: this.user.email,
      address: this.user.address ? this.user.address : '',
      postalCode: this.user.postalCode ? this.user.postalCode : '',
      town: this.user.town ? this.user.town : '',
      password: '',
      passwordVerif: '',
      sex: this.user.sex,
    });

    this.getImage(this.user.id);
  }

  ngOnInit(): void {
    this.getImage(this.user.id);
  }
  //-------------------- Récupérer l'image de l'utilisateur -------------------------------------
  async getImage(userId: number) {
    try {
      //Recuperation de l'image par le service user
      let userImage: any = await this.userService.getUserImage(userId);
      this.image64 = userImage['image64'];
    } catch (error: any) {
      console.log(error);
    }
  }
  //-------------------- Changement des infomations de l'utilisateur ----------------------------------------------
  async upadateUserInfos() {
    //Bouton de validation du formulaire
    this.submitted = true;
    // Récuperation les valeurs modifiées pour les inserer dans la BDD (verification si changeme,nt de Mot de passe)
    if (this.updateUserInfos.value.password == '') {
      this.userUpdated = {
        address: this.updateUserInfos.value.address,
        postalCode: this.updateUserInfos.value.postalCode,
        email: this.updateUserInfos.value.email,
        name: this.updateUserInfos.value.name,
        firstname: this.updateUserInfos.value.firstname,
        phone: this.updateUserInfos.value.phone,
        town: this.updateUserInfos.value.town,
        sex: this.updateUserInfos.value.sex,
      };
    } else {
      this.userUpdated = {
        address: this.updateUserInfos.value.address,
        postalCode: this.updateUserInfos.value.postalCode,
        email: this.updateUserInfos.value.email,
        password: this.updateUserInfos.value.password,
        name: this.updateUserInfos.value.name,
        firstname: this.updateUserInfos.value.firstname,
        phone: this.updateUserInfos.value.phone,
        town: this.updateUserInfos.value.town,
        sex: this.updateUserInfos.value.sex,
      };
    }
    console.log(this.userUpdated);

    try {
      // Récuperation de l'Id de l'utilisateur
      let idUser = this.user.id;
      // Insersion des modifications de l'utilisateur dans la BDD
      let userUpdated = await this.userService.updateUser(
        this.userUpdated,
        idUser
      );
      // Changement de l'objet utilisateur dans le LocalStorage
      localStorage.setItem('user', JSON.stringify(userUpdated));

      this.router.navigate([`user/user-profile/${this.user.id}`]);
    } catch (error: any) {}
  }
  //--------------------- Modification de l'image de l'utilisateur  -------------------//
  async changeImage(file: any) {
    //Requete asynchrone de changement de l'avatar de l'utilisateur
    try {
      //Récuperation des informations du fichier choisi
      this.imagePath = file.name;
      //Convertion du path du fichier en string base 64
      this.convertFile(file).subscribe((base64) => {
        this.base64 = this.base64 + base64;
        this.image64 = this.base64;
        //Enregistrement dans la BDD de l'objet contenant les informations de l'avatar de l'utilisateur
        this.setImage();
      });
    } catch (error: any) {
      console.log('changeImage', error);
    }
  }
  //-------------------- Enregistrement de l'image dans la BDD --------------------------
  async setImage() {
    //Formation de l'objet contenant les informations de l'avatar de l'utilisateur
    let imageObj = {
      imagePath: this.imagePath,
      image64: this.image64,
    };
    //Requetes asynchrone de changement d'avatar au service user
    await this.userService.changeUserPicture(this.user.id, imageObj);
    //Redirection vers la page "mon compte"
    // this.router.navigate([`user/profile/${this.user.id}`]);
  }

  //------------------- Conversion du path d'une image en base 64 ---------------//
  convertFile(file: File): Observable<string> {
    const result = new ReplaySubject<string>(1);
    const reader = new FileReader();
    //Conversion du fichier en string bianire
    reader.readAsBinaryString(file);
    //Conversion du fichier en string base 64
    reader.onload = (event: any) =>
      result.next(btoa(event.target.result.toString()));

    return result;
  }
}
