import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Article } from './article';
import { Search } from './search';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class NewsService {

  private newsUrl = 'api/articles';  // URL to web api

  constructor(
    private http: HttpClient) { }

  getArticleNo404<Data>(id: number): Observable<Article> {
    const url = `${this.newsUrl}/?id=${id}`;
    return this.http.get<Article[]>(url)
      .pipe(
        map(articles => articles[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          this.log(`${outcome} article id=${id}`);
        }),
        catchError(this.handleError<Article>(`getArticle id=${id}`))
      );
  }

  getArticle(id: number): Observable<Article> {
    const url = `${this.newsUrl}/${id}`;
    return this.http.get<Article>(url).pipe(
      tap(_ => this.log(`fetched article id=${id}`)),
      catchError(this.handleError<Article>(`getArticle id=${id}`))
    );
  }

  searchArticles(searchModel: Search): Observable<Article[]> {
    let searchQueryArr = [];
    if(searchModel.source){
      searchQueryArr.push(`source=${searchModel.source}`);
    }
    if(searchModel.sourceUrl){
      searchQueryArr.push(`sourceUrl=${searchModel.sourceUrl}`);
    }
    if(searchModel.text){
      searchQueryArr.push(`heading=${searchModel.text}`);
    }
    if(searchModel.createdByMe){
      searchQueryArr.push(`author=${searchModel.author}`);
    }
    const searchQuery = searchQueryArr.length > 0 ? "?" + searchQueryArr.join("&"): "";
    return this.http.get<Article[]>(`${this.newsUrl}/${searchQuery}`).pipe(
      tap(_ => this.log(`found articles matching "${searchQuery}"`)),
      catchError(this.handleError<Article[]>('searchArticles', []))
    );
  }

  addArticle (article: Article): Observable<Article> {
    return this.http.post<Article>(this.newsUrl, article, httpOptions).pipe(
      tap((newArticle: Article) => this.log(`added article w/ id=${newArticle.id}`)),
      catchError(this.handleError<Article>('addArticle'))
    );
  }

  deleteArticle (article: Article | number): Observable<Article> {
    const id = typeof article === 'number' ? article : article.id;
    const url = `${this.newsUrl}/${id}`;

    return this.http.delete<Article>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted article id=${id}`)),
      catchError(this.handleError<Article>('deleteArticle'))
    );
  }

  updateArticle (article: Article): Observable<any> {
    return this.http.put(this.newsUrl, article, httpOptions).pipe(
      tap(_ => this.log(`updated article id=${article.id}`)),
      catchError(this.handleError<any>('updateArticle'))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private log(message: string) {
    console.log(message);
  }
}
