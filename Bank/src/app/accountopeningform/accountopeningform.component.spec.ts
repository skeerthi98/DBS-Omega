import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountopeningformComponent } from './accountopeningform.component';

describe('AccountopeningformComponent', () => {
  let component: AccountopeningformComponent;
  let fixture: ComponentFixture<AccountopeningformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountopeningformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountopeningformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
