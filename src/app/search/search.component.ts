import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { SearchService } from './search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Output() searchEvent = new EventEmitter<any>();
  @Output() topTracksEvent = new EventEmitter<any>();

  searchText: string;

  constructor(private ss: SearchService) { }

  ngOnInit() {
  }

  search() {
    this.ss.searchByTrack(this.searchText)
      .subscribe(data => {
        this.searchEvent.emit(data);
      });
  }

  getTopTracks() {
    this.topTracksEvent.emit();
  }

}
