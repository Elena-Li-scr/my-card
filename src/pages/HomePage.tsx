import MainPhoto from '../components/MainPhoto';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import LanguageSwitcher from '../components/LanguageSwitcher';
import { FaArrowDown } from "react-icons/fa";

import './homePage.css';
export default function HomePage() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  return (
    <div className="home-page">
      <LanguageSwitcher />
      <MainPhoto />
      <p className="my-name">{t('home.name')}</p>
      <h1 className="home-page-title">{t('home.title')}</h1>
      <h2 className="home-page-subtitle">{t('home.subtitle')}</h2>
      <div onClick={() => navigate('/about')} className="button-container">
        <button className="start-button">
          {t('home.start')}
        </button>
        <FaArrowDown />
      </div>
    </div>
  );
}
