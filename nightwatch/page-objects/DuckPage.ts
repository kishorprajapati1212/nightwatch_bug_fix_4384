import { PageObjectModel, EnhancedPageObject } from 'nightwatch';

const duckPageCommands = {};

const duckPage: PageObjectModel = {
  url: 'http://www.duckduckgo.com',
  commands: [duckPageCommands],
  elements: {
    searchBar: {
      selector: 'input[type=text]',
    },
    submit: {
      selector: 'input[name=btnK]',
    },
  },
} satisfies PageObjectModel;

export default duckPage;

export interface DuckPage
  extends EnhancedPageObject<
    typeof duckPageCommands,
    typeof duckPage.elements,
    any
  > {}
