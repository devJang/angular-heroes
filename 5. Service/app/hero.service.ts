import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';

/*
	제공자를 통한 의존성 주입을 위해 주입할 클래스를 정의한다
	( 변수나 함수에서는 사용할 수 없다 )
	해당 클래스가 의존성 주입 대상임을 명시한다.
*/
@Injectable()
export class HeroService {
	/*
		비동기 처리를 위한 Promise (ES6)
		resolve : Promise 완료시
	 */
	getHeroes() : Promise<Hero[]> {
		return Promise.resolve(HEROES);
	}
}