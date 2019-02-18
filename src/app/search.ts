export class Search {
  constructor(currentAuthor: string = ""){
    this.author = currentAuthor;
  }
  source: string = "";
  text: string = "";
  createdByMe: boolean = false;
  author: string = "";
  sourceUrl: string = "";
}