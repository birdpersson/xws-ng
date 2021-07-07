import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendSettingsDialogComponent } from './friend-settings-dialog.component';

describe('FriendSettingsDialogComponent', () => {
  let component: FriendSettingsDialogComponent;
  let fixture: ComponentFixture<FriendSettingsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FriendSettingsDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FriendSettingsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
