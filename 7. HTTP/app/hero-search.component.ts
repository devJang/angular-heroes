import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/subject';

import 'rxjs/add/observable/of';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
// 필터 텍스트가 변경된 경우에만 요청을 보낸다
import 'rxjs/add/operator/distinctUntilChanged';

import { HeroSearchService } from './hero-search.service';
import { Hero } from './hero';

@Component({
	moduleId    : module.id,
	selector    : 'hero-search',
	templateUrl : './hero-search.component.html',
	styleUrls   : [ './hero-search.component.css' ],
	providers   : [ HeroSearchService ],
})

export class HeroSearchComponent implements OnInit {
	heroes : Observable<Hero[]>;
	private searchTerms = new Subject<string>();
	
	constructor(private heroSearchService : HeroSearchService,
	            private router : Router) {
	}
	
	search(term : string) : void {
		this.searchTerms.next(term);
	}
	
	ngOnInit() : void {
		this.heroes = this.searchTerms
				.debounceTime(300)
				.distinctUntilChanged()    // 다음 검색어와 이전 검색어가 같으면 무시한다
				.switchMap(term => term     // 최신 search-service만 반환해준다.
								?
			                   this.heroSearchService.search(term)
			                   :
			                   Observable.of<Hero[]>([]))
				.catch(error => {
					console.log(error);
					
					return Observable.of<Hero[]>([]);
		});
	}
	gotoDetail(hero : Hero) : void {
		let link = ['/detail', hero.id];
		this.router.navigate(link);
	}
}