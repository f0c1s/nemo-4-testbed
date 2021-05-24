const assert = require('assert');
// const takeAScreenShot = require('../../helpers/screenshot');

describe('#Select One Failure 1', function () {
  it('should load select.1.html and fail while changing select value second time', async function () {
    const nemo = this.nemo;
    await nemo.driver.get(nemo.data.baseUrl + 'select.1.html');
    await nemo.view.select.select1WaitVisible(40000);
    assert.ok(await nemo.view.select.select1Present());

    /*
    console.log(await nemo.view.select.select1().getText()); // All the option text
        Please select one of the values.
        A
        B
        C
        D
    */

    let actual;
    let expected = 'B';
    await nemo.view.select.select1WaitVisible(3000).sendKeys(expected);
    // await takeAScreenShot(`${expected}.select.1`, nemo);
    actual = await nemo.view.select.select1().getAttribute('value');
    assert.equal(actual, expected);

    expected = 'A';
    await nemo.view.select.select1WaitVisible(3000).sendKeys(expected);
    // await takeAScreenShot(`${expected}.select.1`, nemo);
    actual = await nemo.view.select.select1().getAttribute('value');
    assert.equal(actual, expected);

    expected = 'D';
    await nemo.view.select.select1WaitVisible(3000).sendKeys(expected);
    // await takeAScreenShot(`${expected}.select.1`, nemo);
    actual = await nemo.view.select.select1().getAttribute('value');
    assert.equal(actual, expected);

/* await nemo.view.select.select1WaitVisible(3000).clear();
 *
 * InvalidElementStateError: invalid element state: Element must be user-editable in order to clear it.
  (Session info: chrome=69.0.3497.81)
  (Driver info: chromedriver=2.40.565386 (45a059dc425e08165f9a10324bd1380cc13ca363),platform=Mac OS X 10.12.6 x86_64)
      at Object.checkLegacyResponse (node_modules/selenium-webdriver/lib/error.js:546:15)
      at parseHttpResponse (node_modules/selenium-webdriver/lib/http.js:509:13)
      at doSend.then.response (node_modules/selenium-webdriver/lib/http.js:441:30)
      at <anonymous>
      at process._tickCallback (internal/process/next_tick.js:188:7)
  From: Task: WebElement.clear()
      at thenableWebDriverProxy.schedule (node_modules/selenium-webdriver/lib/webdriver.js:807:17)
      at WebElementPromise.schedule_ (node_modules/selenium-webdriver/lib/webdriver.js:2010:25)
      at WebElementPromise.clear (node_modules/selenium-webdriver/lib/webdriver.js:2351:17)
      at Context.<anonymous> (test/select.js:14:53)
      at <anonymous>
      at process._tickCallback (internal/process/next_tick.js:188:7)
  */
  });
});

describe('#Select One success', function () {
  it('should load select.1.html and succeed in changing select\'s value', async function () {
    const nemo = this.nemo;
    await nemo.driver.get(nemo.data.baseUrl + 'select.1.html');
    await nemo.view.select.select1WaitVisible(40000);
    assert.ok(await nemo.view.select.select1Present());
    let actual;
    let expected = 'B';
    await nemo.view.select.select1WaitVisible(3000).sendKeys(expected);
    // await takeAScreenShot(`${expected}.select.1`, nemo);
    actual = await nemo.view.select.select1().getAttribute('value');
    assert.equal(actual, expected);
  });
});