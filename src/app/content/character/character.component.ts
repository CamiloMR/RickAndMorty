import { Component, OnInit } from '@angular/core';
import { CharacterService } from './service/character.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css'],
})
export class CharacterComponent implements OnInit {
  constructor(private characterService: CharacterService) {}

  ngOnInit() {
    console.log(this.getCharacters());
  }

  getCharacters() {
    this.characterService.getCharacters();
  }
}
