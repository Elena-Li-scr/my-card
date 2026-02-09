import { useTranslation } from "react-i18next"
import { FaReact, FaHtml5, FaCss3 } from 'react-icons/fa';
import { RiNextjsFill, RiJavascriptFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";

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
    // const stack2 = [
    //     {
    //         name: "Git",
    //         image: "/images/git.png"
    //     },
    //     {
    //         name: "Figma",
    //         image: "/images/figma.png"
    //     },
    //     {
    //         name: "Vite",
    //         image: "/images/vite.png"
    //     },
    //     {
    //         name: "Vue.js",
    //         image: "/images/vue.png"
    //     },
    //     {
    //         name: "Zustand",
    //         image: "/images/zustand.png"
    //     },
    //     {
    //         name: "WebSocket",
    //         image: "/images/websocket.png"
    //     },
    //     {
    //         name: "WebRTC",
    //         image: "/images/webrtc.png"
    //     },
    //     {
    //         name: "ESLint",
    //         image: "/images/eslint.png"
    //     },
    //     {
    //         name: "Prettier",
    //         image: "/images/prettier.png"
    //     },
    //     {
    //         name: "Husky",
    //         image: "/images/husky.png"
    //     },
    //     {
    //         name: "Docker",
    //         image: "/images/docker.png"
    //     }
    // ]


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
                <div className="stack-list-main">
                    {stack.map((item, index) => (
                        <div className="stack-item" key={index}>
                            {item.image}
                            <p>{item.name}</p>
                        </div>
                    ))}
                </div>
                <p>{t('about.other')}:</p>
                {/* <div className="stack-list-other">
                    {stack2.map((item, index) => (
                        <div className="stack-item" key={index}>
                            {item.image}
                            <p>{item.name}</p>
                        </div>
                    ))}
                </div> */}
            </div>
        </div>
    )
}