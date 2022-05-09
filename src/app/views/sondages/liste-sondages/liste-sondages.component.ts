import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Sondage} from 'src/app/views/sondages/sondage.model';
import {SondageService} from 'src/app/views/sondages/sondage.service';

@Component({
  selector: 'app-liste-sondages',
  templateUrl: './liste-sondages.component.html',
  styleUrls: ['./liste-sondages.component.scss']
})
export class ListeSondagesComponent implements OnInit {

  sondages! : Sondage[];


  constructor(private sondageService: SondageService, private router: Router) { }

  ngOnInit(): void {
    this.getSondages();
  }

  private getSondages(){
    this.sondageService.getSondages().subscribe(data=>{
      this.sondages = data;
    });
  }

}
