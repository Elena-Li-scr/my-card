import "./portImage.css"
import { useTranslation } from "react-i18next";
interface Props {
    title: string;
    description: string;
    image: string;
    onClick: () => void;
}
export default function PortImage({ title, description, image, onClick }: Props) {
    const { t } = useTranslation();
    return (
        <div className="port-image">
            <div className="port-info">
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
            <div className="port-image-wrap">
                <img src={image} alt="port-image" className="port-main-image" />
                <button className="view" onClick={onClick}>{t("port.view")}</button>
            </div>
        </div>
    )
}
