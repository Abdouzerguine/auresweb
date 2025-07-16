import React, { useState, useEffect } from 'react';
import { DollarSign, CheckCircle, XCircle, ArrowRight } from 'lucide-react';
import { ServiceOffer } from './sections/Services';

interface BudgetSelectorProps {
  currentLang: string;
  services: ServiceOffer[];
  onServiceSelect?: (service: ServiceOffer) => void;
}

interface BudgetRange {
  min: number;
  max: number;
  label: string;
  color: string;
}

const BudgetSelector: React.FC<BudgetSelectorProps> = ({ 
  currentLang, 
  services, 
  onServiceSelect 
}) => {
  const [selectedBudget, setSelectedBudget] = useState<number | null>(null);
  const [filteredServices, setFilteredServices] = useState<ServiceOffer[]>([]);

  const translations = {
    ar: {
      title: 'اختر ميزانيتك',
      subtitle: 'اختر نطاق ميزانيتك لرؤية الخدمات المتاحة',
      budgetRanges: [
        { min: 0, max: 50000, label: 'حتى 50,000 دج', color: 'bg-blue-100 border-blue-300' },
        { min: 50000, max: 100000, label: '50,000 - 100,000 دج', color: 'bg-green-100 border-green-300' },
        { min: 100000, max: 150000, label: '100,000 - 150,000 دج', color: 'bg-yellow-100 border-yellow-300' },
        { min: 150000, max: 999999, label: 'أكثر من 150,000 دج', color: 'bg-purple-100 border-purple-300' }
      ],
      availableServices: 'الخدمات المتاحة',
      noServicesAvailable: 'لا توجد خدمات متاحة في هذا النطاق',
      selectService: 'اختر هذه الخدمة',
      priceFrom: 'ابتداءً من',
      features: 'المميزات',
      selectBudget: 'اختر ميزانيتك أولاً'
    },
    en: {
      title: 'Select Your Budget',
      subtitle: 'Choose your budget range to see available services',
      budgetRanges: [
        { min: 0, max: 50000, label: 'Up to 50,000 DA', color: 'bg-blue-100 border-blue-300' },
        { min: 50000, max: 100000, label: '50,000 - 100,000 DA', color: 'bg-green-100 border-green-300' },
        { min: 100000, max: 150000, label: '100,000 - 150,000 DA', color: 'bg-yellow-100 border-yellow-300' },
        { min: 150000, max: 999999, label: 'Over 150,000 DA', color: 'bg-purple-100 border-purple-300' }
      ],
      availableServices: 'Available Services',
      noServicesAvailable: 'No services available in this range',
      selectService: 'Select This Service',
      priceFrom: 'From',
      features: 'Features',
      selectBudget: 'Please select your budget first'
    },
    fr: {
      title: 'Sélectionnez Votre Budget',
      subtitle: 'Choisissez votre fourchette de budget pour voir les services disponibles',
      budgetRanges: [
        { min: 0, max: 50000, label: 'Jusqu\'à 50 000 DA', color: 'bg-blue-100 border-blue-300' },
        { min: 50000, max: 100000, label: '50 000 - 100 000 DA', color: 'bg-green-100 border-green-300' },
        { min: 100000, max: 150000, label: '100 000 - 150 000 DA', color: 'bg-yellow-100 border-yellow-300' },
        { min: 150000, max: 999999, label: 'Plus de 150 000 DA', color: 'bg-purple-100 border-purple-300' }
      ],
      availableServices: 'Services Disponibles',
      noServicesAvailable: 'Aucun service disponible dans cette fourchette',
      selectService: 'Sélectionner Ce Service',
      priceFrom: 'À partir de',
      features: 'Fonctionnalités',
      selectBudget: 'Veuillez sélectionner votre budget d\'abord'
    }
  };

  const t = translations[currentLang as keyof typeof translations] || translations.en;

  // Extract price number from price string (e.g., "From 40,000 DA" -> 40000)
  const extractPrice = (priceString: string): number => {
    const match = priceString.match(/(\d+(?:,\d+)*)/);
    if (match) {
      return parseInt(match[1].replace(/,/g, ''));
    }
    return 0;
  };

  // Filter services based on selected budget
  useEffect(() => {
    if (selectedBudget !== null) {
      const filtered = services.filter(service => {
        const price = extractPrice(service.price);
        const budgetRange = t.budgetRanges.find(range => 
          selectedBudget >= range.min && selectedBudget <= range.max
        );
        
        if (budgetRange) {
          return price <= budgetRange.max;
        }
        return false;
      });
      setFilteredServices(filtered);
    } else {
      setFilteredServices([]);
    }
  }, [selectedBudget, services, t.budgetRanges]);

  const handleBudgetSelect = (budget: number) => {
    setSelectedBudget(budget);
  };

  const handleServiceSelect = (service: ServiceOffer) => {
    if (onServiceSelect) {
      onServiceSelect(service);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4 dark:text-white">
          {t.title}
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          {t.subtitle}
        </p>
      </div>

      {/* Budget Range Selection */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {t.budgetRanges.map((range, index) => (
          <button
            key={index}
            onClick={() => handleBudgetSelect(range.max)}
            className={`p-6 rounded-lg border-2 transition-all duration-300 hover:scale-105 ${
              selectedBudget === range.max
                ? `${range.color} border-2 border-blue-500 shadow-lg`
                : 'bg-white border-gray-200 hover:border-gray-300 dark:bg-gray-800 dark:border-gray-700'
            }`}
          >
            <div className="flex items-center justify-center mb-4">
              <DollarSign className={`w-8 h-8 ${
                selectedBudget === range.max ? 'text-blue-600' : 'text-gray-400'
              }`} />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              {range.label}
            </h3>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              {range.min === 0 ? 'Budget limité' : `${range.min.toLocaleString()} - ${range.max.toLocaleString()} DA`}
            </div>
          </button>
        ))}
      </div>

      {/* Available Services */}
      {selectedBudget !== null && (
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 dark:text-white text-center">
            {t.availableServices}
          </h3>
          
          {filteredServices.length === 0 ? (
            <div className="text-center py-12">
              <XCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <p className="text-xl text-gray-600 dark:text-gray-400">
                {t.noServicesAvailable}
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <service.icon className="w-8 h-8 text-blue-600 mr-3" />
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {service.title}
                    </h4>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                    {service.description}
                  </p>
                  
                  <div className="mb-4">
                    <span className="text-2xl font-bold text-blue-600">
                      {service.price}
                    </span>
                  </div>
                  
                  <div className="mb-6">
                    <h5 className="font-semibold text-gray-900 dark:text-white mb-2">
                      {t.features}:
                    </h5>
                    <ul className="space-y-1">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <button
                    onClick={() => handleServiceSelect(service)}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center"
                  >
                    {t.selectService}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {selectedBudget === null && (
        <div className="text-center py-12">
          <DollarSign className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <p className="text-xl text-gray-600 dark:text-gray-400">
            {t.selectBudget}
          </p>
        </div>
      )}
    </div>
  );
};

export default BudgetSelector; 