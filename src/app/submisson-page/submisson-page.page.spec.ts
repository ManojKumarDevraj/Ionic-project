import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SubmissonPagePage } from './submisson-page.page';

describe('SubmissonPagePage', () => {
  let component: SubmissonPagePage;
  let fixture: ComponentFixture<SubmissonPagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmissonPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
