import { Pipe, PipeTransform } from '@angular/core';
import { StocksService, NewsInterface } from "../services/stocks.service";

@Pipe({
  name: 'news',
  pure: false // Mark pipe as impure.
})

// Fetches an observable from StocksService and maintains its own state depending on the observable result.
export class NewsPipe implements PipeTransform {
  cachedSource: string = "";
  news: string = "loading...";

  constructor(private service: StocksService) { }

  transform(source: string, args?: any): string {
    if (source != this.cachedSource) {
      this.cachedSource = source;
      this.service.getNewsSnapshot(source).subscribe((news: NewsInterface)=>
        this.news = `<a href="${news.url}" target="_blank">${news.title}</a>`);
    }
    return this.news;
  }

}
