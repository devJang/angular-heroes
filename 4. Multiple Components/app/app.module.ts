import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// Two-Way Binding을 사용하기 위해 추가해준다
import { FormsModule }    from '@angular/forms';

import { AppComponent }  from './app.component';
// 새로 만들어진 Component를 참조한다
import { HeroDetailComponent } from './hero-detail.component';

@NgModule({
  imports      : [ BrowserModule, FormsModule ],
  //  새로운 Component를 추가해준다
  declarations : [ AppComponent, HeroDetailComponent ],
  bootstrap    : [ AppComponent ]
})

export class AppModule {
}
