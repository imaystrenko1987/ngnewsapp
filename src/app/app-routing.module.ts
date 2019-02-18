import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NewsComponent }      from './news/news.component';
import { ArticleComponent }  from './article/article.component';

const routes: Routes = [
  { path: 'detail/:id', component: ArticleComponent },
  { path: 'detail', component: ArticleComponent },
  { path: '', component: NewsComponent },
  { path: ':sourceUrl', component: ArticleComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
