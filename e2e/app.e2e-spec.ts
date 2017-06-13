import { BusinessTimesFrontPage } from './app.po';

describe('business-times-front App', () => {
  let page: BusinessTimesFrontPage;

  beforeEach(() => {
    page = new BusinessTimesFrontPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
