// components/request/RequestForm.tsx
'use client';

import { memo } from 'react';
import { RequestContactDetails } from './RequestContactDetails';
import { RequestShippingDetails } from './RequestShippingDetails';
import { RequestProductSelection } from './RequestProductSelection';
import type { RequestFormProps } from './types';

export const RequestForm = memo(({ t, locale, formData, handleChange, handleProductChange }: RequestFormProps) => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RequestContactDetails t={t} formData={formData} handleChange={handleChange} />
        <RequestShippingDetails t={t} formData={formData} handleChange={handleChange} />
      </div>
      <RequestProductSelection 
        t={t} 
        formData={formData} 
        handleProductChange={handleProductChange} 
        handleChange={handleChange}
      />
    </div>
  );
});

RequestForm.displayName = 'RequestForm';