import { Injectable } from '@angular/core';
import { Headers, Http } from "@angular/http";

import 'rxjs/add/operator/toPromise';

import { Hero } from './hero';

/*
 이 서비스에 다른 종속성을 주입해야하는 메타데이터를
 우리 서비스에 대한 메타데이터로 내보낸다
 */
@Injectable()
export class HeroService {
	private heroesUrl = 'api/heroes';
	
	constructor(private http : Http) {}
	
	getHeroes() : Promise<Hero[]> {
		return this.http.get(this.heroesUrl)
					.toPromise()
					.then(response => response.json().data as Hero[])
					.catch(this.handleError);
	}
	
	private handleError(error : any) : Promise<any> {
		console.error('An error occured', error);
		
		return Promise.reject(error.message || error);
	}
	
	getHero(id : number) : Promise<Hero> {
		const url = `${this.heroesUrl}/${id}`;
		
		return this.http.get(url)
					.toPromise()
					.then(response => response.json().data as Hero)
					.catch(this.handleError);
	}
}
