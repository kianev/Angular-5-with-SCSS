import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {DataService} from "../data.service";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  goals: any;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private _data: DataService) {
    this.activatedRoute.params.subscribe(res => {
      console.log('query param extracted: ',res.id);
    });
  }

  ngOnInit() {
    this._data.goal.subscribe(res => this.goals = Array.from(res));
  }

  sendMeHome(){
    this.router.navigate(['']);
  }

}
