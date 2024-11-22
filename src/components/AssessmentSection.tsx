import React from 'react';
import { LucideIcon } from 'lucide-react';

interface AssessmentSectionProps {
  id: string;
  title: string;
  icon: LucideIcon;
  description: string;
  metric: string;
  value: string;
  calculatedValue: number;
  citation?: string;
  citations?: Array<{ text: string; link: string }>;
  onChange: (value: string) => void;
}

const AssessmentSection: React.FC<AssessmentSectionProps> = ({
  id,
  title,
  icon: Icon,
  description,
  metric,
  value,
  calculatedValue,
  citation,
  citations,
  onChange,
}) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      <div className="p-6">
        <div className="flex items-center space-x-4 mb-4">
          <div className="p-3 bg-purple-100 dark:bg-purple-900 rounded-lg">
            <Icon className="h-6 w-6 text-purple-600 dark:text-purple-400" />
          </div>
          <h3 className="text-xl font-semibold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
            {title}
          </h3>
        </div>

        <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              {metric}
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
              <input
                type="number"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="w-full pl-8 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-700 dark:text-white"
                placeholder="Enter amount"
              />
            </div>
          </div>
          <div className="flex items-center">
            <div className="bg-purple-50 dark:bg-purple-900/50 rounded-lg p-4 w-full">
              <div className="flex items-center justify-between">
                <span className="text-gray-600 dark:text-gray-300">Potential Savings:</span>
                <span className="text-xl font-bold text-purple-600 dark:text-purple-400">
                  ${calculatedValue.toLocaleString()}
                </span>
              </div>
            </div>
          </div>
        </div>

        {citation && (
          <div className="text-sm text-gray-500 dark:text-gray-400">
            {citation}
          </div>
        )}
        
        {citations && (
          <div className="mt-4 space-y-2 text-sm text-gray-600 dark:text-gray-400">
            {citations.map((cite, index) => (
              <div key={index}>
                <a
                  href={cite.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-purple-600 dark:hover:text-purple-400"
                >
                  [{index + 1}] {cite.text}
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AssessmentSection;