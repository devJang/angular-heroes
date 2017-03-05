// 응집도있는 어플리케이션을 구성하는 데 도움을 준다.
import { NgModule }      from '@angular/core';

// 브라우저와 관련된 모듈을 포함한다.
import { BrowserModule } from '@angular/platform-browser';

// 폼 관련 모둘이나 지시자를 포함한다
import { FormsModule }    from '@angular/forms';

// HTTP 통신과 관련된 모듈을 포함한다
import { HttpModule } from '@angular/http';

// 라우터 설정을 해놓은 모듈을 import한다
import { AppRoutingModule } from './app-routing.module';

// 휘발성DB를 지원하는 메모리DB로 간단한 HTTP 요청을 테스트할 수 있다.
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

// InMemoryWebApiModule에서 사용할 초기화 데이터 정의
import { InMemoryDataService } from './in-memory-data.service'

// 제목과 navigation bar를 제공한다
import { AppComponent }  from './app.component'

// Top Heroes를 제공하며 hero-search를 포함하고 있다.
import { DashboardComponent } from './dashboard.component';

// 영웅상세보기를 제공하며 영웅의 이름을 바꿀 수 있다.
import { HeroDetailComponent } from './hero-detail.component';

// 영웅 목록을 제공하며 영웅을 추가하고 삭제할 수 있으며 영웅상세보기로 이동할 수 있다.
import { HeroesComponent } from './heroes.component';

// 어플리케이션의 서비스계층을 담당한다.
import { HeroService } from './hero.service';

// 영웅 검색을 제공하며 검색된 영웅 상세보기로 이동할 수 있다.
import { HeroSearchComponent } from './hero-search.component';

@NgModule({
	imports      : [ BrowserModule,
	                 FormsModule,
	                 HttpModule,
	                 InMemoryWebApiModule.forRoot(InMemoryDataService),
	                 AppRoutingModule
	],
	declarations : [ AppComponent,
	                 DashboardComponent,
	                 HeroDetailComponent,
	                 HeroesComponent,
	                 HeroSearchComponent
	],
	providers    : [ HeroService ],
	bootstrap    : [ AppComponent ]
})

export class AppModule {
}