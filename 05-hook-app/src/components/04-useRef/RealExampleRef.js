import React, { useState } from 'react';
import { MultipleCustomHooks } from '../03-example/MultipleCustomHooks';

export const RealExampleRef = () => {
  const [isShow, setIsShow] = useState(false);
  return (
    <div>
      <h1>Real ExampleRef</h1>
      <hr />
      {isShow && <MultipleCustomHooks />}
      <button className='btn btn-secondary' onClick={() => setIsShow(!isShow)}>
        Show/Hide
      </button>
    </div>
  );
};
