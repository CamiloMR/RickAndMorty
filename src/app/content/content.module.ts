import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CharacterComponent } from './character/character.component';

@NgModule({
  declarations: [CharacterComponent],
  imports: [FormsModule],
  exports: [CharacterComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ContentModule {}
