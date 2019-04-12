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

  displayedColumns: string[] = ['cover', 'name', 'artist', 'album'];
  tracks: any;

  constructor(private ss: SearchService) { }

  ngOnInit() {
    this.getTopTracks();
  }

  getTopTracks() {
    this.ss.getTopTracks()
      .subscribe(data => {
        let tracks = data['tracks']['track'];
        // format to display in table properly
        for (let i = 0; i < tracks.length; i++) {
          tracks[i]['artist'] = tracks[i]['artist']['name'];
        }
        this.tracks = new MatTableDataSource(tracks);
        this.tracks.sort = this.sort;
      });
  }

  updateTracks(tracks) {
    tracks = tracks['results']['trackmatches']['track'];
    this.tracks = new MatTableDataSource(tracks);
    this.tracks.sort = this.sort;
  }

}
