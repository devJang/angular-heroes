import { Component } from '@angular/core';

// Data Binding 표시 -> Directive & Component Input property 설
import { OnInit } from '@angular/core';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
	selector  : 'my-app',
	styles    : [ `
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
	/*
		Service가 Component에서 사용되려면 클래스 제공자(Class Providers)에
		선언되어 Component 내부로 의존성 주입이 이루어져야 한다.
		Providers는 사용할 의존성 주입 방법을 결정하는 방법을 제공한다.
	 */
	providers : [ HeroService ],
	template : `
        <h1>{{title}}</h1>
				<h2>My Heroes</h2>
				<ul class="heroes">
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
	// 생성자 정의
	constructor(private heroService : HeroService) {
	}
	
	title = 'Tour of Heroes';
	heroes : Hero[];
	selectedHero : Hero;
	
	/*
	 영웅 목록 <li></li> 태그 선택시 실행되는 함수로
	 선택된 영웅을 매개변수로 받아 selectedHero로 할당해준다
	 */
	onSelect(hero : Hero) : void {
		this.selectedHero = hero;
	}
	
	/*
		then() 메서드는 매개변수로 두가지를 받을 수 있다.
		ex => (성공 , 호출) 콜백 함수
	 */
	getHeroes() : void {
		this.heroService.getHeroes().then(heroes => this.heroes = heroes);
	}
	
	// 속성 바인딩 후 Component와 Directive 초기화시 호출
	ngOnInit() : void {
		this.getHeroes();
	}
}