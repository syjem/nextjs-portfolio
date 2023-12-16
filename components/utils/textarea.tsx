import React from 'react';
import { Textarea } from '../ui/textarea';

const MessageInput = () => {
  return (
    <div className="flex flex-col gap-2 w-full">
      <label htmlFor="message" className="label">
        Message
      </label>
      <Textarea
        name="message"
        id="message"
        rows={5}
        required
        placeholder="Write your message here..."
        maxLength={500}
      />
    </div>
  );
};

export default MessageInput;
