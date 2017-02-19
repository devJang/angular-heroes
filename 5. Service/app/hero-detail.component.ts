import { Component, Input } from '@angular/core';
import { Hero } from './hero';

// AppComponent에서 HeroDetailComponent를 component화 한다
@Component({
	selector : 'my-hero-detail',
	template : `        
			<div *ngIf = "hero">
				<h2>{{hero.name}} details!</h2>
				<div>
					<label>id : </label>{{hero.id}}
				</div>
				<div>
					<label>name : </label>
					<input [(ngModel)]="hero.name" placeholder="name">
				</div>
			</div>
        `
})

export class HeroDetailComponent {
	// @Input() 장식자는 외부에서 전달된 값을 받기 위하여 사용한다
	@Input()
	hero : Hero;
}