<script lang="ts">
    import ClassicNavbar from "@/components/classic-navbar/ClassicNavbar.vue"
    import TextAppear from "@/components/appearable-text/TextAppear.vue";

    export default{
        components: {
            TextAppear,
            ClassicNavbar: ClassicNavbar
        },
        data():Record<string,any>{
          return {
              appearIndex: 0,
              textsToAppear: [
                  "Salut, je me présente Yahaya ;) passionné de programmation et jeune développeur fullstack.",
                  "Découvrez-en davantage sur moi en scrollant dans la page ;)"
              ]
          };
        },
        methods: {
            /**
             * @brief Gestion du chargement de la page
             */
            onPageLoad():void{
                this.appearNext();
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
    <ClassicNavbar/>

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
    </div>
</template>

<style src="./HomeView.scss" scoped lang="scss">
</style>
