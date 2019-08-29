import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountopeninghomeComponent } from './accountopeninghome.component';

describe('AccountopeninghomeComponent', () => {
  let component: AccountopeninghomeComponent;
  let fixture: ComponentFixture<AccountopeninghomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountopeninghomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountopeninghomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
