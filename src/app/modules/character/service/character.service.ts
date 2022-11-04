import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class CharacterService {
  private urlBase: string = 'https://rickandmortyapi.com/api';

  constructor(private http: HttpClient) { }

  getCharacters() {
    return this.http.get
  }
}