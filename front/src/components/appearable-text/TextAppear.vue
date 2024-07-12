<script lang="ts">
    export default {
        emits: ["appearEnd"],
        props: {
            /**
             * @brief Temps entre apparition de chaque lettre en millisecondes
             */
            timeBetweenLettersAppear: {
                type: Number,
                required: true
            }
        },
        data():Record<string,Array<HTMLElement>>{
            return {
                elements: []
            };
        },
        methods: {
            /**
             * @brief Gère l'apparition du texte
             */
            appear():void{
                const paragraph:HTMLParagraphElement = this.$refs.content as HTMLParagraphElement;

                const interval = setInterval(():void => {
                    // vérification de fin d'apparition
                    if(this.elements.length == 0){
                        // re-création de la chaine
                        paragraph.textContent = Array.from(paragraph.children)
                            .map((child:Element):string => {
                                child.remove();
                                return child.textContent!;
                            }).join("");
                        clearInterval(interval);
                        this.$emit("appearEnd");
                        return;
                    }

                    this.elements.shift()!.classList.add("show");
                },this.timeBetweenLettersAppear);
            }
        },
        mounted():void{
            const paragraph:HTMLParagraphElement = this.$refs.content as HTMLParagraphElement;

            const text:string = paragraph.textContent!;
            paragraph.textContent = "";

            // séparation et création des parties span
            text
                .split("")
                .forEach((textPart:string):void => {
                    const part = document.createElement("span");

                    part.textContent = textPart;
                    paragraph.append(part);
                    this.elements.push(part);
                });
        }
    };
</script>

<template>
    <p
        ref="content"
        class="text-appear"
    ><slot></slot></p>
</template>

<style src="./TextAppear.scss" lang="scss">

</style>
