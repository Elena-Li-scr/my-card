import MainPhoto from '../components/MainPhoto';
import { useTranslation } from 'react-i18next';
import './homePage.css';
export default function HomePage() {
  const { t } = useTranslation();
  return (
    <div className="home-page">
      <MainPhoto />
      <p className="my-name">{t('home.name')}</p>
      <h1 className="home-page-title">{t('home.title')}</h1>
      <h2 className="home-page-subtitle">{t('home.subtitle')}</h2>
    </div>
  );
}
