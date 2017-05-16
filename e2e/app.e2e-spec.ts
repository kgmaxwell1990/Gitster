import { GitsterPage } from './app.po';

describe('gitster App', () => {
  let page: GitsterPage;

  beforeEach(() => {
    page = new GitsterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
