import { SoccerstarPage } from './app.po';

describe('soccerstar App', () => {
  let page: SoccerstarPage;

  beforeEach(() => {
    page = new SoccerstarPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
