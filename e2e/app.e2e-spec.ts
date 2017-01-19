import { Vik1Teht2Page } from './app.po';

describe('vik1-teht2 App', function() {
  let page: Vik1Teht2Page;

  beforeEach(() => {
    page = new Vik1Teht2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
