import React from 'react';

const Textarea = () => {
  return (
    <div className="flex flex-col gap-2 w-full">
      <label htmlFor="message" className="label">
        Message
      </label>
      <textarea
        name="message"
        id="message"
        cols={30}
        rows={5}
        required
        placeholder="Write your message here..."
        maxLength={500}
        className="text-area"
      />
    </div>
  );
};

export default Textarea;
