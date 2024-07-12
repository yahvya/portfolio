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
        data(){
            return {
                elements: []
            };
        },
        methods: {
            /**
             * @brief Gère l'apparition du texte
             */
            appear():void{
                const interval = setInterval(():void => {
                    // vérification de fin d'apparition
                    if(this.elements.length == 0){
                        // re-création de la chaine
                        this.$refs.content.textContent = Array.from(this.$refs.content.children)
                            .map((child:HTMLElement) => {
                                child.remove();
                                return child.textContent;
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
            const text:string = this.$refs.content.textContent;
            this.$refs.content.textContent = "";

            // séparation et création des parties span
            text
                .split("")
                .forEach((textPart:string):void => {
                    const part = document.createElement("span");

                    part.textContent = textPart;
                    this.$refs.content.append(part);
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