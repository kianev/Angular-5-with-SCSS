import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs/BehaviorSubject";

@Injectable()
export class DataService {
  private goals = new BehaviorSubject<any>(['I want to learn Angular 5', 'I want to learn NodeJS', 'I want to learn ReactJS']);
  goal = this.goals.asObservable();

  constructor() { }

  changeGoal(goal){
    this.goals.next(goal);
  }
}
