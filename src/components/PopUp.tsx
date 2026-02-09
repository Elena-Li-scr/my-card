import { useTranslation } from "react-i18next";
import './popUp.css';

export default function PopUp({ onClick }: { onClick: () => void }) {
    const { t } = useTranslation();
    return (
        <div className="popup-container">
            <div className="popup">
                <button type="button" className="close-btn" onClick={onClick}>X</button>
                <p>{t('contacts.copy')}</p>
            </div>
        </div>
    );
}