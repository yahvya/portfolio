<script lang="ts">
    /**
     * @attention pensez à inclure le fichier timeline-element en spécifiant la largeur souhaité pour la media query
     */

    /**
     * @brief Configuration 
     */
    export interface TimelineElementConfig{
        /**
         * @brief Titre de l'élément
         */
        title: String;

        /**
         * @brief Date de début
         */
        from: String;        

        /**
         * @brief Date de fin ou rien si en cours
         */
        to?: String;
    }

    export default{
        props: {
            "config": {
                required: true,
                type: Object as TimelineElementConfig
            }
        }
    };
</script>

<template>
    <div 
        class="timeline-element"
    >
        <p
            class="text-upper"
        >{{ config.title }}</p>

        <p
            v-if="!config.to"
        >
            Depuis {{ config.from }}
        </p>

        <p
            v-else
        >
            {{ config.from }} - {{ config.to }}
        </p>
    </div>
</template>

<style src="./TimelineElement.scss" lang="scss" scoped>
</style>
