import React from 'react';

const EmailField = () => {
  return (
    <div className="flex flex-col gap-2 w-full">
      <label htmlFor="email" className="label">
        Email
      </label>
      <input
        type="email"
        id="email"
        name="email"
        required
        maxLength={80}
        autoComplete="off"
        placeholder="example@gmail.com"
        className="text-input"
      />
    </div>
  );
};

export default EmailField;
