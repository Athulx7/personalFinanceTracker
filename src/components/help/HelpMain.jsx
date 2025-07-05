import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSearch,
  faQuestionCircle,
  faWallet,
  faChartBar,
  faExchangeAlt,
  faBell,
  faEnvelope,
  faPhone,
  faComments,
  faCircleInfo
} from '@fortawesome/free-solid-svg-icons';

function HelpMain() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedQuestion, setExpandedQuestion] = useState(null);

  const faqCategories = [
    {
      id: 'getting-started',
      name: 'Getting Started',
      icon: faQuestionCircle,
      questions: [
        {
          id: 1,
          question: 'How do I create my first wallet?',
          answer: 'To create your first wallet, go to the "My Wallet" page and click the "Add New Wallet" button. Fill in the wallet details including name, type, and initial balance, then click "Save".'
        },
        {
          id: 2,
          question: 'How do I add my first transaction?',
          answer: 'Navigate to either the "Income" or "Expense" page depending on the transaction type. Click "Add New" and fill in the transaction details including amount, category, and wallet used.'
        }
      ]
    },
    {
      id: 'transactions',
      name: 'Transactions',
      icon: faExchangeAlt,
      questions: [
        {
          id: 3,
          question: 'How do I edit or delete a transaction?',
          answer: 'Find the transaction in your activity list and click the edit (pencil) or delete (trash) icon next to it. Confirm any changes or deletions when prompted.'
        },
        {
          id: 4,
          question: 'Why can\'t I see my recent transaction?',
          answer: 'Check your filters to ensure you haven\'t applied any date or category restrictions. Also verify that you\'re looking at the correct wallet if you have multiple wallets.'
        }
      ]
    },
    {
      id: 'reports',
      name: 'Reports & Analytics',
      icon: faChartBar,
      questions: [
        {
          id: 5,
          question: 'How do I generate a monthly report?',
          answer: 'Go to the "Reports" page, select "Monthly Report" from the dropdown, choose your date range, and click "Generate Report". You can then view or export the report.'
        },
        {
          id: 6,
          question: 'Can I customize the reports?',
          answer: 'Yes, you can filter reports by wallet, category, and date range. Some advanced customization options are available for PDF exports.'
        }
      ]
    },
    {
      id: 'notifications',
      name: 'Notifications',
      icon: faBell,
      questions: [
        {
          id: 7,
          question: 'How do I enable low balance alerts?',
          answer: 'Navigate to Settings > Notification Preferences and toggle on "Alerts for low balance". You can set the threshold amount in the same section.'
        },
        {
          id: 8,
          question: 'Why am I not receiving monthly summary emails?',
          answer: 'Check your notification settings and ensure your email is verified. Also check your spam folder as these emails sometimes get filtered.'
        }
      ]
    }
  ];

  const toggleQuestion = (questionId) => {
    setExpandedQuestion(expandedQuestion === questionId ? null : questionId);
  };

  const filteredQuestions = faqCategories
    .filter(category => activeCategory === 'all' || category.id === activeCategory)
    .flatMap(category => category.questions)
    .filter(question => 
      question.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
      question.answer.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <div className="p-4 md:p-6 max-w-4xl mx-auto">
      <div className="mb-8 text-center">
        <h1 className="font-semibold text-xl md:text-2xl"> <FontAwesomeIcon icon={faCircleInfo} className="w-8 mr-2 text-indigo-500" />Help Center</h1>
        <p className="text-gray-600">Find answers to common questions or contact our support team</p>
      </div>

      {/* Search Bar */}
      <div className="relative mb-8">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <FontAwesomeIcon icon={faSearch} className="text-gray-400" />
        </div>
        <input
          type="text"
          placeholder="Search help articles..."
          className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Category Tabs */}
      <div className="flex overflow-x-auto pb-2 mb-6 scrollbar-hide">
        <button
          onClick={() => setActiveCategory('all')}
          className={`flex-shrink-0 px-4 py-2 mr-2 rounded-full ${activeCategory === 'all' ? 'bg-indigo-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
        >
          All Categories
        </button>
        {faqCategories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`flex-shrink-0 px-4 py-2 mr-2 rounded-full flex items-center ${activeCategory === category.id ? 'bg-indigo-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
          >
            <FontAwesomeIcon icon={category.icon} className="mr-2" />
            {category.name}
          </button>
        ))}
      </div>

      {/* FAQ List */}
      <div className="space-y-4 mb-12">
        {filteredQuestions.length > 0 ? (
          filteredQuestions.map((question) => (
            <div key={question.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <button
                className="w-full text-left p-4 hover:bg-gray-50 focus:outline-none flex justify-between items-center"
                onClick={() => toggleQuestion(question.id)}
              >
                <span className="font-medium text-gray-800">{question.question}</span>
                <svg
                  className={`w-5 h-5 text-gray-500 transform transition-transform ${expandedQuestion === question.id ? 'rotate-180' : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {expandedQuestion === question.id && (
                <div className="p-4 pt-0 text-gray-600 border-t border-gray-100">
                  <p>{question.answer}</p>
                </div>
              )}
            </div>
          ))
        ) : (
          <div className="text-center py-10 text-gray-500">
            No results found for "{searchTerm}"
          </div>
        )}
      </div>

      {/* Contact Support */}
      <div className="bg-indigo-50 rounded-xl p-6 border border-indigo-100">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Still need help?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center mb-2">
              <div className="w-10 h-10 rounded-full bg-indigo-100 text-indigo-500 flex items-center justify-center mr-3">
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <h3 className="font-medium">Email Us</h3>
            </div>
            <p className="text-sm text-gray-600 mb-2">We typically respond within 24 hours</p>
            <a href="mailto:support@financeapp.com" className="text-indigo-500 text-sm hover:underline">
              support@financeapp.com
            </a>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center mb-2">
              <div className="w-10 h-10 rounded-full bg-indigo-100 text-indigo-500 flex items-center justify-center mr-3">
                <FontAwesomeIcon icon={faPhone} />
              </div>
              <h3 className="font-medium">Call Us</h3>
            </div>
            <p className="text-sm text-gray-600 mb-2">Monday-Friday, 9AM-5PM IST</p>
            <a href="tel:+9118001234567" className="text-indigo-500 text-sm hover:underline">
              +91 1800 123 4567
            </a>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center mb-2">
              <div className="w-10 h-10 rounded-full bg-indigo-100 text-indigo-500 flex items-center justify-center mr-3">
                <FontAwesomeIcon icon={faComments} />
              </div>
              <h3 className="font-medium">Live Chat</h3>
            </div>
            <p className="text-sm text-gray-600 mb-2">Available 24/7 for urgent issues</p>
            <button className="text-indigo-500 text-sm hover:underline focus:outline-none">
              Start Chat Now
            </button>
          </div>
        </div>
      </div>

      {/* Popular Articles */}
      <div className="mt-12">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Popular Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {faqCategories.flatMap(category => category.questions)
            .filter(q => [1, 3, 5, 7].includes(q.id))
            .map(question => (
              <div key={question.id} className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 hover:border-indigo-300 transition-colors">
                <h3 className="font-medium text-gray-800 mb-1">{question.question}</h3>
                <p className="text-sm text-gray-600 line-clamp-2">{question.answer}</p>
                <button 
                  onClick={() => toggleQuestion(question.id)}
                  className="text-indigo-500 text-sm mt-2 hover:underline focus:outline-none"
                >
                  Read more
                </button>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default HelpMain;