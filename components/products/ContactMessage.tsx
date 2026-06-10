export default function ContactMessage({ onClose }: any) {
    return (
      <div className="fixed inset-0 z-100 bg-black/50 flex items-center justify-center p-4">
        <div className="bg-white p-8 rounded-2xl shadow-2xl max-w-sm text-center">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Besoin du catalogue ?</h3>
          <p className="text-gray-600 mb-6">
            Nous serions ravis de vous accompagner dans votre projet. Veuillez nous contacter pour obtenir votre exemplaire personnalisé.
          </p>
          <div className="flex flex-col gap-3">
            <button 
              onClick={() => { window.location.href = '/contact'; }} 
              className="bg-orange-600 text-white py-2 rounded-lg font-bold hover:bg-orange-700"
            >
              Accéder à la page Contact
            </button>
            <button 
              onClick={onClose} 
              className="text-gray-400 text-sm hover:underline"
            >
              Fermer
            </button>
          </div>
        </div>
      </div>
    );
  }