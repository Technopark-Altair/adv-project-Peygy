import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FirstArticle } from 'src/models/firstPage.module';
import { ArticlesService } from 'src/services/articles.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  article: FirstArticle;
  constructor(private artService: ArticlesService, private route: ActivatedRoute) { }

  ngOnInit(): void 
  {
    this.route.params.subscribe(
      (data) => 
      {
        let id = +data.id;
        this.article = this.artService.getArt(id);
      }
    );
  }

}
