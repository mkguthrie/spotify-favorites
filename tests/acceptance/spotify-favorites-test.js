import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | spotify favorites', function (hooks) {
  setupApplicationTest(hooks);

  test('visiting /', async function (assert) {
    await visit('/');

    assert.equal(currentURL(), '/');
    assert.dom('nav').exists();
  });

  test('visiting /about', async function (assert) {
    await visit('/about');
    assert.equal(currentURL(), '/about');
    assert.dom('nav').exists();
  });
});
