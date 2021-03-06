import { Component } from '@angular/core';

// Hero Class 생성
export class Hero {
  id : number;
  name : string;
}

// 여러 영웅들을 다루기 위하여 모의 데이터를 생성한다.
const HEROES : Hero[] = [
  { id : 11, name : 'Mr. Nice' },
  { id : 12, name : 'Narco' },
  { id : 13, name : 'Bombasto' },
  { id : 14, name : 'Celeritas' },
  { id : 15, name : 'Magneta' },
  { id : 16, name : 'RubberMan' },
  { id : 17, name : 'Dynama' },
  { id : 18, name : 'Dr IQ' },
  { id : 19, name : 'Magma' },
  { id : 20, name : 'Tornado' }
];

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
  
  /*
   * property -> Binding -> {{ 단방향바인딩 }}
   *
   * template의 오타 방지를 위하여 백틱을 활용한다 " ` "
   *
   * ngModel directive를 통하여 two-way binding을 사용한다
   * */
  template : `<h1>{{title}}</h1>
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
        
        <!-- *ngIf문을 활용하여 선택된 영웅이 있으면 밑의 내용을 보여준다 -->
				<div *ngIf = "selectedHero">
				  <h2>{{selectedHero.name}} details!</h2>
          <div>
            <label>id : </label>{{selectedHero.id}}
          </div>
          <div>
            <label>name : </label>
            <input [(ngModel)]="selectedHero.name" placeholder="name">
          </div>
				</div>
			`,
})

export class AppComponent {
  title = 'Tour of Heroes';
  // 이제부터는 hero가 아닌 Heroes !
  heroes = HEROES;
  // 선택된 영웅을 위하여 정의한다
  selectedHero : Hero;
  
  /*
    영웅 목록 <li></li> 태그 선택시 실행되는 함수로
    선택된 영웅을 매개변수로 받아 selectedHero로 할당해준다
  */
  onSelect(hero : Hero) : void {
    this.selectedHero = hero;
  }
}
