import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FirstArticle } from 'src/models/firstPage.module';
import { ArticlesService } from 'src/services/articles.service';

@Component({
  selector: 'app-main1',
  templateUrl: './main1.component.html',
  styleUrls: ['./main1.component.css']
})
export class Main1Component implements OnInit { 
  articles: Array<FirstArticle>;
  constructor(private artService: ArticlesService) { }

  ngOnInit(): void 
  {
    this.articles = this.artService.getFirst();
  }

}
