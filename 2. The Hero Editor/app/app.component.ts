import { Component } from '@angular/core';

// Hero Class 생성
export class Hero {
	id : number;
	name : string;
}

@Component({
	selector : 'my-app',
	/*
	 * property -> Binding -> {{ 단방향바인딩 }}
	 *
	 * template의 오타 방지를 위하여 백틱을 활용한다 " ` "
	 *
	 * ngModel directive를 통하여 two-way binding을 사용한다
	 * */
	
	template : `<h1>{{title}}</h1>
				<h2>{{hero.name}} details!</h2>
				<div>
					<label>id : </label>{{hero.id}}
				</div>
				<div>
					<label>name : </label>
					<input [(ngModel)]="hero.name" placeholder="name">
				</div>
			`,
})

export class AppComponent {
	title = 'Tour of Heroes';
	
	hero : Hero = {
		id   : 1,
		name : 'Windstorm'
	};
}
