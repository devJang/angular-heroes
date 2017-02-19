import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// 폼 관련 모둘이나 지시자를 포함.
import { FormsModule }    from '@angular/forms';

import { AppComponent }  from './app.component'
import { DashboardComponent } from './dashboard.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent } from './heroes.component';
import { HeroService } from './hero.service';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
	imports      : [ BrowserModule, FormsModule, AppRoutingModule ],
	declarations : [ AppComponent, DashboardComponent, HeroDetailComponent, HeroesComponent ],
	providers    : [ HeroService ],
	bootstrap    : [ AppComponent ]
})

export class AppModule {
}