<script lang="ts">
    import ClassicNavbar from "@/components/classic-navbar/ClassicNavbar.vue"
    import TextAppear from "@/components/appearable-text/TextAppear.vue";
    import LookDown from "@/components/look-down/LookDown.vue";
    import Timeline from "@/components/timeline/Timeline.vue";
    import ContactForm from "@/components/contact-form/ContactForm.vue";
    import CircularImages from "@/components/circular-images/CircularImages.vue";

    export default{
        components: {
            TextAppear,
            ClassicNavbar: ClassicNavbar,
            LookDown: LookDown,
            Timeline: Timeline,
            ContactForm: ContactForm,
            CircularImages: CircularImages
        },
        data():Record<string,any>{
          return {
                contactLink: "#",
                timelineConfig: [],
                appearIndex: 0,
                textsToAppear: [
                    "Salut, je me présente Yahaya ;) passionné de programmation et jeune développeur fullstack.",
                    "Découvrez-en davantage sur moi en scrollant dans la page ;)"
                ],
                activitiesImages: [
                    {"link": "https://yahaya-bathily.fr/src/public/images/activities-images/2.jpeg",alt: "Image"},
                    {"link": "https://yahaya-bathily.fr/src/public/images/activities-images/2.jpeg",alt: "Image"},
                    {"link": "https://yahaya-bathily.fr/src/public/images/activities-images/2.jpeg",alt: "Image"},
                    {"link": "https://yahaya-bathily.fr/src/public/images/activities-images/2.jpeg",alt: "Image"},
                ]
          };
        },
        methods: {
            /**
             * @brief Gestion du chargement de la page
             */
            onPageLoad():void{
                this.appearNext();
                this.loadTimeline();
            },
            /**
             * @brief Affiche l'élément à faire apparaitre suivant
             */
            appearNext():void{
                const appearsElements:Array<typeof TextAppear> = this.$refs.appearElements as Array<typeof TextAppear>;

                if(appearsElements.length <= this.appearIndex)
                    return;

                appearsElements[this.appearIndex].appear();
                this.appearIndex++;
            },
            /**
             * @brief Charge la timeline
             */
            loadTimeline():void{
                /**
                 * @todo supprimer le test
                 */
                this.timelineConfig = [
                    {
                        title: "Master informatique dev web et mobile fullstack",
                        from: "2023"
                    },
                    {
                        title: "licence informatique",
                        from: "2020",
                        to: "2023"
                    },
                    {
                        title: "Bac",
                        from: "2019",
                        to: "2020"
                    },
                    {
                        title: "Autodidacte",
                        from: "2019"
                    }
                ];
            }
        },
        mounted():void{
            window.addEventListener("load",this.onPageLoad);
        },
        beforeUnmount():void {
            window.removeEventListener("load",this.onPageLoad);
        },
    };
</script>

<template>
    <ClassicNavbar
        contactLink="#contact"
        linkedinLink="#"
        githubLink="#"
    />

    <div
        id="home-content"
        class="m-auto"
    >
        <img
            class="m-auto block poster-image"
            src="/me/me.png"
            alt="#<Yahaya>"
        />

        <TextAppear
            v-for="textToAppear in textsToAppear"
            :time-between-letters-appear="25"
            @appear-end="appearNext"
            ref="appearElements"
            class="text-center"
        >{{ textToAppear }}</TextAppear>

        <LookDown
            id="about-me"
        />

        <p
            class="section-title"
        >Mon parcours</p>

        <Timeline
            :timelineConfig="timelineConfig"
        />

        <p
            class="section-title"
        >Ce que j'aime faire</p>

        <CircularImages
            :images="activitiesImages"
            id="services"
        />

        <p
            class="section-title"
        >Que puis-je faire pour vous ?</p>

        <p
            class="section-title"
        >Mes projets</p>

        <p
            class="section-title"
        >Stack technique</p>

        <p
            class="section-title"
        >Envie de me contacter ?</p>

        <ContactForm
            :postLink="contactLink"
            areaMessage="Essayez d'être le plus explicite possible pour faciliter l'échange ;)"
            id="contact"
        >
            <template #security-tags>
                <input type="hidden" name="token" value="#">
            </template>
        </ContactForm>
    </div>
</template>

<style src="./HomeView.scss" lang="scss">
    
</style>
