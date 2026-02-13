import "./portfolioItem.css"
import { useParams } from "react-router-dom"
import { portItems } from "../vars/vars"
import { useTranslation } from "react-i18next"
import { useState } from "react"
import Screen from "./Screen"

export default function PortfolioItem() {
    const { id } = useParams()
    const item = portItems[Number(id)]
    const { t } = useTranslation()
    const [open, setOpen] = useState(false)

    return (
        <div className="portfolio-item">
            {open && <Screen setOpen={setOpen} />}
            <div className="port-item-info">
                <h2>{item.title}</h2>
                <p>{t(item.fullDescription)}</p>
                <a target="_blank"
                    rel="noopener noreferrer" href={item.github}>GitHub</a>
                <p>{t(item.stack)}</p>
                <div className="item-screenshots">{item.screenshots.map((screenshot, index) => (
                    <div key={index} className="item-screen" onClick={() => {
                        sessionStorage.setItem("screen", screenshot)
                        setOpen(true)
                    }}>
                        <img src={screenshot} alt={`screenshot-${index}`} />
                    </div>
                ))}</div>
            </div>

        </div>
    )
}   