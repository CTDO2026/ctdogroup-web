import { useState } from 'react';

const brandThemeMap = {
    Ambiental: 'stgreenly',
    'Fortalecimiento Empresarial': 'ctdo',
    'Estratégica y Financiera': 'ctdo',
    'Contacto General': 'ctdo',
    Nacional: 'colombiatodo',
    Internacional: 'colombiatodo',
    Seguros: 'seguros',
    'Grupos Electrógenos': 'energia',
    'Diseño Gráfico & UI/UX': 'desarrollo',
    'Frontend & Backend': 'desarrollo',
    default: 'ctdo'
};

const themeClasses = {
    ctdo: {
        text: 'text-brand-ctdo',
        bg: 'bg-brand-ctdo',
        ring: 'focus:ring-brand-ctdo',
        hoverBg: 'hover:bg-blue-700',
    },
    stgreenly: {
        text: 'text-brand-stgreenly',
        bg: 'bg-brand-stgreenly',
        ring: 'focus:ring-brand-stgreenly',
        hoverBg: 'hover:bg-emerald-600',
    },
    colombiatodo: {
        text: 'text-brand-colombiatodo',
        bg: 'bg-brand-colombiatodo',
        ring: 'focus:ring-brand-colombiatodo',
        hoverBg: 'hover:bg-orange-600',
    },
    seguros: {
        text: 'text-brand-seguros',
        bg: 'bg-brand-seguros',
        ring: 'focus:ring-brand-seguros',
        hoverBg: 'hover:bg-sky-700',
    },
    energia: {
        text: 'text-brand-energia',
        bg: 'bg-brand-energia',
        ring: 'focus:ring-brand-energia',
        hoverBg: 'hover:bg-yellow-600',
    },
    desarrollo: {
        text: 'text-brand-desarrollo',
        bg: 'bg-brand-desarrollo',
        ring: 'focus:ring-brand-desarrollo',
        hoverBg: 'hover:bg-indigo-600',
    }
};

export default function LeadForm({ unidadBase, subUnidadInicial = "" }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    nombre: '', empresa: '', email: '', telefono: '',
    unidad: unidadBase, subUnidad: subUnidadInicial, mensaje: ''
  });

  const themeName = brandThemeMap[subUnidadInicial] || brandThemeMap.default;
  const theme = themeClasses[themeName];

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Reemplazar URL con el endpoint de captación de leads (Netlify, Formspree o HubSpot API)
    console.log("Lead Calificado Capturado:", formData);
    window.location.href = "/gracias";
  };

  const inputClasses = `w-full p-3 border border-slate-200 rounded-xl bg-slate-50 text-sm focus:outline-none focus:ring-2 ${theme.ring}`;

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100 max-w-xl mx-auto transition-all duration-300">
      <input type="hidden" name="unidad" value={formData.unidad} />
      <input type="hidden" name="subUnidad" value={formData.subUnidad} />

      {step === 1 && (
        <div className="space-y-4 animate-fadeIn">
          <h3 className="text-xl font-bold text-corporativo-textoOscuro">¿En qué solución está interesado?</h3>
          <p className="text-sm text-corporativo-textoMutado mb-4">Unidad seleccionada: <span className={`font-semibold ${theme.text}`}>{formData.subUnidad || formData.unidad}</span></p>
          <textarea 
            name="mensaje" 
            required
            placeholder="Describa brevemente la necesidad o requerimiento de su empresa..." 
            onChange={handleChange} 
            className={`${inputClasses} h-32`}
          ></textarea>
          <button type="button" onClick={() => setStep(2)} className={`w-full text-white font-semibold py-3 rounded-xl transition-all shadow-md ${theme.bg} ${theme.hoverBg}`}>
            Continuar al registro corporativo
          </button>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-4 animate-fadeIn">
          <h3 className="text-xl font-bold text-corporativo-textoOscuro">Información Corporativa</h3>
          <input type="text" name="nombre" required placeholder="Nombre completo del contacto" onChange={handleChange} className={inputClasses} />
          <input type="text" name="empresa" required placeholder="Nombre de la Empresa" onChange={handleChange} className={inputClasses} />
          <input type="email" name="email" required placeholder="Correo electrónico corporativo" onChange={handleChange} className={inputClasses} />
          <input type="tel" name="telefono" required placeholder="Teléfono de contacto o WhatsApp" onChange={handleChange} className={inputClasses} />
          
          <div className="flex gap-4 pt-2">
            <button type="button" onClick={() => setStep(1)} className="w-1/3 bg-slate-100 hover:bg-slate-200 text-corporativo-textoMutado py-3 rounded-xl font-medium transition-colors">Atrás</button>
            <button type="submit" className={`w-2/3 text-white font-semibold py-3 rounded-xl transition-all shadow-md ${theme.bg} ${theme.hoverBg}`}>Enviar Solicitud</button>
          </div>
        </div>
      )}
    </form>
  );
}