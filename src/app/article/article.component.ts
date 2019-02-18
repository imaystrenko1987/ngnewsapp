import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Article } from '../article';
import { NewsService } from '../news.service';
import { NewsComponent } from '../news/news.component';
import { Search } from '../search';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @Input() article: Article;
  error: string;

  constructor(
    private route: ActivatedRoute,
    private newsService: NewsService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getArticle();
  }

  getArticle(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    const sourceUrl = this.route.snapshot.paramMap.get('sourceUrl');
    if(sourceUrl){
      var search = new Search();
      search.sourceUrl = sourceUrl;
      this.newsService.searchArticles(search)
      .subscribe(articles => this.article = articles[0]);
      return;
    }
    this.article = new Article();
    if (id) {
      this.newsService.getArticle(id)
        .subscribe(article => this.article = article);
    }
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    if(!this.article.heading){
      this.error = "Please enter heading!";
      return;
    }
    if(!this.article.content){
      this.error = "Please enter content!";
      return;
    }
    this.article.addDate = new Date();
    this.article.sourceUrl = this.article.heading.replace(/ /g, "-").toLowerCase();
    if(!this.article.id){
      this.article.author = NewsComponent.currentAuthor;
      this.newsService.addArticle(this.article)
      .subscribe(() => this.goBack());
      return;
    }
    this.newsService.updateArticle(this.article)
      .subscribe(() => this.goBack());
  }
}
