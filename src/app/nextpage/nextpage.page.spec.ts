import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NextpagePage } from './nextpage.page';

describe('NextpagePage', () => {
  let component: NextpagePage;
  let fixture: ComponentFixture<NextpagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NextpagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NextpagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
