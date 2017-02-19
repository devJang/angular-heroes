import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { Hero } from './hero';
import { HeroService } from "./hero.service";

// AppComponent에서 HeroDetailComponent를 component화 한다
@Component({
	moduleId    : module.id,
	selector    : 'my-hero-detail',
	templateUrl : './hero-detail.component.html',
	styleUrls   : [ './hero-detail.component.css' ]
})


export class HeroDetailComponent implements OnInit {
	// @Input() 장식자는 외부에서 전달된 값을 받기 위하여 사용한다
	@Input()
	hero : Hero;
	
	constructor(private heroService : HeroService,
	            private route : ActivatedRoute,
	            private location : Location) {
	}
	
	ngOnInit() : void {
		this.route.params.switchMap((params : Params) => this.heroService.getHero(+params[ 'id' ]))
			.subscribe(hero => this.hero = hero);
	}
	
	goBack() : void {
		this.location.back();
	}
}
