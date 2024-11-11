import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LikeReposComponent } from './like-repos.component';

describe('LikeReposComponent', () => {
  let component: LikeReposComponent;
  let fixture: ComponentFixture<LikeReposComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LikeReposComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LikeReposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
