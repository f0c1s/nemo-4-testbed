const assert = require('assert');
const {sleep} = require('../../helpers/sleep');

describe('#Overpanel 1', function () {
  it('should not be able to click newer button on newer overpanel', async function () {
    const nemo = this.nemo;
    await nemo.driver.get(nemo.data.baseUrl + 'overpanel.1.html');
    await nemo.view.overpanel.overpanel1WaitVisible(40000);
    assert.ok(await nemo.view.overpanel.overpanel1Present());
    await sleep(nemo);
    await nemo.view.overpanel.close().click();
    await sleep(nemo, 100 * 1000);

  });
});
