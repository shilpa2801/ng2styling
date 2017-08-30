import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectorsclassComponent } from './selectorsclass.component';

describe('SelectorsclassComponent', () => {
  let component: SelectorsclassComponent;
  let fixture: ComponentFixture<SelectorsclassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectorsclassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectorsclassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
