import React from 'react';

export function SampleComponent({ bgcolor }) {
  let styleobj = {
    backgroundColor: bgcolor,
  };

  let a = 10;
  let b = 20;
  return (
    <>
      <div style={styleobj}>Heading</div>
      <div> value of a is: {a}</div>
      <div> value of b is: {b}</div>
      <div>
        Sum of {a} and {b} is : {a + b};
      </div>
    </>
  );
}
