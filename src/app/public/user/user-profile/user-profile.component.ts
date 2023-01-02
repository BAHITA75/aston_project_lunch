import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/_services/user-service';
import { User } from '../../../_model/user';
import { Img } from '../../../_model/img';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit {
  user: User[] = [];
  image: Img;

  userId: any;
  msgError: string = '';
  userInfo: any = '';
  nbCreditAsk: number = 0;
  nbDebitAsk: number = 0;
  sexe: string;
  isLunch: boolean = false;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private http: HttpClient
  ) {}

  ngOnInit() {
    //Récuperation de l'id de l'utilisateur via l'url
    this.userId = this.route.snapshot.paramMap.get('userId');
    // Appel de la fonction pour récuperer les données
    this.getUserInfos(this.userId);
  }

  async getUserInfos(userId: number) {
    // Récuperation des données de l'utilisateur
    try {
      // Requete pour récuperer les données de l'utilisateur dans le service user
      this.userInfo = await this.userService.getUserInfos(userId);

      this.isLunch = this.userInfo.isLunchLady;

      //SELON LE RESULTAT DU SEX RECU : ATTRIBUTION DE LA VALEUR EN STRING
      switch (this.userInfo.sex) {
        case 0:
          this.sexe = 'Masculin';
          break;
        case 1:
          this.sexe = 'Féminin';
          break;
        case 2:
          this.sexe = 'Autre';
          break;
      }
    } catch (error: any) {
      //GESTION DES ERREURS ET MESSAGES D'ERREURS
      // if(error['status'] == 401){
      //   this.showBadToaster("Mais Chef ! T'es plus connecté :( ... Reviens :D ! ");
      // }else{
      //   this.showBadToaster('Chef, chef ! On a un problème :( ' + error['status'] + ' ' + error.error['exceptionMessage']);
      // }
    }
  }
}
