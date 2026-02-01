import React, { useState } from 'react';
import './Settings.css'

export default function EcommerceSettings() {
  const [storeName, setStoreName] = useState('My Store');
  const [currency, setCurrency] = useState('USD');
  const [timezone, setTimezone] = useState('GMT');
  const [aiFeatures, setAiFeatures] = useState({
    recommendations: true,
    dynamicPricing: false,
    inventoryPrediction: true,
  });

  const toggleAiFeature = (feature) => {
    setAiFeatures(prev => ({ ...prev, [feature]: !prev[feature] }));
  };

  return (
    <section className='settings-page'>
      <h1>E-commerce Module Settings</h1>

      {/* Store Settings */}
      <div>
        <h2>Store Settings</h2>
        <input
          type="text"
          value={storeName}
          onChange={(e) => setStoreName(e.target.value)}
          placeholder="Store Name"
        />
        <input
          type="text"
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
          placeholder="Currency"
        />
        <input
          type="text"
          value={timezone}
          onChange={(e) => setTimezone(e.target.value)}
          placeholder="Timezone"
        />
      </div>

      {/* Payments Settings */}
      <div>
        <h2>Payments</h2>
        <button>Setup Paystack</button>
        <button>Setup Stripe</button>
      </div>

      {/* Shipping Settings */}
      <div>
        <h2>Shipping & Delivery</h2>
        <input type="text" placeholder="Default Shipping Time" />
        <input type="text" placeholder="Delivery Zones / Regions" />
      </div>

      {/* AI Feature Settings */}
      <div>
        <h2>AI Features</h2>
        {Object.keys(aiFeatures).map((feature) => (
          <label key={feature}>
            <input
              type="checkbox"
              checked={aiFeatures[feature]}
              onChange={() => toggleAiFeature(feature)}
            />
            {feature.charAt(0).toUpperCase() + feature.slice(1)}
          </label>
        ))}
      </div>

      {/* Notifications */}
      <div>
        <h2>Notifications</h2>
        <label>
          <input type="checkbox" /> Order Notifications
        </label>
        <label>
          <input type="checkbox" /> Stock Alerts
        </label>
        <label>
          <input type="checkbox" /> AI Feature Alerts
        </label>
      </div>

      <button>Save Settings</button>
    </section>
  );
}
