import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentListaComponent } from './comment-lista.component';

describe('CommentListaComponent', () => {
  let component: CommentListaComponent;
  let fixture: ComponentFixture<CommentListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommentListaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CommentListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
