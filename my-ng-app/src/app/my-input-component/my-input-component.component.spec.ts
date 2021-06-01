import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyInputComponentComponent } from './my-input-component.component';

describe('MyInputComponentComponent', () => {
  let component: MyInputComponentComponent;
  let fixture: ComponentFixture<MyInputComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyInputComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyInputComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
