import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// Two-Way Binding을 사용하기 위해 추가해준다
import { FormsModule }    from '@angular/forms';

import { AppComponent }  from './app.component';

@NgModule({
	imports      : [ BrowserModule, FormsModule],
	declarations : [ AppComponent ],
	bootstrap    : [ AppComponent ]
})

export class AppModule {
}
