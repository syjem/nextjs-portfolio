import React from 'react';
import { Input } from '../ui/input';

const NameField = () => {
  return (
    <div className="flex flex-col gap-2 w-full">
      <label htmlFor="name" className="label">
        Name
      </label>
      <Input
        type="text"
        id="name"
        name="name"
        required
        maxLength={50}
        autoComplete="off"
        className="border-slate-400"
      />
    </div>
  );
};

export default NameField;
