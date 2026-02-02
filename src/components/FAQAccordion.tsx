'use client';

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
  category?: string;
}

export default function FAQAccordion({ items, category }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleItem(index);
    }
  };

  return (
    <div className="space-y-4" role="region" aria-label={category || 'Frequently Asked Questions'}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const buttonId = `faq-button-${category ? category.replace(/\s+/g, '-').toLowerCase() : 'item'}-${index}`;
        const panelId = `faq-panel-${category ? category.replace(/\s+/g, '-').toLowerCase() : 'item'}-${index}`;

        return (
          <div
            key={index}
            className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm"
          >
            <button
              id={buttonId}
              type="button"
              onClick={() => toggleItem(index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              aria-expanded={isOpen}
              aria-controls={panelId}
              className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-inset"
            >
              <span className="font-semibold text-gray-900 pr-4">{item.question}</span>
              <span
                className="flex-shrink-0 ml-2 text-primary-500"
                aria-hidden="true"
              >
                {isOpen ? (
                  <Minus className="w-5 h-5" />
                ) : (
                  <Plus className="w-5 h-5" />
                )}
              </span>
            </button>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              aria-hidden={!isOpen}
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="px-6 pb-4 text-gray-600 leading-relaxed">
                {item.answer}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
