import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, User } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const QA_DATABASE = {
  'services': 'We offer comprehensive web solutions including web design, web development, e-commerce stores, and custom web applications. All tailored specifically for Algerian businesses!',
  'pricing': 'Our packages start from 35,000 DA for basic services up to 200,000 DA for enterprise solutions. We offer competitive pricing with 24-hour delivery guarantee.',
  'delivery': 'We pride ourselves on lightning-fast delivery! Most projects are completed within 24 hours. Complex projects may take 2-3 days maximum.',
  'support': 'Absolutely! We provide continuous technical support for all our clients. You\'ll never be left alone after launch.',
  'custom': 'Yes! We specialize in fully custom designs. Every website we create is unique and tailored to your specific needs and brand.',
  'portfolio': 'You can view our work showcase to see examples of our projects. We\'ve worked with various Algerian businesses across different industries.',
  'contact': 'You can reach us through our contact form, WhatsApp, or email. We respond within minutes during business hours.',
  'languages': 'We support multiple languages including Arabic, French, and English to serve our diverse Algerian clientele.',
  'payment': 'We accept various payment methods including bank transfer, cash, and digital payments. We also offer flexible payment plans.',
  'maintenance': 'We provide ongoing maintenance and updates to keep your website secure, fast, and up-to-date with the latest technologies.'
};

const Chatbot: React.FC<{ currentLang: string }> = ({ currentLang }) => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (open && messages.length === 0) {
      // Welcome message
      setTimeout(() => {
        addBotMessage(currentLang === 'ar' ? 'مرحباً! كيف يمكنني مساعدتك اليوم؟' : 
                     currentLang === 'fr' ? 'Bonjour! Comment puis-je vous aider aujourd\'hui?' :
                     'Hello! How can I help you today?');
      }, 500);
    }
  }, [open, currentLang]);

  const addMessage = (text: string, isUser: boolean) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      isUser,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const addBotMessage = (text: string) => {
    setIsTyping(true);
    setTimeout(() => {
      addMessage(text, false);
      setIsTyping(false);
    }, 1000);
  };

  const getBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes('service') || lowerMessage.includes('offer') || lowerMessage.includes('do')) {
      return QA_DATABASE.services;
    } else if (lowerMessage.includes('price') || lowerMessage.includes('cost') || lowerMessage.includes('how much')) {
      return QA_DATABASE.pricing;
    } else if (lowerMessage.includes('deliver') || lowerMessage.includes('time') || lowerMessage.includes('fast') || lowerMessage.includes('24')) {
      return QA_DATABASE.delivery;
    } else if (lowerMessage.includes('support') || lowerMessage.includes('help') || lowerMessage.includes('after')) {
      return QA_DATABASE.support;
    } else if (lowerMessage.includes('custom') || lowerMessage.includes('unique') || lowerMessage.includes('design')) {
      return QA_DATABASE.custom;
    } else if (lowerMessage.includes('portfolio') || lowerMessage.includes('work') || lowerMessage.includes('example')) {
      return QA_DATABASE.portfolio;
    } else if (lowerMessage.includes('contact') || lowerMessage.includes('reach') || lowerMessage.includes('phone')) {
      return QA_DATABASE.contact;
    } else if (lowerMessage.includes('language') || lowerMessage.includes('arabic') || lowerMessage.includes('french')) {
      return QA_DATABASE.languages;
    } else if (lowerMessage.includes('payment') || lowerMessage.includes('pay') || lowerMessage.includes('money')) {
      return QA_DATABASE.payment;
    } else if (lowerMessage.includes('maintenance') || lowerMessage.includes('update') || lowerMessage.includes('secure')) {
      return QA_DATABASE.maintenance;
    } else {
      return currentLang === 'ar' ? 
        'شكراً لسؤالك! يمكنني مساعدتك في معلومات حول خدماتنا، الأسعار، وقت التسليم، والدعم الفني. ما الذي تريد معرفته؟' :
        currentLang === 'fr' ? 
        'Merci pour votre question! Je peux vous aider avec des informations sur nos services, prix, délais de livraison et support technique. Que souhaitez-vous savoir?' :
        'Thanks for your question! I can help you with information about our services, pricing, delivery times, and technical support. What would you like to know?';
    }
  };

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      addMessage(inputValue, true);
      const response = getBotResponse(inputValue);
      setInputValue('');
      addBotMessage(response);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Floating Chat Bubble */}
      <button
        className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white rounded-full p-4 shadow-lg transition-all duration-300 focus:outline-none hover:scale-110"
        onClick={() => setOpen(true)}
        aria-label="Open chatbot"
        style={{ display: open ? 'none' : 'block' }}
      >
        <MessageSquare className="w-7 h-7" />
      </button>

      {/* Chat Window */}
      {open && (
        <div className="fixed bottom-6 right-6 z-50 w-96 max-w-full bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col h-96 animate-fade-in">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-100 bg-gradient-to-r from-teal-500 to-blue-500 rounded-t-2xl">
            <div className="flex items-center space-x-2">
              <Bot className="w-5 h-5 text-white" />
              <span className="text-white font-bold">
                {currentLang === 'ar' ? 'مساعد AuresWeb' : 
                 currentLang === 'fr' ? 'Assistant AuresWeb' : 
                 'AuresWeb Assistant'}
              </span>
            </div>
            <button 
              onClick={() => { 
                setOpen(false); 
                setMessages([]); 
                setInputValue(''); 
              }} 
              className="text-white hover:text-gray-200 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`flex items-start space-x-2 max-w-xs ${message.isUser ? 'flex-row-reverse space-x-reverse' : ''}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                    message.isUser 
                      ? 'bg-gradient-to-r from-teal-500 to-blue-500' 
                      : 'bg-gray-200'
                  }`}>
                    {message.isUser ? (
                      <User className="w-4 h-4 text-white" />
                    ) : (
                      <Bot className="w-4 h-4 text-gray-600" />
                    )}
                  </div>
                  <div className={`px-4 py-2 rounded-2xl ${
                    message.isUser
                      ? 'bg-gradient-to-r from-teal-500 to-blue-500 text-white'
                      : 'bg-gray-100 text-gray-800'
                  }`}>
                    <p className="text-sm">{message.text}</p>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="flex items-start space-x-2">
                  <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                    <Bot className="w-4 h-4 text-gray-600" />
                  </div>
                  <div className="px-4 py-2 rounded-2xl bg-gray-100">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-100">
            <div className="flex space-x-2">
              <input
                type="text"
                className="flex-1 px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-400"
                placeholder={currentLang === 'ar' ? 'اكتب رسالتك هنا...' : 
                           currentLang === 'fr' ? 'Tapez votre message ici...' : 
                           'Type your message here...'}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputValue.trim()}
                className="px-4 py-2 bg-gradient-to-r from-teal-500 to-blue-500 text-white rounded-lg hover:from-teal-600 hover:to-blue-600 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot; 