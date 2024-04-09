import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPioDialogComponent } from './new-pio-dialog.component';

describe('NewPioDialogComponent', () => {
  let component: NewPioDialogComponent;
  let fixture: ComponentFixture<NewPioDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewPioDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewPioDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
