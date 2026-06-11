// components/request/RequestShippingDetails.tsx
'use client';

import { memo } from 'react';
import type { RequestShippingDetailsProps } from './types';

export const RequestShippingDetails = memo(({ t, formData, handleChange }: RequestShippingDetailsProps) => {
  return (
    <div className="bg-[#1e293b] border border-orange-500 rounded-xl p-6">
      <h2 className="text-xl font-bold mb-4">{t.request_page.section_shipping_title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm text-gray-400 mb-1">{t.request_page.shipping_port_load}</label>
          <select
            name="portOfLoad"
            value={formData.portOfLoad}
            onChange={handleChange}
            className="w-full bg-[#0f172a] border border-gray-700 rounded-md px-3 py-2 text-white focus:border-orange-500 focus:outline-none"
          >
            <option value="">{t.request_page.select_option}</option>
            <option value="skikda">{t.request_page.port_skikda}</option>
            <option value="oran">{t.request_page.port_oran}</option>
            <option value="algiers">{t.request_page.port_algiers}</option>
          </select>
        </div>
        <div>
          <label className="block text-sm text-gray-400 mb-1">{t.request_page.shipping_destination}</label>
          <input
            type="text"
            name="destinationPort"
            value={formData.destinationPort}
            onChange={handleChange}
            className="w-full bg-[#0f172a] border border-gray-700 rounded-md px-3 py-2 text-white focus:border-orange-500 focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-400 mb-1">{t.request_page.shipping_lead_time}</label>
          <input
            type="text"
            name="leadTime"
            value={formData.leadTime}
            onChange={handleChange}
            className="w-full bg-[#0f172a] border border-gray-700 rounded-md px-3 py-2 text-white focus:border-orange-500 focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-400 mb-1">{t.request_page.shipping_incoterm}</label>
          <select
            name="incoterm"
            value={formData.incoterm}
            onChange={handleChange}
            className="w-full bg-[#0f172a] border border-gray-700 rounded-md px-3 py-2 text-white focus:border-orange-500 focus:outline-none"
          >
            <option value="">{t.request_page.select_option}</option>
            <option value="fob">FOB</option>
            <option value="cfr">CFR</option>
            <option value="cif">CIF</option>
          </select>
        </div>
      </div>
    </div>
  );
});

RequestShippingDetails.displayName = 'RequestShippingDetails';