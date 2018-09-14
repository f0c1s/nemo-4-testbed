const assert = require('assert');

describe('#Input #Text One', function () {
  it('should load input.text.1.html and succeed in fetching the placeholder value', async function () {
    const nemo = this.nemo;
    await nemo.driver.get(nemo.data.baseUrl + 'input.text.1.html');
    await nemo.view.input.textWaitVisible(40000);
    assert.ok(await nemo.view.input.textPresent());
    const actual = await nemo.view.input.text().getAttribute('placeholder');
    const expected = 'placeholder text';
    assert.equal(actual, expected);
  });
  it('should load input.text.1.html and succeed in updating the value', async function () {
    const nemo = this.nemo;
    await nemo.driver.get(nemo.data.baseUrl + 'input.text.1.html');
    await nemo.view.input.textWaitVisible(40000);
    assert.ok(await nemo.view.input.textPresent());
    await nemo.view.input.text().sendKeys('New Value');
    const actual = await nemo.view.input.text().getAttribute('value');
    const expected = 'New Value';
    assert.equal(actual, expected);
  });
});