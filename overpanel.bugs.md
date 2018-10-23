# bugs with overpanel

```bash

nemo-v4-testbed (master)
$ npm run nemo -- -G '#Overpanel'

> static@1.0.0 nemo /Users/anusaini/Work/Code/ft/nemo-v4-testbed
> nemo -B test/ "-G" "#Overpanel"



  #Overpanel 1
    1) should not be able to click newer button on newer overpanel
{ WebDriverError: unknown error: Element <a class="close" onclick="console.log('nope')">...</a> is not clickable atpoint (338, 209). Other element would receive the click: <a class="close">...</a>
  (Session info: chrome=69.0.3497.100)
  (Driver info: chromedriver=2.40.565386 (45a059dc425e08165f9a10324bd1380cc13ca363),platform=Mac OS X 10.12.6 x86_64)
    at Object.checkLegacyResponse (node_modules/selenium-webdriver/lib/error.js:546:15)
    at parseHttpResponse (node_modules/selenium-webdriver/lib/http.js:509:13)
    at doSend.then.response (node_modules/selenium-webdriver/lib/http.js:441:30)
    at <anonymous>
    at process._tickCallback (internal/process/next_tick.js:188:7)
From: Task: WebElement.click()
    at thenableWebDriverProxy.schedule (node_modules/selenium-webdriver/lib/webdriver.js:807:17)
    at WebElementPromise.schedule_ (node_modules/selenium-webdriver/lib/webdriver.js:2010:25)
    at WebElementPromise.click (node_modules/selenium-webdriver/lib/webdriver.js:2092:17)
    at Context.<anonymous> (test/spec/overpanel/1.js:11:39)
    at <anonymous> name: 'WebDriverError', remoteStacktrace: '' }


  0 passing (4s)
  1 failing

  1) #Overpanel 1
       should not be able to click newer button on newer overpanel:
     WebDriverError: unknown error: Element <a class="close" onclick="console.log('nope')">...</a> is not clickableat point (338, 209). Other element would receive the click: <a class="close">...</a>
  (Session info: chrome=69.0.3497.100)
  (Driver info: chromedriver=2.40.565386 (45a059dc425e08165f9a10324bd1380cc13ca363),platform=Mac OS X 10.12.6 x86_64)
      at Object.checkLegacyResponse (node_modules/selenium-webdriver/lib/error.js:546:15)
      at parseHttpResponse (node_modules/selenium-webdriver/lib/http.js:509:13)
      at doSend.then.response (node_modules/selenium-webdriver/lib/http.js:441:30)
      at <anonymous>
      at process._tickCallback (internal/process/next_tick.js:188:7)
  From: Task: WebElement.click()
      at thenableWebDriverProxy.schedule (node_modules/selenium-webdriver/lib/webdriver.js:807:17)
      at WebElementPromise.schedule_ (node_modules/selenium-webdriver/lib/webdriver.js:2010:25)
      at WebElementPromise.click (node_modules/selenium-webdriver/lib/webdriver.js:2092:17)
      at Context.<anonymous> (test/spec/overpanel/1.js:11:39)
      at <anonymous>



┌────────────────────────────────────────────────────────────────────────────────┬──────┬──────┬───────┐
│ tags                                                                           │ pass │ fail │ total │
├────────────────────────────────────────────────────────────────────────────────┼──────┼──────┼───────┤
│ profile: base                                                                  │ 0    │ 1    │ 1     │
│ grep: #Overpanel                                                               │      │      │       │
│ reportFile: /10-23-2018/12-37-46/profile!base!grep!#Overpanel/nemo-report.html │      │      │       │
│                                                                                │      │      │       │
├────────────────────────────────────────────────────────────────────────────────┼──────┼──────┼───────┤
│ TOTALS                                                                         │ 0    │ 1    │ 1     │
└────────────────────────────────────────────────────────────────────────────────┴──────┴──────┴───────┘
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! static@1.0.0 nemo: `nemo -B test/ "-G" "#Overpanel"`
npm ERR! Exit status 1
npm ERR!
npm ERR! Failed at the static@1.0.0 nemo script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /Users/anusaini/.npm/_logs/2018-10-23T07_07_50_475Z-debug.log

```
