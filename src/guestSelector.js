import React, { useState, useEffect } from 'react';
import './guestSelector.css';

function GuestSelector({ setGuestSummary }) {
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);
  const [pets, setPets] = useState(0);

  useEffect(() => {
    let summary = [];
    if (adults) summary.push(`${adults} adult${adults > 1 ? 's' : ''}`);
    if (children) summary.push(`${children} child${children > 1 ? 'ren' : ''}`);
    if (infants) summary.push(`${infants} infant${infants > 1 ? 's' : ''}`);
    if (pets) summary.push(`${pets} pet${pets > 1 ? 's' : ''}`);
    setGuestSummary(summary.join(', ') || 'Add guests');
  }, [adults, children, infants, pets, setGuestSummary]);

  const renderRow = (label, desc, value, setValue) => (
    <div className="guest-row">
      <div className="guest-info">
        <div className="label">{label}</div>
        <div className="desc">{desc}</div>
      </div>
      <div className="guest-counter">
        <button disabled={value <= 0} onClick={() => setValue(value - 1)}>-</button>
        <span>{value}</span>
        <button onClick={() => setValue(value + 1)}>+</button>
      </div>
    </div>
  );

  return (
    <div className="guest-selector">
      {renderRow('Adults', 'Ages 13 or above', adults, setAdults)}
      {renderRow('Children', 'Ages 2–12', children, setChildren)}
      {renderRow('Infants', 'Under 2', infants, setInfants)}
      {renderRow('Pets', 'Bringing a service animal?', pets, setPets)}
    </div>
  );
}

export default GuestSelector;
