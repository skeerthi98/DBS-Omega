import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoNgmodelComponent } from './demo-ngmodel.component';

describe('DemoNgmodelComponent', () => {
  let component: DemoNgmodelComponent;
  let fixture: ComponentFixture<DemoNgmodelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoNgmodelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoNgmodelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
