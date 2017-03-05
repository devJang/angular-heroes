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
	// body contentType을 체크한다
	private headers = new Headers({'Content-type' : 'application/json'});
	private heroesUrl = 'api/heroes';
	
	constructor(private http : Http) {}
	
	getHeroes() : Promise<Hero[]> {
		return this.http.get(this.heroesUrl)
					.toPromise()
					.then(response => response.json().data as Hero[])
					.catch(this.handleError);
	}
	
	getHero(id : number) : Promise<Hero> {
		const url = `${this.heroesUrl}/${id}`;
			
		return this.http.get(url)
			.toPromise()
			.then(response => response.json().data as Hero)
			.catch(this.handleError);
	}
	
	update(hero : Hero) : Promise<Hero> {
		const url = `${this.heroesUrl}/${hero.id}`;
		
		return this.http
				.put(url, JSON.stringify(hero), {headers : this.headers})
				.toPromise()
				.then(() => hero)
				.catch(this.handleError);
	}
	
	create(name : string) : Promise<Hero> {
		return this.http
				.post(this.heroesUrl, JSON.stringify({name : name}), {headers : this.headers})
				.toPromise()
				.then(res => res.json().data)
				.catch(this.handleError);
	}
	
	delete(id : number) : Promise<void> {
		const url = `${this.heroesUrl}/${id}`;
		
		return this.http.delete(url, {headers : this.headers})
					.toPromise()
					.then(() => null)
					.catch(this.handleError);
	}
	private handleError(error : any) : Promise<any> {
		console.error('An error occured', error);
	
	return Promise.reject(error.message || error);
	}
}
