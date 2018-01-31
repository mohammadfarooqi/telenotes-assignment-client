import { TelenotesAssignmentClientPage } from './app.po';

describe('telenotes-assignment-client App', () => {
  let page: TelenotesAssignmentClientPage;

  beforeEach(() => {
    page = new TelenotesAssignmentClientPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
