import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Hero} from './hero';
import {Observable,of} from 'rxjs';
import {MessageService} from './message.service';


@Injectable({
  providedIn: 'root'
})

export class HeroService {
  private heroesUrl = 'api/heroes';
  constructor(private httpClient : HttpClient,private messageService:MessageService) { }

  getHeroes():Observable<Hero[]>{
    
    return this.httpClient.get<Hero[]>(this.heroesUrl);
  }

  getHero(id):Observable<Hero>{
    this.messageService.addMessage(`Heroes fetched.. for id =${id}`);
    return of();
  }

  private log(message: string) {
    sr:String;
    this.messageService.addMessage(`HeroService: ${message}`);
  }
}
