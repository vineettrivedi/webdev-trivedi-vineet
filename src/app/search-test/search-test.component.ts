import { Component, OnInit } from '@angular/core';
import {SearchService} from '../services/search.service.client';

@Component({
  selector: 'app-search-test',
  templateUrl: './search-test.component.html',
  styleUrls: ['./search-test.component.css']
})
export class SearchTestComponent implements OnInit {

  image: String;
  result: any;

  searchImage(image: String) {
    this.searchService.searchImage(image)
      .subscribe((result) => {
        console.log(result);
        this.result = result;
      });
  }

  constructor(private searchService: SearchService) { }

  ngOnInit() {
  }

}
