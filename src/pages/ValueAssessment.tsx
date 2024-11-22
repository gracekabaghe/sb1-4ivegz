import React, { useState } from 'react';
import {
  Bot,
  UserRound,
  Calendar,
  Workflow,
  ClipboardCheck,
  Calculator,
  ExternalLink,
  TrendingUp
} from 'lucide-react';
import AssessmentSection from '../components/AssessmentSection';

const sections = [
  {
    id: 'customer-service',
    title: 'Customer Service AI Agent',
    icon: Bot,
    metric: 'Current Monthly Customer Service Budget',
    multiplier: 0.7, // 70% savings
    description: 'AI-powered customer service can reduce support costs by up to 70% while improving response times and available hours to 24/7',
    citations: [
      {
        text: 'Klarna reduced support ticket resolution time from 11 minutes to 2 minutes, generating $40M in annual profit improvements',
        link: 'https://www.singlegrain.com/blog/ms/klarna-ai/'
      },
      {
        text: 'Businesses typically save around 30% on customer support costs with chatbots',
        link: 'https://adamconnell.me/chatbot-statistics/'
      },
      {
        text: 'Companies reduce cost per support ticket from $40 to $8 (80% reduction) with AI handling 93% of support questions',
        link: 'https://ai-for.business/ai-case-study-saving-80-on-customer-support-costs-with-generative-ai/'
      }
    ]
  },
  {
    id: 'virtual-receptionist',
    title: 'Virtual Receptionist',
    icon: UserRound,
    metric: 'Daily Call Volume',
    multiplier: 15,
    citation: 'Source: McKinsey Digital 2023',
    description: 'Automated call handling saves up to 4 hours per day for staff'
  },
  {
    id: 'appointment-setter',
    title: 'AI Appointment Setter',
    icon: Calendar,
    metric: 'Monthly Appointments',
    multiplier: 25,
    citation: 'Source: Forbes Business Intelligence',
    description: 'Reduces scheduling conflicts by 95% and increases booking efficiency'
  },
  {
    id: 'onboarding',
    title: 'One-Click Onboarding',
    icon: ClipboardCheck,
    metric: 'New Clients per Month',
    multiplier: 100,
    citation: 'Source: Deloitte Digital Transformation Report',
    description: 'Streamlines client onboarding from 2 hours to 15 minutes'
  },
  {
    id: 'workflow',
    title: 'Workflow Automation',
    icon: Workflow,
    metric: 'Manual Tasks per Week',
    multiplier: 20,
    citation: 'Source: MIT Technology Review',
    description: 'Automates up to 80% of repetitive tasks, saving 15+ hours weekly'
  }
];

const ValueAssessment = () => {
  const [values, setValues] = useState<Record<string, string>>({});

  const calculateValue = (section: typeof sections[0], value: string) => {
    const numValue = parseInt(value) || 0;
    if (section.id === 'customer-service') {
      return numValue * section.multiplier; // 70% of current budget as savings
    }
    return numValue * section.multiplier;
  };

  const calculateTotalAnnualSavings = () => {
    return sections.reduce((total, section) => {
      const value = values[section.id] || '0';
      return total + (calculateValue(section, value) * 12); // Multiply by 12 for annual value
    }, 0);
  };

  const totalAnnualSavings = calculateTotalAnnualSavings();

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
          AI Value Assessment
        </h1>
        <p className="text-gray-600 dark:text-gray-300">
          Calculate your potential ROI with AI-powered solutions
        </p>
      </div>

      <div className="space-y-8">
        {sections.map((section) => (
          <AssessmentSection
            key={section.id}
            {...section}
            value={values[section.id] || ''}
            calculatedValue={calculateValue(section, values[section.id] || '')}
            onChange={(value) => setValues({ ...values, [section.id]: value })}
          />
        ))}
      </div>

      {/* Total Annual Savings Card */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-500 rounded-xl shadow-lg p-6 text-white">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-white/10 rounded-lg">
              <TrendingUp className="h-8 w-8" />
            </div>
            <div>
              <h3 className="text-2xl font-bold">Total Potential Annual Savings</h3>
              <p className="text-purple-100">Projected value over 12 months</p>
            </div>
          </div>
          <div className="text-4xl font-bold">
            ${totalAnnualSavings.toLocaleString()}
          </div>
        </div>
      </div>

      <div className="mt-12 text-center">
        <a
          href="https://calendar.app.google/6KHZYn2XDWDYGAoe6"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-purple-600 to-blue-500 rounded-lg hover:opacity-90 transition-opacity"
        >
          <Calculator className="h-6 w-6 mr-2" />
          Book a FREE AI Audit
          <ExternalLink className="h-5 w-5 ml-2" />
        </a>
      </div>
    </div>
  );
}

export default ValueAssessment;