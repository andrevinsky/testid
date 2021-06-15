# testid-support
testid support: props and selectors generator


## Installation

```shell
npm i testid-support
```

## Usage

In the environment with the app UI code (/app) and e2e test (/tests/e2e) there needs to be a shared folder (/shared). Then,

```js
// shared/selectors.js
import { defineTestIdDictionary } from 'testid-support';

export const selectorsDictionary = defineTestIdDictionary((testId, testIdRest) => ({
  PAGE_LANDING: testId('page', 'landing'),
  INFO_CART_VALUE: testId('text', 'cart subtotal'),
  INFO_CART_VALUE_OF: testIdRest('text', 'cart subtotal'),
}));
```

Then, in the application code use:
```js
// app/testIds.js

import { FOR_RENDER } from 'testid-support';
import { selectorsDictionary } from '../shared/selectors';

export const e2eAssist = selectorsDictionary(FOR_RENDER);

```

```js
// tests/e2e/queries.js

import { FOR_TESTS } from 'testid-support';
import { selectorsDictionary } from '../../shared/selectors';

export const SEL = selectorsDictionary(FOR_TESTS);

```

Then, in the application code (React), use it like so:

```jsx
<section { ...e2eAssist.PAGE_LANDING }>
  <div className="cart" { { ...e2eAssist.INFO_CART_VALUE_OF(cartTotal) } }>{ cartTotal }</div>
</section>
```

While in the tests, use the following counterparts to test for presence/select the proper elements:

```js
const cartElement = await page.waitForSelector(
  `${ SEL.PAGE_LANDING } ${ SEL.INFO_CART_VALUE }`);
```

