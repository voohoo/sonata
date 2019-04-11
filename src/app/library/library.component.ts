import { Component, OnInit } from '@angular/core';

import Track from './Track';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {

  displayedColumns: string[] = ['title', 'artist', 'album'];

  tracks: Track[] = [
    { title: 'Apocalypse Dreams', artist: 'Tame Impala', album: 'Lonerism' },
    { title: 'Bound 2', artist: 'Kanye West', album: 'Yeezus' },
    { title: 'Doing It Right', artist: 'Daft Punk', album: 'RAM' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
