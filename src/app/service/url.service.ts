import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  public get backend() : string {
    return 'https://quiet-crag-88107.herokuapp.com/';
  }

  public get frontend() : string {
    return 'http://localhost:4200/';
  }
  
  constructor() { }
}
