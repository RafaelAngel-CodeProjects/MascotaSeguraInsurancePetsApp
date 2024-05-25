import { Component, Input, ViewChild } from '@angular/core';
import { NgbTypeahead, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { Observable, Subject, merge, OperatorFunction } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map } from 'rxjs/operators';
import { FormGroup, FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-autocomplete-select-form',
  templateUrl: './autocomplete-select-form.component.html',
  styleUrls: ['./autocomplete-select-form.component.css']
})

export class AutocompleteSelectFormComponent {
  @Input() controlName: string = '';
  @Input() label: string = '';
  @Input() controlvalues: string[] = [];

  @ViewChild('instance', { static: true })
  applyForm!: FormGroup;
  instance!: NgbTypeahead;
  focus$ = new Subject<string>();
  click$ = new Subject<string>();

  search: OperatorFunction<string, readonly string[]> = (text$: Observable<string>) => {
    const debouncedText$ = text$.pipe(debounceTime(200), distinctUntilChanged());
    const clicksWithClosedPopup$ = this.click$.pipe(filter(() => !this.instance.isPopupOpen()));
    const inputFocus$ = this.focus$;

    return merge(debouncedText$, inputFocus$, clicksWithClosedPopup$).pipe(
      map((term) =>
        (term === '' ? this.controlvalues : this.controlvalues.filter((v) => v.toLowerCase().indexOf(term.toLowerCase()) > -1)).slice(0, 10),
      ),
    );
  };
}
