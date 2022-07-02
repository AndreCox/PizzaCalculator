import React from 'react';
import { observer } from 'mobx-react-lite';

const Input = observer(({ placeholder, onChange, value, ...props }: any) => {
  return (
    <input
      className="bg-transparent border-none rounded-none w-full p-2"
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      {...props}
    />
  );
});

export default Input;
