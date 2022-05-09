import { Component, OnInit } from '@angular/core';
import { Sondage } from '../sondage.model';
import { SondageService } from '../sondage.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-ajout-sondage',
  templateUrl: './ajout-sondage.component.html',
  styleUrls: ['./ajout-sondage.component.scss']
})
export class AjoutSondageComponent implements OnInit {

   sondage ={};

  constructor(private sondageService : SondageService, private router : Router) { }

  saveSondage(){
    this.sondageService.createSondage(this.sondage as Sondage).subscribe(data=>{
      console.log(data);
      this.goToSondageListe();
    
    },error=>console.log(error));
  }

  goToSondageListe(){
    this.router.navigate(['/li'])
  }

  onSubmit(){
    console.log(this.sondage);
    this.saveSondage;
  }

  ngOnInit(): void {
  }

}
