import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Pizza Margherita',
      'A simple, but delicious pizza',
      'https://i.ytimg.com/vi/K3Ceg_QB6e0/maxresdefault.jpg'
    ),
    new Recipe(
      'Pizza Pesce',
      'Fish Galore in a wodden burning oven made bread',
      'https://i.ytimg.com/vi/K3Ceg_QB6e0/maxresdefault.jpg'
    )
  ];

  constructor() {}

  ngOnInit() {}
}
