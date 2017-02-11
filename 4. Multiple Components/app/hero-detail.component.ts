import { Component, Input } from '@angular/core';
import { Hero } from './hero';

// AppComponent에서 HeroDetailComponent를 component화 한다
@Component({
  selector : 'my-hero-detail',
  template : `        
        <!-- *ngIf문을 활용하여 선택된 영웅이 있으면 밑의 내용을 보여준다 -->
				<div *ngIf = "hero">
          <!-- selectedHero 에서 hero로 변경된다 -->
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
