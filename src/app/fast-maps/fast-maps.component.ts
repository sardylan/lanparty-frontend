import {Component, OnInit} from '@angular/core';
import {ApiService} from '../service/api.service';
import {GameMap} from '../model/gamemap.model';

@Component({
  selector: 'app-fast-maps',
  templateUrl: './fast-maps.component.html',
  styleUrls: ['./fast-maps.component.sass']
})
export class FastMapsComponent implements OnInit {

  gameMaps: GameMap[];

  constructor(private api: ApiService) {
  }

  ngOnInit() {
  }

  mapRestart() {
    // this.api.mapRestart();
  }

  fastRestart() {
    // this.api.fastRestart();
  }

  sendMessage(message: string) {
    // this.api.sendMessage(message);
  }

  changeMap(gametype: string, mapTag: string) {
    // this.api.changeMap(gametype, mapTag);
  }
}
