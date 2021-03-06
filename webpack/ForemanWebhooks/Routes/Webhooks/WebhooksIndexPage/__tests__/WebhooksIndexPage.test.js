import { testComponentSnapshotsWithFixtures } from '@theforeman/test';
import WebhooksIndexPage from '../WebhooksIndexPage';

const fixtures = {
  'render with minimal props': {
    fetchAndPush: () => {},
    isLoading: false,
    hasError: false,
    hasData: false,
    itemCount: 0,
    canCreate: true,
    sort: {},
    webhooks: [],
    toasts: [],
  },
};

describe('WebhooksIndexPage', () => {
  describe('redering', () =>
    testComponentSnapshotsWithFixtures(WebhooksIndexPage, fixtures));
});
