import React from "react";
import './CustomTooltip.css';

export default function CustomTooltip({ active, payload, label }) {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="label">{payload[0].name}</p>
        <p className="value">${payload[0].value.toLocaleString()}</p>
      </div>
    );
  }
  return null;
}
