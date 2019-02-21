import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ArticleSearchComponent } from './article-search.component';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ArticleSearchComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule, FormsModule, HttpClientTestingModule
      ],
      declarations: [
        ArticleSearchComponent
      ],
    }).compileComponents();
  }));

  it('should create the ArticleSearchComponent', () => {
    const fixture = TestBed.createComponent(ArticleSearchComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
