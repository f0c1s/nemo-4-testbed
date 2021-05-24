const assert = require('assert');

describe('#Input #Checkbox Two', function () {
  it('should load checkbox.2.html and verify that checked checkbox has true value for attribute checked', async function () {
    const nemo = this.nemo;
    const view = nemo.view.checkbox;
    await nemo.driver.get(nemo.data.baseUrl + 'checkbox.2.html');
    await view.checkboxWaitVisible(3000);
    assert.ok(await view.checkboxPresent());
    const actual = await view.checkbox().getAttribute('checked');
    const expected = 'true';
    assert.equal(actual, expected);
  });
  it('should load checkbox.2.html and verify that doubly clicked checked checkbox has true value for attribute checked', async function () {
    const nemo = this.nemo;
    const view = nemo.view.checkbox;
    await nemo.driver.get(nemo.data.baseUrl + 'checkbox.2.html');
    await view.checkboxWaitVisible(3000);
    assert.ok(await view.checkboxPresent());
    /* click the checkbox twice */
    await view.checkbox().click();
    await view.checkbox().click();
    const actual = await view.checkbox().getAttribute('checked');
    const expected = 'true';
    assert.equal(actual, expected);
  });
  it('should load checkbox.2.html and verify that once clicked checked checkbox has null value for attribute checked', async function () {
    const nemo = this.nemo;
    const view = nemo.view.checkbox;
    await nemo.driver.get(nemo.data.baseUrl + 'checkbox.2.html');
    await view.checkboxWaitVisible(3000);
    assert.ok(await view.checkboxPresent());
    /* click the checkbox once */
    await view.checkbox().click();
    const actual = await view.checkbox().getAttribute('checked');
    const expected = null;
    assert.equal(actual, expected);
  });
});
