import setupStripesCore from '@folio/stripes-core/test/bigtest/helpers/setup-application';
import mirageOptions from '../network';

export default function setupApplication({
  scenarios = ['default'],
  hasAllPerms = true
} = {}) {
  setupStripesCore({
    mirageOptions,
    scenarios,
    stripesConfig: {
      hasAllPerms
    }
  });
}
