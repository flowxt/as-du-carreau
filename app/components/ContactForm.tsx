'use client';

import { useState, FormEvent } from 'react';

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');

    const form = e.currentTarget;
    const data = {
      firstName: (form.elements.namedItem('firstName') as HTMLInputElement).value,
      lastName: (form.elements.namedItem('lastName') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      phone: (form.elements.namedItem('phone') as HTMLInputElement).value,
      city: (form.elements.namedItem('city') as HTMLInputElement).value,
      service: (form.elements.namedItem('service') as HTMLSelectElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="py-16 text-center">
        <div className="w-16 h-16 bg-gold/10 flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-serif text-2xl font-bold text-charcoal mb-4">
          Demande envoyée avec succès !
        </h3>
        <p className="text-slate mb-8">
          Merci pour votre message. Mickaël vous répondra dans les meilleurs délais.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="btn-secondary"
        >
          Envoyer une nouvelle demande
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-charcoal mb-2">
            Prénom *
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            required
            className="input-elegant"
            placeholder="Votre prénom"
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-charcoal mb-2">
            Nom *
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            required
            className="input-elegant"
            placeholder="Votre nom"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-2">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="input-elegant"
            placeholder="votre@email.com"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-charcoal mb-2">
            Téléphone *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            className="input-elegant"
            placeholder="06 00 00 00 00"
          />
        </div>
      </div>

      <div>
        <label htmlFor="city" className="block text-sm font-medium text-charcoal mb-2">
          Ville / Commune
        </label>
        <input
          type="text"
          id="city"
          name="city"
          className="input-elegant"
          placeholder="Votre ville"
        />
      </div>

      <div>
        <label htmlFor="service" className="block text-sm font-medium text-charcoal mb-2">
          Type de projet
        </label>
        <select id="service" name="service" className="input-elegant cursor-pointer">
          <option value="">Sélectionnez un service</option>
          <option value="carrelage">Carrelage & Faïence</option>
          <option value="mosaique">Mosaïque</option>
          <option value="sdb">Salle de bain / Douche à l&apos;italienne</option>
          <option value="exterieur">Terrasse / Piscine / Extérieur</option>
          <option value="preparation">Travaux de préparation</option>
          <option value="autre">Autre projet</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-2">
          Décrivez votre projet *
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          className="input-elegant resize-none"
          placeholder="Décrivez votre projet : type de travaux, surface approximative, délais souhaités..."
        ></textarea>
      </div>

      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          id="consent"
          name="consent"
          required
          className="mt-1 w-4 h-4 border-gray-300 rounded text-gold focus:ring-gold"
        />
        <label htmlFor="consent" className="text-sm text-slate">
          J&apos;accepte que mes données soient utilisées pour me recontacter dans le cadre de ma demande de devis. *
        </label>
      </div>

      {status === 'error' && (
        <div className="p-4 bg-red-50 border border-red-200 text-red-700 text-sm">
          Une erreur est survenue lors de l&apos;envoi. Veuillez réessayer ou nous contacter directement par téléphone.
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="btn-primary w-full md:w-auto disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === 'loading' ? (
          <span className="flex items-center gap-2">
            <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Envoi en cours...
          </span>
        ) : (
          'Envoyer ma demande'
        )}
      </button>
    </form>
  );
}
