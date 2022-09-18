## button 按钮

```tsx
/**
 * title: 按钮类型
 */

import React from 'react';
import { Button } from 'cool.ui';

export default () => {
  const handleClick = (e: React.SyntheticEvent) => {
    console.log('onClick');
  };
  return (
    <>
      <p>
        <Button size="small">button</Button>
        <Button type="primary" size="small" onClick={handleClick}>
          button
        </Button>
        <Button type="danger" size="small">
          button
        </Button>
        <Button type="warning" size="small">
          button
        </Button>
        <Button type="info" size="small">
          button
        </Button>
        <Button type="success" size="small">
          button
        </Button>
        <Button type="sweet" size="small">
          button
        </Button>
      </p>

      <p>
        <Button>button</Button>
        <Button type="primary">button</Button>
        <Button type="danger">button</Button>
        <Button type="warning">button</Button>
        <Button type="info">button</Button>
        <Button type="success">button</Button>
        <Button type="sweet">button</Button>
      </p>

      <p>
        <Button size="large">button</Button>
        <Button type="primary" size="large">
          button
        </Button>
        <Button type="danger" size="large">
          button
        </Button>
        <Button type="warning" size="large">
          button
        </Button>
        <Button type="info" size="large">
          button
        </Button>
        <Button type="success" size="large">
          button
        </Button>
        <Button type="sweet" size="large">
          button
        </Button>
      </p>
    </>
  );
};
```

## texture

```tsx
/**
 * title: 按钮类型
 */

import React from 'react';
import { Button } from 'cool.ui';

export default () => {
  const handleClick = (e: React.SyntheticEvent) => {
    console.log('onClick');
  };
  return (
    <>
      <p>
        <Button texture>button</Button>
        <Button type="primary" texture>
          button
        </Button>
        <Button type="danger" texture>
          button
        </Button>
        <Button type="warning" texture>
          button
        </Button>
        <Button type="info" texture>
          button
        </Button>
        <Button type="success" texture>
          button
        </Button>
        <Button type="sweet" texture>
          button
        </Button>
      </p>

      <p>
        <Button texture>button</Button>
        <Button type="primary" size="large" texture>
          button
        </Button>
        <Button type="danger" size="large" texture>
          button
        </Button>
        <Button type="warning" size="large" texture>
          button
        </Button>
        <Button type="info" size="large" texture>
          button
        </Button>
        <Button type="success" size="large" texture>
          button
        </Button>
        <Button type="sweet" size="large" texture>
          button
        </Button>
      </p>
    </>
  );
};
```

## link

```tsx
/**
 * title: link text
 */

import React from 'react';
import { Button } from 'cool.ui';

export default () => (
  <>
    <p>
      <Button type="link">button</Button>
      <Button type="text">button</Button>
    </p>
  </>
);
```

## disabled

```tsx
/**
 * title: link text
 */

import React from 'react';
import { Button } from 'cool.ui';

export default () => (
  <>
    <p>
      <Button disabled>button</Button>
      <Button type="primary" disabled>
        button
      </Button>

      <Button
        type="link"
        component="a"
        href="http://www.baidu.com"
        target="_blank"
        disabled
        onClick={() => console.log('1')}
      >
        button
      </Button>
    </p>
  </>
);
```

## shape

```tsx
/**
 * title: link text
 */

import React from 'react';
import { Button } from 'cool.ui';

export default () => (
  <>
    <p>
      <Button shape="circle" size="small">
        a
      </Button>
      <Button shape="round" size="small">
        button
      </Button>
    </p>
    <p>
      <Button shape="circle">a</Button>
      <Button shape="round" type="primary">
        button
      </Button>
    </p>
    <p>
      <Button shape="circle" size="large">
        a
      </Button>
      <Button shape="round" type="primary" size="large">
        button
      </Button>
    </p>
  </>
);
```

## block

```tsx
/**
 * title: block
 */

import React from 'react';
import { Button } from 'cool.ui';

export default () => (
  <>
    <p>
      <Button size="small" block>
        button
      </Button>
    </p>
    <p>
      <Button shape="round" type="primary" block>
        button
      </Button>
    </p>
  </>
);
```

## loading

```tsx
/**
 * title: loading
 */

import React from 'react';
import { Button } from 'cool.ui';

export default () => (
  <>
    <p>
      <Button loading={true}>button</Button>
    </p>
    <p>
      <Button loading={true} shape="round" type="primary">
        button
      </Button>
    </p>
  </>
);
```

## icon

```tsx
/**
 * title: icon
 */

import React from 'react';
import { Button } from 'cool.ui';

export default () => (
  <>
    <p>
      <Button>button</Button>
    </p>
    <p>
      <Button shape="round" type="primary">
        button
      </Button>
    </p>
  </>
);
```

<!-- <API></API> -->

More skills for writing demo: https://d.umijs.org/guide/basic#write-component-demo
