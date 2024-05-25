import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutocompleteSelectFormComponent } from './autocomplete-select-form.component';

describe('AutocompleteSelectFormComponent', () => {
  let component: AutocompleteSelectFormComponent;
  let fixture: ComponentFixture<AutocompleteSelectFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AutocompleteSelectFormComponent]
    });
    fixture = TestBed.createComponent(AutocompleteSelectFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
