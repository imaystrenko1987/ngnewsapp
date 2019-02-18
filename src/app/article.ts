import { NewsComponent } from './news/news.component';

export class Article {
  constructor(){
    this.author = NewsComponent.currentAuthor;
  }

  id: number;
  heading: string;
  shortDescription: string;
  content: string;
  imageUrl: string;
  addDate: Date;
  author: string;
  sourceUrl: string;
  source: string;
}
