import { NightwatchTests } from 'nightwatch';
import { DuckPage } from '../page-objects/DuckPage';

const home: NightwatchTests = {
  'Duck Duck go navigate': () => {
    const duckPage: DuckPage = browser.page.DuckPage() as unknown as DuckPage;

    duckPage.navigate();
  },
};

export default home;
