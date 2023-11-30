import React from 'react';
import { useFormStatus } from 'react-dom';
import { LuLoader2 } from 'react-icons/lu';
import { FaPaperPlane } from 'react-icons/fa';

const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      aria-disabled={pending}
      disabled={pending}
      className="group submit-btn">
      {pending ? 'Sending' : 'Send'}
      {pending ? (
        <LuLoader2 className="h-4 w-4 animate-spin text-slate-200 shrink-0" />
      ) : (
        <FaPaperPlane className="paper-plane" />
      )}
    </button>
  );
};

export default SubmitButton;
