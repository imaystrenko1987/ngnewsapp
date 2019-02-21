import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NewsComponent } from './news.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NewsFeedComponent } from '../news-feed/news-feed.component';
import { FormsModule } from '@angular/forms';
import { ArticleSearchComponent } from '../article-search/article-search.component';

describe('NewsComponent', () => {
  let component: NewsComponent;
  let fixture: ComponentFixture<NewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsComponent, ArticleSearchComponent, NewsFeedComponent ],
      imports: [RouterTestingModule.withRoutes([]), HttpClientTestingModule, FormsModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
