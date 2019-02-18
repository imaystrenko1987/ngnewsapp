import { Component, OnInit, Input } from '@angular/core';
import { NewsService } from '../news.service';
import { NewsFeedComponent } from '../news-feed/news-feed.component';
import { Search } from '../search';

@Component({
  selector: 'app-article-search',
  templateUrl: './article-search.component.html',
  styleUrls: ['./article-search.component.css']
})
export class ArticleSearchComponent implements OnInit {
  searchModel: Search = new Search();
  ngOnInit(): void {
  }

  @Input() newsFeed: NewsFeedComponent;
  
  constructor(private newsService: NewsService) { }

  filterBySource(source: string): void {
    this.searchModel.source = source;
    this.newsFeed.getArticles(this.searchModel);
  }

  filterByText(text: string): void {
    this.searchModel.text = text;
    this.newsFeed.getArticles(this.searchModel);
  }

  filterByAuthor(createdByMe: boolean): void {
    
    this.searchModel.createdByMe = createdByMe;
    this.searchModel.source = '';
    this.newsFeed.getArticles(this.searchModel);
  }
}
