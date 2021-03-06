const assert = require('assert');

describe('#Input #Checkbox One', function () {
  it('should load checkbox.1.html and verify that unchecked checkbox has null value for attribute checked', async function () {
    const nemo = this.nemo;
    const view = nemo.view.checkbox;
    await nemo.driver.get(nemo.data.baseUrl + 'checkbox.1.html');
    await view.checkboxWaitVisible(3000);
    assert.ok(await view.checkboxPresent());
    // await view.checkbox().click(); // will be unchecked and thus will return getAttribute('checked') => null.
    const actual = await view.checkbox().getAttribute('checked');
    const expected = null;
    assert.equal(actual, expected);
  });
  it('should load checkbox.1.html and verify that doubly clicked unchecked checkbox has null value for attribute checked', async function () {
    const nemo = this.nemo;
    const view = nemo.view.checkbox;
    await nemo.driver.get(nemo.data.baseUrl + 'checkbox.1.html');
    await view.checkboxWaitVisible(3000);
    assert.ok(await view.checkboxPresent());
    /* click the checkbox twice */
    await view.checkbox().click();
    await view.checkbox().click();
    const actual = await view.checkbox().getAttribute('checked');
    const expected = null;
    assert.equal(actual, expected);
  });
  it('should load checkbox.1.html and verify that once clicked unchecked checkbox has true value for attribute checked', async function () {
    const nemo = this.nemo;
    const view = nemo.view.checkbox;
    await nemo.driver.get(nemo.data.baseUrl + 'checkbox.1.html');
    await view.checkboxWaitVisible(3000);
    assert.ok(await view.checkboxPresent());
    /* click the checkbox once */
    await view.checkbox().click();
    const actual = await view.checkbox().getAttribute('checked');
    const expected = 'true';
    assert.equal(actual, expected);
  });
});
