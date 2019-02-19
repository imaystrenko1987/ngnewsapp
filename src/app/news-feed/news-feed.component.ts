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
  counter: number = 0;
  increment: number = 3;
  showMoreDisabled: boolean;
  searchModel: Search = new Search();

  constructor(private newsService: NewsService) { 
  }

  ngOnInit() {
    this.getArticles();
  }

  getData(){
    this.getArticles();
  }

  getArticles(searchModel: Search = null): void {
    if(searchModel){
      this.searchModel = searchModel;
      this.counter = this.increment;
    }
    else{
      this.counter += this.increment;
    }
    this.searchModel = searchModel ? searchModel : this.searchModel;
    this.searchModel.author = this.searchModel.createdByMe ? NewsComponent.currentAuthor : "";
    this.newsService.searchArticles(this.searchModel)
    .subscribe(articles => {
      this.showMoreDisabled = this.counter >= articles.length
      articles = articles.slice(0, this.counter)
      
      this.articles = articles;
    });
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
