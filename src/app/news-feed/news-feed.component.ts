import { Component, OnInit } from '@angular/core';

import { Article } from '../article';
import { NewsService } from '../news.service';
import { Search } from '../search';
import { NewsComponent } from '../news/news.component';

@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.css']
})
export class NewsFeedComponent implements OnInit {
  articles: Article[];
  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.getArticles(new Search());
  }

  getArticles(searchModel: Search): void {
    searchModel.author = searchModel.createdByMe ? NewsComponent.currentAuthor : "";
    this.newsService.searchArticles(searchModel)
    .subscribe(articles => this.articles = articles);
  }

  add(article: Article): void {
    if (!article) { return; }
    this.newsService.addArticle(article)
      .subscribe(article => {
        this.articles.push(article);
      });
  }

  delete(article: Article): void {
    this.articles = this.articles.filter(h => h !== article);
    this.newsService.deleteArticle(article).subscribe();
  }

  isEditable(article: Article): boolean {
    if(!article.author)
      return true;
    return article.author.toLowerCase() == NewsComponent.currentAuthor;
  }
}
