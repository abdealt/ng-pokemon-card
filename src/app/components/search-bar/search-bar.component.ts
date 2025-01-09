import { Component, EventEmitter, Input, output, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  imports: [FormsModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {

  @Input() searchValue: string = ''; // On crée un input pour récupérer la valeur de la recherche
  @Output() searchChange = new EventEmitter<string>(); // On crée un output pour émettre un événement nommé "searchChange" lorsqu'on met à jour la valeur de la recherche

  searchButonClicked = output({
    alias:'submit',
  }); // On crée un output pour émettre un événement nommé "searchButonClicked" lorsqu'on clique sur le bouton de recherche

  searchClick(){
    this.searchButonClicked.emit(); // On émet l'événement "searchButonClicked" lorsqu'on clique sur le bouton de recherche
  }

  updateSearch(value : string){
    this.searchChange.emit(value); // On émet l'événement "searchChange" lorsqu'on met à jour la valeur de la recherche "value"
  }
}