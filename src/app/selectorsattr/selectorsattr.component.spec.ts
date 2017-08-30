import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectorsattrComponent } from './selectorsattr.component';

describe('SelectorsattrComponent', () => {
  let component: SelectorsattrComponent;
  let fixture: ComponentFixture<SelectorsattrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectorsattrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectorsattrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
