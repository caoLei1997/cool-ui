## Alert 提示

```tsx
/**
 * title: 基础
 */

import React from 'react';
import { Alert } from 'cool.ui';

export default () => {
  const handleClick = (e: React.SyntheticEvent) => {
    console.log('onClick');
  };
  return (
    <p>
      <p>
        <Alert message="infoAlert！" />
      </p>
      <p>
        <Alert type="primary" message="primaryAlert！" />
      </p>
      <p>
        <Alert type="warning" message="warningAlert！" />
      </p>
      <p>
        <Alert type="success" message="success Alert！" />
      </p>
      <p>
        <Alert type="danger" message="danger Alert！" />
      </p>
      <p>
        <Alert type="sweet" message="sweet Alert！" />
      </p>
      <p>
        <Alert type="suzukaze" message="suzukaze Alert！" />
      </p>
    </p>
  );
};
```

```tsx
/**
 * title: icon
 */

import React from 'react';
import { Alert } from 'cool.ui';

export default () => {
  const handleClick = (e: React.SyntheticEvent) => {
    console.log('onClick');
  };
  return (
    <p>
      <p>
        <Alert message="infoAlert！" showIcon />
      </p>
      <p>
        <Alert type="primary" message="primaryAlert！" showIcon />
      </p>
      <p>
        <Alert type="warning" message="warningAlert！" showIcon />
      </p>
      <p>
        <Alert type="success" message="success Alert！" showIcon />
      </p>
      <p>
        <Alert type="danger" message="danger Alert！" showIcon />
      </p>
      <p>
        <Alert type="sweet" message="sweet Alert！" showIcon />
      </p>
      <p>
        <Alert type="suzukaze" message="suzukaze Alert！" showIcon />
      </p>
    </p>
  );
};
```

<API src='../src/components/Alert/index.ts'></API>
