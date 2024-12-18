import React from 'react';

interface FooterSectionProps {
  title: string;
  items?: string[];
  description?: string;
  isMain?: boolean;
  onItemClick?: (item: string) => void;
}

export const FooterSection = ({ 
  title, 
  items, 
  description, 
  isMain,
  onItemClick 
}: FooterSectionProps) => {
  if (isMain) {
    return (
      <div>
        <h3 className="text-white font-bold mb-4 font-mono">{title}</h3>
        <p className="text-gray-400 text-sm font-mono">{description}</p>
      </div>
    );
  }

  return (
    <div>
      <h4 className="text-white font-semibold mb-4 font-mono">{title}</h4>
      <ul className="space-y-2">
        {items?.map((item) => (
          <li key={item}>
            <button
              onClick={() => onItemClick?.(item)}
              className="text-gray-400 hover:text-white transition-colors font-mono"
            >
              {item}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};