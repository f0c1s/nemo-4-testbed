const assert = require('assert');
// const takeAScreenShot = require('../../helpers/screenshot');

describe('#Select Two', function () {
  it('should load select.2.html and succeed in changing the value', async function () {
    const nemo = this.nemo;
    await nemo.driver.get(nemo.data.baseUrl + 'select.2.html');
    await nemo.view.select.select1WaitVisible(40000);
    assert.ok(await nemo.view.select.select1Present());
    let actual;
    let expected = 'B';
    await nemo.view.select.select1WaitVisible(3000).sendKeys(expected);
    // await takeAScreenShot(`${expected}.select.2`, nemo);
    actual = await nemo.view.select.select1().getAttribute('value');
    assert.equal(actual, expected);
  });
});