import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElperroComponent } from './elperro.component';

describe('ElperroComponent', () => {
  let component: ElperroComponent;
  let fixture: ComponentFixture<ElperroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElperroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElperroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
