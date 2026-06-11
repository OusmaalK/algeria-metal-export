// components/request/RequestContactDetails.tsx
'use client';

import { memo } from 'react';
import type { RequestContactDetailsProps } from './types';

export const RequestContactDetails = memo(({ t, formData, handleChange }: RequestContactDetailsProps) => {
  return (
    <div className="bg-[#1e293b] border border-orange-500 rounded-xl p-6">
      <h2 className="text-xl font-bold mb-4">{t.request_page.section_contact_title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm text-gray-400 mb-1">{t.request_page.contact_company}</label>
          <input
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            className="w-full bg-[#0f172a] border border-gray-700 rounded-md px-3 py-2 text-white focus:border-orange-500 focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-400 mb-1">{t.request_page.contact_person}</label>
          <input
            type="text"
            name="contactPerson"
            value={formData.contactPerson}
            onChange={handleChange}
            className="w-full bg-[#0f172a] border border-gray-700 rounded-md px-3 py-2 text-white focus:border-orange-500 focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-400 mb-1">{t.request_page.contact_email}</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full bg-[#0f172a] border border-gray-700 rounded-md px-3 py-2 text-white focus:border-orange-500 focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-400 mb-1">{t.request_page.contact_project_type}</label>
          <select
            name="projectType"
            value={formData.projectType}
            onChange={handleChange}
            className="w-full bg-[#0f172a] border border-gray-700 rounded-md px-3 py-2 text-white focus:border-orange-500 focus:outline-none"
          >
            <option value="">{t.request_page.select_option}</option>
            <option value="infrastructure">{t.request_page.project_type_infrastructure}</option>
          </select>
        </div>
      </div>
    </div>
  );
});

RequestContactDetails.displayName = 'RequestContactDetails';