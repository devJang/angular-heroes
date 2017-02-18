import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
	selector : 'my-app',
	// template과 같이 css도 사용할 수 있다. 마치 html의 <style></style>을 연상시킨다.
	styles   : [ `
            .selected {
              background-color: #CFD8DC !important;
              color: white;
            }
            .heroes {
              margin: 0 0 2em 0;
              list-style-type: none;
              padding: 0;
              width: 15em;
            }
            .heroes li {
              cursor: pointer;
              position: relative;
              left: 0;
              background-color: #EEE;
              margin: .5em;
              padding: .3em 0;
              height: 1.6em;
              border-radius: 4px;
            }
            .heroes li.selected:hover {
              background-color: #BBD8DC !important;
              color: white;
            }
            .heroes li:hover {
              color: #607D8B;
              background-color: #DDD;
              left: .1em;
            }
            .heroes .text {
              position: relative;
              top: -3px;
            }
            .heroes .badge {
              display: inline-block;
              font-size: small;
              color: white;
              padding: 0.8em 0.7em 0 0.7em;
              background-color: #607D8B;
              line-height: 1em;
              position: relative;
              left: -1px;
              top: -4px;
              height: 1.8em;
              margin-right: .8em;
              border-radius: 4px 0 0 4px;
            }
          `
	],
	providers : [ HeroService ],
	
	/*
	 * property -> Binding -> {{ 단방향바인딩 }}
	 *
	 * template의 오타 방지를 위하여 백틱을 활용한다 " ` "
	 *
	 * ngModel directive를 통하여 two-way binding을 사용한다
	 * */
	template : `
        <h1>{{title}}</h1>
				<h2>My Heroes</h2>
				<ul class="heroes">
				    <!--
				        1. 영웅이 아닌 영웅들이기 때문에 *ngFor문을 활용하여 나열해준다
				        2. 클릭시 함수를 호출하며 선택한 hero를 넘긴다
				        3. 선택한 영웅과 details의 영웅이 같다면 li의 class에 selected를 추가해준다.
				    -->
				    <li *ngFor="let hero of heroes" (click)="onSelect(hero)"
				    [class.selected] = "hero === selectedHero">
				        <span class="badge">{{hero.id}}</span> {{hero.name}}
            </li>
        </ul>
        
        <!--
          selectedHero 속성을 HeroDetailComponent의 Hero로 바인딩한다.
          my-hero-detail는 hero-detail.component의 meta-data selector로 지정해줬다.
        -->
        <my-hero-detail [hero]="selectedHero"></my-hero-detail>
			`,
})

export class AppComponent implements OnInit {
	constructor(private heroService : HeroService) { }
	
	title = 'Tour of Heroes';
	heroes : Hero[];
	// 선택된 영웅을 위하여 정의한다
	selectedHero : Hero;
	
	/*
	 영웅 목록 <li></li> 태그 선택시 실행되는 함수로
	 선택된 영웅을 매개변수로 받아 selectedHero로 할당해준다
	 */
	onSelect(hero : Hero) : void {
		this.selectedHero = hero;
	}
	
	getHeroes() : void {
		this.heroService.getHeroes().then(heroes => this.heroes = heroes);
	}
	
	ngOnInit() : void {
		this.getHeroes();
	}
}
