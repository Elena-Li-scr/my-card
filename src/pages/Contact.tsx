import { Mail, Phone } from 'lucide-react';
import { FaTelegramPlane, FaWhatsapp, FaLinkedin, FaGithub } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from "swiper/react";
import type { ReactNode } from 'react';

import './contacts.css';
import 'swiper/css';

type ContactItem = {
  icon: ReactNode;
  text: string;
  href?: string;
  copyValue?: string;
};

export default function Contact() {
  const { t } = useTranslation();
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
      alert(t('contacts.copy'));
    } catch (err) {
      console.error('Copy failed', err);
    }
  };
  return (
    <div className="contacts">
      <Swiper
        spaceBetween={30}
        slidesPerView={'auto'}
        grabCursor={true}

      >
        {contacts.map((item, index) => (
          <SwiperSlide key={index} className="contact-slide">
            {item.href ? (
              <a
                href={item.href}
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
                className="contact-card"
                onClick={() => copyToClipboard(item.copyValue!)}
              >
                <span className="icon">{item.icon}</span>
                <span className="text">{item.text}</span>
              </button>
            )}
          </SwiperSlide>
        ))}

      </Swiper>
    </div>
  );
}
