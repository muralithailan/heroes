import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Hero} from './hero';
import {Observable,of} from 'rxjs';
import {MessageService} from './message.service';
import {catchError,map,tap} from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})

export class HeroService {
  private heroesUrl = 'api/heroes';
  constructor(private httpClient : HttpClient,private messageService:MessageService) { }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
   
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
   
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
   
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  getHeroes():Observable<Hero[]>{
    
    return this.httpClient.get<Hero[]>(this.heroesUrl).pipe(
      catchError(this.handleError('getHeroes',[]))
    );
  }

  getHero(id:number):Observable<Hero>{
    const url = `${this.heroesUrl}/${id}`;
    this.messageService.addMessage(`Heroes fetched.. for id =${id}`);
    return this.httpClient.get<Hero>(url).pipe(
      catchError(this.handleError<Hero>('get Hero id = `$id`'))
    )
  }

  private log(message: string) {    
    this.messageService.addMessage(`HeroService: ${message}`);
  }
}
