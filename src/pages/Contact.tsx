import { Mail, Phone } from 'lucide-react';
import { FaTelegramPlane, FaWhatsapp, FaLinkedin, FaGithub } from 'react-icons/fa';
import type { ReactNode } from 'react';
import { useState } from 'react';
import PopUp from '../components/PopUp';

import './contacts.css';


type ContactItem = {
  icon: ReactNode;
  text: string;
  href?: string;
  copyValue?: string;
};

export default function Contact() {
  const [showPopUp, setShowPopUp] = useState(false);
  const contacts: ContactItem[] = [
    {
      icon: <Mail className="contact-icon" />,
      text: 'lielena.dev@gmail.com',
      copyValue: 'lielena.dev@gmail.com'
    },
    {
      icon: <Phone className="contact-icon" />,
      text: '+82 10 8094-6999',
      copyValue: '+82 10 8094-6999'
    },
    {
      icon: <FaLinkedin className="contact-icon" />,
      text: 'LinkedIn',
      href: 'https://www.linkedin.com/in/elena-li-dev',

    },
    {
      icon: <FaTelegramPlane className="contact-icon" />,
      text: 'Telegram',
      href: 'https://t.me/elena_li_dev',
    },
    {
      icon: <FaWhatsapp className="contact-icon" />,
      text: 'WhatsApp',
      href: 'https://wa.me/821080946999',

    },
    {
      icon: <FaGithub className="contact-icon" />,
      text: 'GitHub',
      href: 'https://github.com/elena-li-scr',
    }
  ]

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setShowPopUp(true);
    } catch (err) {
      console.error('Copy failed', err);
    }
  };
  return (
    <div className="contacts">
      {showPopUp && <PopUp onClick={() => setShowPopUp(false)} />}

      {contacts.map((item, index) => (
        item.href ? (
          <a
            href={item.href}
            key={index}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
          >
            <span className="icon">{item.icon}</span>
            <span className="text">{item.text}</span>
          </a>
        ) : (
          <button
            type="button"
            key={index}
            className="contact-card"
            onClick={() => copyToClipboard(item.copyValue!)}
          >
            <span className="icon">{item.icon}</span>
            <span className="text">{item.text}</span>
          </button>
        )

      ))}

    </div>
  );
}
