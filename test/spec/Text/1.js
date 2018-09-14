const assert = require('assert');

describe('#Input #Text One', function () {
  it('should load text.1.html and succeed in fetching the placeholder value', async function () {
    const nemo = this.nemo;
    await nemo.driver.get(nemo.data.baseUrl + 'text.1.html');
    await nemo.view.text.textWaitVisible(40000);
    assert.ok(await nemo.view.text.textPresent());
    const actual = await nemo.view.text.text().getAttribute('placeholder');
    const expected = 'placeholder text';
    assert.equal(actual, expected);
  });
  it('should load text.1.html and succeed in updating the value', async function () {
    const nemo = this.nemo;
    await nemo.driver.get(nemo.data.baseUrl + 'text.1.html');
    await nemo.view.text.textWaitVisible(40000);
    assert.ok(await nemo.view.text.textPresent());
    await nemo.view.text.text().sendKeys('New Value');
    const actual = await nemo.view.text.text().getAttribute('value');
    const expected = 'New Value';
    assert.equal(actual, expected);
  });
});
