import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CountrylistPage } from './countrylist.page';

describe('CountrylistPage', () => {
  let component: CountrylistPage;
  let fixture: ComponentFixture<CountrylistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountrylistPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CountrylistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
