import { GstAppPage } from './app.po';

describe('gst-app App', () => {
  let page: GstAppPage;

  beforeEach(() => {
    page = new GstAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
