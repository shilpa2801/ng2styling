import { BasicstylingPage } from './app.po';

describe('basicstyling App', () => {
  let page: BasicstylingPage;

  beforeEach(() => {
    page = new BasicstylingPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
