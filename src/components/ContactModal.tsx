import { useState, useRef, FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/ContactModal.css';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  if (!isOpen) return null;

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceID || !templateID || !publicKey) {
      console.error("Clés EmailJS manquantes.");
      setStatus('error');
      return;
    }

    if (form.current) {
      emailjs.sendForm(serviceID, templateID, form.current, publicKey)
        .then(() => {
          setStatus('success');
          setTimeout(() => {
            onClose();
            setStatus('idle');
          }, 2500);
        }, (error) => {
          console.error(error);
          setStatus('error');
        });
    }
  };

  return (
    <div className="contact-overlay" onClick={onClose}>
      <div className="contact-modal" onClick={(e) => e.stopPropagation()}>
        <button className="contact-close" onClick={onClose}>&times;</button>
        
        <div className="modal-header">
          <h2>Me contacter</h2>
          <p>À la recherche d'une opportunité de stage ou d'alternance ?<br/>Je serais ravi d'échanger avec vous.</p>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <div className="form-group">
            <label>Votre Nom / Entreprise</label>
            <input type="text" name="user_name" required placeholder="Ex: Jean Dupont - Entreprise X" />
          </div>

          <div className="form-group">
            <label>Votre Email Professionnel</label>
            <input type="email" name="user_email" required placeholder="nom@entreprise.com" />
          </div>

          <div className="form-group">
            <label>Votre Message</label>
            <textarea 
              name="message" 
              required 
              placeholder="Bonjour, votre profil nous intéresse pour un poste de..." 
              rows={6} // Plus de hauteur pour le confort
            ></textarea>
          </div>

          <button type="submit" className="submit-btn" disabled={status === 'sending' || status === 'success'}>
            {status === 'idle' && 'Envoyer le message'}
            {status === 'sending' && 'Envoi en cours...'}
            {status === 'success' && 'Message envoyé !'}
            {status === 'error' && 'Une erreur est survenue'}
          </button>
        </form>
      </div>
    </div>
  );
}