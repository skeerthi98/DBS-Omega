import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountclosingformComponent } from './accountclosingform.component';

describe('AccountclosingformComponent', () => {
  let component: AccountclosingformComponent;
  let fixture: ComponentFixture<AccountclosingformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountclosingformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountclosingformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
