import { MediaRecorderPage } from './app.po';

describe('media-recorder App', function() {
  let page: MediaRecorderPage;

  beforeEach(() => {
    page = new MediaRecorderPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
