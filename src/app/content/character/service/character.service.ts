import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoCharacter } from '../objects/character.constants';

@Injectable()
export class CharacterService {
  private urlBase: string = 'https://rickandmortyapi.com/api/character';

  constructor(private http: HttpClient) {}

  getCharacters() {
    return this.http.get<InfoCharacter>(this.urlBase);
  }
}
