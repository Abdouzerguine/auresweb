import React from 'react';

const paymentMethods = [
  {
    name: 'Support Card',
    svg: (
      <svg width="60" height="38" viewBox="0 0 60 38" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="60" height="38" rx="8" fill="#e0f7fa"/>
        <text x="30" y="18" textAnchor="middle" fontFamily="Arial Black,Arial,sans-serif" fontWeight="bold" fontSize="12" fill="#00796b">SUPPORT CARD</text>
        <text x="30" y="30" textAnchor="middle" fontFamily="monospace" fontWeight="bold" fontSize="10" fill="#333">1234 5678 9012 3456</text>
        <text x="30" y="36" textAnchor="middle" fontFamily="Arial" fontSize="8" fill="#00796b">YOUR NAME</text>
      </svg>
    )
  },
  {
    name: 'Visa',
    svg: (
      <svg width="48" height="32" viewBox="0 0 48 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="48" height="32" rx="8" fill="#fff"/>
        <text x="24" y="22" textAnchor="middle" fontFamily="Arial Black,Arial,sans-serif" fontWeight="bold" fontSize="18" fill="#1a1f71">VISA</text>
      </svg>
    )
  },
  {
    name: 'Mastercard',
    svg: (
      <svg width="48" height="32" viewBox="0 0 48 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="48" height="32" rx="8" fill="#fff"/>
        <circle cx="20" cy="16" r="8" fill="#eb001b"/>
        <circle cx="28" cy="16" r="8" fill="#f79e1b"/>
        <text x="24" y="29" textAnchor="middle" fontFamily="Arial Black,Arial,sans-serif" fontWeight="bold" fontSize="8" fill="#222">Mastercard</text>
      </svg>
    )
  },
  {
    name: 'Stripe',
    svg: (
      <svg width="48" height="32" viewBox="0 0 48 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="48" height="32" rx="8" fill="#fff"/>
        <text x="24" y="22" textAnchor="middle" fontFamily="Arial Black,Arial,sans-serif" fontWeight="bold" fontSize="16" fill="#635bff">STRIPE</text>
      </svg>
    )
  },
  {
    name: 'Wise',
    svg: (
      <svg width="48" height="32" viewBox="0 0 48 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="48" height="32" rx="8" fill="#fff"/>
        <text x="24" y="22" textAnchor="middle" fontFamily="Arial Black,Arial,sans-serif" fontWeight="bold" fontSize="16" fill="#00b9d6">WISE</text>
      </svg>
    )
  }
];

const PaymentMethods: React.FC = () => (
  <div className="flex flex-col items-center mt-8">
    <span className="text-gray-500 text-sm mb-2">Payment Methods (International):</span>
    <div className="flex flex-row gap-8 items-end">
      {paymentMethods.map((method) => (
        <div key={method.name} className="flex flex-col items-center">
          <div className="bg-white rounded-xl shadow p-2 flex items-center justify-center mb-2">
            {method.svg}
          </div>
          <span className="text-xs text-gray-600 font-medium mt-1">{method.name}</span>
        </div>
      ))}
    </div>
  </div>
);

export default PaymentMethods; 