export interface ClassicNavbarItemConfig{
    /**
     * @brief Texte de lien
     */
    text:string;
    /**
     * @brief Lien
     */
    link:string;
    /**
     * @brief Si le lien envoi sur une autre page
     */
    isBlank?: boolean;
    /**
     * @brief Classe de l'icône
     */
    iconClasses:string;
    /**
     * @brief Titre au survol
     */
    title:string;
}

/**
 * @brief Eléments de la barre de navigation classique
 */
export const classicNavbarConfig:Array<ClassicNavbarItemConfig> = [
    {
        text: "A propos de moi",
        link: "#about-me",
        iconClasses: "fa-solid fa-circle-question",
        title: "Découvrez en plus sur moi"
    },
    {
        text: "Services",
        link: "#services",
        iconClasses: "fa-solid fa-coins",
        title: "Découvrez ce que je propose"
    },
    {
        text: "Projets",
        link: "#projects",
        iconClasses: "fa-solid fa-diagram-project",
        title: "Découvrez mes projets"
    },
    {
        text: "Stack technique",
        link: "#stack",
        iconClasses: "fa-solid fa-gears",
        title: "Découvrez les technologies que j'utilise"
    },
    {
        text: "Contact",
        link: "#contact",
        iconClasses: "fa-solid fa-envelope",
        title: "Contactez moi"
    }
];