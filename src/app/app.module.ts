import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
//import { InMemoryDataService }  from './in-memory-data.service';

import { AppRoutingModule }     from './app-routing.module';

import { AppComponent }         from './app.component';
import { ArticleComponent }  from './article/article.component';
import { NewsComponent }      from './news/news.component';
import { NewsFeedComponent }      from './news-feed/news-feed.component';
import { ArticleSearchComponent } from './article-search/article-search.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
    // ,
    // HttpClientInMemoryWebApiModule.forRoot(
    //   InMemoryDataService, { dataEncapsulation: false }
    // )
  ],
  declarations: [
    AppComponent,
    NewsComponent,
    NewsFeedComponent,
    ArticleComponent,
    ArticleSearchComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
