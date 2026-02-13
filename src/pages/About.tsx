import { useTranslation } from "react-i18next"
import { FaReact, FaHtml5, FaCss3, FaGithub, FaFigma, FaVuejs, FaGulp, FaBootstrap } from 'react-icons/fa';
import { RiNextjsFill, RiJavascriptFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { SiVite, SiEslint, SiPrettier, SiDocker, SiWebpack, } from "react-icons/si";

import "./about.css"
export default function About() {
    const { t } = useTranslation()
    const points = t('about.points', { returnObjects: true }) as string[]
    const stack = [
        {
            name: "React",
            image: <FaReact className="stack-icon" />
        },
        {
            name: "Next",
            image: <RiNextjsFill className="stack-icon" />
        },
        {
            name: "TypeScript",
            image: <BiLogoTypescript className="stack-icon" />
        },
        {
            name: "JavaScript",
            image: <RiJavascriptFill className="stack-icon" />
        },
        {
            name: "HTML",
            image: < FaHtml5 className="stack-icon" />
        },
        {
            name: "CSS",
            image: <FaCss3 className="stack-icon" />
        }
    ]
    const stack2 = [
        {
            name: "Git",
            image: <FaGithub className="stack-icon" />
        },
        {
            name: "Figma",
            image: <FaFigma className="stack-icon" />
        },
        {
            name: "Vite",
            image: <SiVite className="stack-icon" />
        },
        {
            name: "Vue.js",
            image: <FaVuejs className="stack-icon" />
        },
        {
            name: "Gulp",
            image: <FaGulp className="stack-icon" />
        },
        {
            name: "ESLint",
            image: <SiEslint className="stack-icon" />
        },
        {
            name: "Prettier",
            image: <SiPrettier className="stack-icon" />
        },
        {
            name: "Docker",
            image: <SiDocker className="stack-icon" />
        },
        {
            name: "Webpack",
            image: <SiWebpack className="stack-icon" />
        },
        {
            name: "Bootstrap",
            image: <FaBootstrap className="stack-icon" />
        },

    ]


    return (
        <div className="about">
            <div className="about-main">
                <h2>{t('about.main')}</h2>
                <p>{t('about.subtitle')}</p>
                <ul>
                    {points.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
            <div className="about-stack">
                <p>{t('about.tech')}:</p>
                <div className="stack-list">
                    {stack.map((item, index) => (
                        <div className="stack-item" key={index}>
                            {item.image}
                            <p>{item.name}</p>
                        </div>
                    ))}
                </div>
                <p>{t('about.other')}:</p>
                <div className="stack-list">
                    {stack2.map((item, index) => (
                        <div className="stack-item" key={index}>
                            {item.image}
                            <p>{item.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}