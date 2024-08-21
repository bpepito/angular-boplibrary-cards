import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MybplibraryComponent } from './mybplibrary.component';

describe('MybplibraryComponent', () => {
  let component: MybplibraryComponent;
  let fixture: ComponentFixture<MybplibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MybplibraryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MybplibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
