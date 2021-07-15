import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-input-search',
  templateUrl: './input-search.component.html',
  styleUrls: ['./input-search.component.css']
})
export class InputSearchComponent implements OnInit {

  @Output() keyword = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  getKeyword(event: any) {
    this.keyword.emit(event);
  }

}
