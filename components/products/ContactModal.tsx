'use client';

import { useState } from 'react';

export default function ContactModal({ onClose, productTitle }: any) {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    quantity: '',
    destination: '',
    message: productTitle ? `Je souhaite obtenir un devis pour : ${productTitle}` : ''
  });

  // Classe utilitaire pour les champs pour éviter la répétition
  const inputClass = "w-full p-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all text-gray-900";

  return (
    <div className="fixed inset-0 z-100 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-2xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto">
        <h3 className="text-2xl font-bold text-[#0f172a] mb-2">Demande de devis</h3>
        <p className="text-gray-500 mb-6 text-sm">
          Remplissez ce formulaire pour recevoir une offre adaptée à vos besoins.
        </p>

        <form className="space-y-4">
          <input 
            required 
            placeholder="Nom complet" 
            className={inputClass}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
          />
          <input 
            required 
            placeholder="Nom de votre entreprise" 
            className={inputClass}
            onChange={(e) => setFormData({...formData, company: e.target.value})}
          />
          <input 
            required type="email" 
            placeholder="Adresse email professionnelle" 
            className={inputClass}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
          />
          <div className="grid grid-cols-2 gap-4">
            <input 
              placeholder="Quantité (Tonnes)" 
              className={inputClass}
              onChange={(e) => setFormData({...formData, quantity: e.target.value})}
            />
            <input 
              placeholder="Port de destination" 
              className={inputClass}
              onChange={(e) => setFormData({...formData, destination: e.target.value})}
            />
          </div>
          <textarea 
            rows={3}
            placeholder="Votre message" 
            className={inputClass}
            value={formData.message}
            onChange={(e) => setFormData({...formData, message: e.target.value})}
          />
          
          <div className="flex gap-3 mt-6">
            <button type="submit" className="flex-1 bg-orange-600 text-white py-3 rounded-lg font-bold hover:bg-orange-700 transition">
              Envoyer la demande
            </button>
            {/* Bouton Annuler corrigé pour être visible */}
            <button 
                type="button" 
                onClick={onClose} 
                className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-100 hover:text-gray-900 transition"
            >
                Annuler
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}