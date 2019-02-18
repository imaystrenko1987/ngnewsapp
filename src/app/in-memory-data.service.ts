import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Article } from './article';
import { Injectable } from '@angular/core';
import { ARTICLES } from './mock-articles';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const articles = ARTICLES;
    return {articles};
  }

  genId(articles: Article[]): number {
    return articles.length > 0 ? Math.max(...articles.map(article => article.id)) + 1 : 1;
  }
}
