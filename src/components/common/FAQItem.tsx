'use client';
import React, { ReactNode } from 'react';

import { useState } from 'react';
import { PlusIcon, MinusIcon } from 'lucide-react';
type FAQItemProps= {
  question: string;
  answer: string | ReactNode;
}

export default function FAQItem({ question, answer }: FAQItemProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-gray-700 py-6">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left flex justify-between items-center text-white"
      >
        <span className="font-medium">{question}</span>
        {open ? (
          <MinusIcon className="w-5 h-5 text-white" />
        ) : (
          <PlusIcon className="w-5 h-5 text-white" />
        )}
      </button>

      {open && (
        <div className="mt-4 text-sm text-gray-300">
          {typeof answer === 'string' ? <p>{answer}</p> : answer}
        </div>
      )}
    </div>
  );
}
