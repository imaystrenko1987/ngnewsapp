import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NewsFeedComponent } from './news-feed.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('NewsFeedComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule, HttpClientTestingModule
      ],
      declarations: [
        NewsFeedComponent
      ],
    }).compileComponents();
  }));

  it('should create the NewsFeedComponent', () => {
    const fixture = TestBed.createComponent(NewsFeedComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
