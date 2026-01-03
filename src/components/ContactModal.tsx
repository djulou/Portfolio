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

  // Si la modale n'est pas ouverte, on ne rend rien (null)
  if (!isOpen) return null;

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    // Récupération des clés depuis le fichier .env (Vite)
    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    // Petite sécurité pour vérifier que les clés existent
    if (!serviceID || !templateID || !publicKey) {
      console.error("Les clés EmailJS sont manquantes dans le fichier .env !");
      setStatus('error');
      return;
    }

    if (form.current) {
      emailjs.sendForm(serviceID, templateID, form.current, publicKey)
        .then(() => {
          setStatus('success');
          // On ferme la modale automatiquement après 2.5 secondes de succès
          setTimeout(() => {
            onClose(); 
            setStatus('idle'); // On remet le statut à zéro pour la prochaine fois
          }, 2500);
        }, (error) => {
          console.error("Erreur d'envoi EmailJS :", error);
          setStatus('error');
        });
    }
  };

  return (
    <div className="contact-overlay" onClick={onClose}>
      <div className="contact-modal" onClick={(e) => e.stopPropagation()}>
        <button className="contact-close" onClick={onClose}>&times;</button>
        
        <h2>Me contacter</h2>
        <p>Un projet ? Une question ? Envoyez-moi un message !</p>

        <form ref={form} onSubmit={sendEmail}>
          <div className="form-group">
            <label>Votre Nom</label>
            {/* Le 'name' doit correspondre à {{user_name}} dans ton template EmailJS */}
            <input type="text" name="user_name" required placeholder="Ex: Jean Dupont" />
          </div>

          <div className="form-group">
            <label>Votre Email</label>
            {/* Le 'name' doit correspondre à {{user_email}} */}
            <input type="email" name="user_email" required placeholder="Ex: jean@mail.com" />
          </div>

          <div className="form-group">
            <label>Votre Message</label>
            {/* Le 'name' doit correspondre à {{message}} */}
            <textarea name="message" required placeholder="Bonjour, j'aimerais..." rows={5}></textarea>
          </div>

          <button type="submit" className="submit-btn" disabled={status === 'sending' || status === 'success'}>
            {status === 'idle' && 'Envoyer le message'}
            {status === 'sending' && 'Envoi en cours...'}
            {status === 'success' && 'Message envoyé avec succès !'}
            {status === 'error' && 'Erreur. Vérifiez la console.'}
          </button>
        </form>
      </div>
    </div>
  );
}