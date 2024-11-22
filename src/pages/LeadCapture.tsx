import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Bot, ArrowRight, CheckCircle2, Zap, BarChart3, Clock } from 'lucide-react';

const LeadCapture = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
  });

  const benefits = [
    {
      icon: Zap,
      title: 'Boost Efficiency',
      description: 'Automate repetitive tasks and streamline operations'
    },
    {
      icon: BarChart3,
      title: 'Increase Revenue',
      description: 'Leverage AI to unlock new growth opportunities'
    },
    {
      icon: Clock,
      title: 'Save Time',
      description: '24/7 automated customer service and support'
    }
  ];

  const validateForm = () => {
    let isValid = true;
    const newErrors = { name: '', email: '' };

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      navigate('/assessment');
    }
  };

  return (
    <div className="min-h-[calc(100vh-160px)] flex flex-col justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent animate-gradient">
                Transform Your Business with AI Technology
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Discover how AI can revolutionize your operations and boost your bottom line.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="flex items-start space-x-4 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md"
                >
                  <div className="p-2 bg-purple-100 dark:bg-purple-900/50 rounded-lg">
                    <benefit.icon className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                <CheckCircle2 className="h-5 w-5 text-green-500" />
                <span>Free AI Value Assessment</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                <CheckCircle2 className="h-5 w-5 text-green-500" />
                <span>Personalized ROI Calculation</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                <CheckCircle2 className="h-5 w-5 text-green-500" />
                <span>Expert Consultation</span>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="lg:ml-auto lg:max-w-md w-full">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
              <div className="flex justify-center mb-6">
                <Bot className="h-12 w-12 text-purple-600 dark:text-purple-400" />
              </div>
              <h2 className="text-2xl font-bold text-center mb-2 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                Get Your Free Assessment
              </h2>
              <p className="text-center text-gray-600 dark:text-gray-300 mb-6">
                See how AI can transform your business
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.name ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                    } focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-700 dark:text-white`}
                    placeholder="John Doe"
                  />
                  {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Business Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.email ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                    } focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-700 dark:text-white`}
                    placeholder="john@company.com"
                  />
                  {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                </div>
                
                <button
                  type="submit"
                  className="w-full px-6 py-3 text-white font-medium rounded-lg bg-gradient-to-r from-purple-600 to-blue-500 hover:opacity-90 transition-opacity flex items-center justify-center space-x-2"
                >
                  <span>Start Free Assessment</span>
                  <ArrowRight className="h-5 w-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeadCapture;