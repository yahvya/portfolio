<script lang="ts">
    /**
     * @brief Configuration d'image
     */
    export interface ImageConfig{
        /**
         * @brief Lien de la page
         */
        link:string;

        /**
         * @brief Titre de l'image
         */
        alt:string;
    }

    export default{
        props: {
            "images": {
                type: Array<ImageConfig>,
                required: true
            }
        }
    };
</script>

<template>
    <div 
        class="circular-images"
    >
        <div 
            class="elements"
        >
            <div 
                class="container"
            >
                <span 
                    v-for="(imageConfig,index) in images"
                    :style="`--i : ${index + 1}`"
                >
                    <img 
                        :src="imageConfig.link" 
                        :alt="imageConfig.alt" 
                    />
                </span>
            </div>
        </div>
    </div>
</template>


<style src="./CircularImages.scss" lang="scss" scoped>
</style>
