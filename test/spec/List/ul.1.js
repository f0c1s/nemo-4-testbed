const assert = require('assert');
const waitPeriod = 30 * 1000;

describe('#List #Unordered One', function () {
  it('should load ul.1.html and print number of list items via ul selection', async function () {
    const nemo = this.nemo;
    const view = nemo.view.list;
    await nemo.driver.get(nemo.data.baseUrl + 'ul.1.html');
    await view.unorderedListWaitVisible(waitPeriod);
    assert.ok(await view.unorderedListPresent());
    const elementText = await view.unorderedList().getAttribute('innerText');
    const actual = String(elementText).split('\n').length;
    const expected = 3 + 1; // because there is an element after ul
    assert.equal(actual, expected);
  });
  it('should load ul.1.html and print number of list items via li selection', async function () {
    const nemo = this.nemo;
    const view = nemo.view.list;
    await nemo.driver.get(nemo.data.baseUrl + 'ul.1.html');
    await view.unorderedListItemsWaitVisible(waitPeriod);
    assert.ok(await view.unorderedListItemsPresent());
    const actual = await view.unorderedListItems().getAttribute('innerText');
    const expected = 1;
    assert.equal(actual, expected);
  });
});

describe('#List #Unordered #complex Two', function () {
  it('should load ul.1.html and print number of list items via ul selection #complex', async function () {
    const nemo = this.nemo;
    const view = nemo.view.list;
    await nemo.driver.get(nemo.data.baseUrl + 'ul.1.html');
    await view.complexUnorderedListWaitVisible(waitPeriod);
    assert.ok(await view.complexUnorderedListPresent());
    const elementText = await view.complexUnorderedList().getAttribute('innerText');
    const actual = String(elementText).split('\n').length;
    const expected = 3 + 1; // because there is an element after ul.
    assert.equal(actual, expected);
  });
  it('should load ul.1.html and print number of list items via li selection #complex', async function () {
    const nemo = this.nemo;
    const view = nemo.view.list;
    await nemo.driver.get(nemo.data.baseUrl + 'ul.1.html');
    await view.complexUnorderedListItemsWaitVisible(waitPeriod);
    assert.ok(await view.complexUnorderedListItemsPresent());
    const actual = await view.complexUnorderedListItems().getAttribute('innerText');
    const expected = "first thing first";
    assert.equal(actual, expected);
  });
});