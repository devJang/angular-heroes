import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
/*
	이 서비스에 다른 종속성을 주입해야하는 메타데이터를
	우리 서비스에 대한 메타데이터로 내보낸다
*/
@Injectable()
export class HeroService {
	getHeroes() : Promise<Hero[]> {
		return Promise.resolve(HEROES);
	}
}
