import React from 'react';

const paymentMethods = [
  {
    name: 'PayPal',
    svg: (
      <svg width="36" height="36" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="48" height="48" rx="12" fill="#fff"/>
        <path d="M18 34l2.5-20h10.5c3.5 0 5.5 2.2 5 6.5-.5 4.3-3.2 6.5-7.5 6.5h-4l-.7 5.5c-.1.7.3 1 .9 1h2.2c3.2 0 5.2 1.7 4.8 5-.4 3.3-2.7 5-6.7 5H18z" fill="#003087"/>
        <path d="M20.5 14L18 34h5.5c4 0 6.3-1.7 6.7-5 .4-3.3-1.6-5-4.8-5h-2.2c-.6 0-1-.3-.9-1l.7-5.5h4c4.3 0 7-2.2 7.5-6.5.5-4.3-1.5-6.5-5-6.5H20.5z" fill="#009cde"/>
      </svg>
    )
  },
  {
    name: 'Stripe',
    svg: (
      <svg width="36" height="36" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="48" height="48" rx="12" fill="#fff"/>
        <path d="M32.5 18.5c-1.2 0-2.2.5-2.7 1.5v-1.2h-2.2v10.2h2.3v-5.1c0-1.1.7-1.7 1.7-1.7.9 0 1.4.6 1.4 1.7v5.1h2.3v-5.5c0-2-1.2-3-2.8-3zm-8.2.3c-2.2 0-3.6 1.1-3.6 2.8 0 1.3.9 2.1 2.7 2.5l1.1.2c.7.1 1 .3 1 .7 0 .4-.4.7-1.1.7-.8 0-1.5-.3-2.1-.7l-.7 1.7c.7.5 1.7.8 2.8.8 2.2 0 3.6-1.1 3.6-2.8 0-1.3-.9-2.1-2.7-2.5l-1.1-.2c-.7-.1-1-.3-1-.7 0-.4.4-.7 1.1-.7.7 0 1.3.2 1.8.5l.7-1.7c-.6-.3-1.3-.5-2.1-.5zm-7.3.2h-2.2v10.2h2.3v-3.7h1.7c2.2 0 3.6-1.1 3.6-2.8 0-1.7-1.4-2.7-3.6-2.7zm.1 3.7h-1.8v-2.2h1.8c.7 0 1.1.3 1.1 1.1 0 .8-.4 1.1-1.1 1.1zm18.4-3.9c-.7 0-1.3.2-1.8.5l-.7 1.7c.6.3 1.3.5 2.1.5.7 0 1.3-.2 1.8-.5l.7-1.7c-.6-.3-1.3-.5-2.1-.5z" fill="#635bff"/>
      </svg>
    )
  },
  {
    name: 'Wise',
    svg: (
      <svg width="36" height="36" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="48" height="48" rx="12" fill="#fff"/>
        <path d="M14 32l20-8-4 8 4-16-20 8 4-8-4 16z" fill="#00b9d6"/>
      </svg>
    )
  },
  {
    name: 'Visa/Mastercard',
    svg: (
      <svg width="36" height="36" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="48" height="48" rx="12" fill="#fff"/>
        <ellipse cx="18" cy="24" rx="6" ry="8" fill="#1a1f71"/>
        <ellipse cx="30" cy="24" rx="6" ry="8" fill="#f79e1b"/>
        <ellipse cx="24" cy="24" rx="6" ry="8" fill="#ff5f00" fillOpacity=".8"/>
      </svg>
    )
  }
];

const PaymentMethods: React.FC = () => (
  <div className="flex flex-col items-center mt-8">
    <span className="text-gray-500 text-sm mb-2">Payment Methods (International):</span>
    <div className="flex flex-row gap-4 items-center">
      {paymentMethods.map((method) => (
        <div key={method.name} title={method.name} className="bg-white rounded-xl shadow p-2 flex items-center justify-center">
          {method.svg}
        </div>
      ))}
    </div>
  </div>
);

export default PaymentMethods; 