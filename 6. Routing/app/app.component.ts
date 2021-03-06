import { Component } from '@angular/core';

@Component({
	moduleId : module.id,
	selector : 'my-app',
	styleUrls : ['./app.component.css'],
	template : `
		        <h1>{{title}}</h1>
		        <nav>
			        <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
			        <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
				</nav>
				<!-- RouterOutlet은 RouterModule에서 제공되는 Directive
				최상위 Root Component로서 Router Outlet을 가진다. -->
				<router-outlet></router-outlet>
`
})

export class AppComponent {
	title = 'Tour of Heroes';
}