import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ArticleComponent } from './article.component';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ArticleComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule, FormsModule, HttpClientTestingModule
      ],
      declarations: [
        ArticleComponent
      ],
    }).compileComponents();
  }));

  it('should create the ArticleComponent', () => {
    const fixture = TestBed.createComponent(ArticleComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
