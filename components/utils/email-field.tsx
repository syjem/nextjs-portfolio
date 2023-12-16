import React from 'react';
import { Input } from '../ui/input';

const EmailField = () => {
  return (
    <div className="flex flex-col gap-2 w-full">
      <label htmlFor="email" className="label">
        Email
      </label>
      <Input
        type="email"
        id="email"
        name="email"
        required
        maxLength={80}
        autoComplete="off"
        placeholder="example@gmail.com"
      />
    </div>
  );
};

export default EmailField;
