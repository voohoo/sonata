import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource } from '@angular/material';

import { SearchService } from '../search/search.service';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {

  @ViewChild(MatSort) sort: MatSort;

  displayedColumns: string[] = ['cover', 'name', 'artist.name', 'album'];
  tracks: any;

  constructor(private ss: SearchService) { }

  ngOnInit() {
    this.ss.getTopTracks()
      .subscribe(data => {
        this.tracks = new MatTableDataSource(data['tracks']['track']);
        this.tracks.sort = this.sort;
      });
  }

}
