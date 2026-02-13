import PortImage from "../components/PortImage";
import { portImages } from "../vars/vars";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./portfolio.css"


export default function Portfolio() {
    const navigate = useNavigate();
    const { t } = useTranslation();
    return (
        <div className="portfolio">
            {portImages.map((item) => (
                <PortImage key={item.id} title={item.title}
                    description={t(item.description)} image={item.image} onClick={() => navigate(`/portfolio/${item.id}`)} />
            ))}
        </div>
    )
}