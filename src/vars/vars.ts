interface PortImage {
    id: number;
    title: string;
    description: string;
    image: string;
}

export const portImages: PortImage[] = [
    {
        id: 1,
        title: "EggFarm",
        description: "port.eggFarm.description",
        image: "/assets/egg/egg.png"
    },
    {
        id: 2,
        title: "Morago",
        description: "port.morago.description",
        image: "/assets/morago/morago.png"
    },
    {
        id: 3,
        title: "Movie",
        description: "port.film.description",
        image: "/assets/film/film.png"
    }

]

interface PortfolioItem {
    title: string
    fullDescription: string
    github: string
    stack: string
    screenshots: string[]
}

export const portItems: Record<number, PortfolioItem> = {
    1: {
        title: "EggFarm",
        fullDescription: "port.eggFarm.fullDescription",
        github: "https://github.com/Elena-Li-scr/egg-farm",
        stack: "port.eggFarm.stack",
        screenshots: ["/assets/egg/egg1.png", "/assets/egg/egg2.png", "/assets/egg/egg3.png", "/assets/egg/egg4.png", "/assets/egg/egg5.png", "/assets/egg/egg6.png", "/assets/egg/egg7.png", "/assets/egg/egg8.png", "/assets/egg/egg9.png", "/assets/egg/egg10.png", "/assets/egg/egg11.png"]
    },
    2: {
        title: "Morago",
        fullDescription: "port.morago.fullDescription",
        github: "https://github.com/Elena-Li-scr/morago-front-end",
        stack: "port.morago.stack",
        screenshots: ["/assets/morago/morago1.png", "/assets/morago/morago2.png", "/assets/morago/morago3.png", "/assets/morago/morago4.png", "/assets/morago/morago5.png", "/assets/morago/morago6.png", "/assets/morago/morago7.png", "/assets/morago/morago8.png", "/assets/morago/morago9.png", "/assets/morago/morago10.png", "/assets/morago/morago11.png", "/assets/morago/morago15.png", "/assets/morago/morago16.png", "/assets/morago/morago17.png"]
    },
    3: {
        title: "Movie",
        fullDescription: "port.film.fullDescription",
        github: "https://github.com/Elena-Li-scr/tmdb-clone",
        stack: "port.film.stack",
        screenshots: ["/assets/film/film1.png", "/assets/film/film2.png", "/assets/film/film3.png", "/assets/film/film4.png"]
    }
}