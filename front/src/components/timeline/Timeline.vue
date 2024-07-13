<script lang="ts">
    /**
     * @attention pensez à inclure le fichier timeline en spécifiant la largeur souhaité pour la media query
     */

    import TimelineElement,{TimelineElementConfig} from "./TimelineElement.vue";

    export default{
        components: {
            TimelineElement: TimelineElement
        },
        props: {
            timelineConfig: {
                type: Array<TimelineElementConfig>,
                required: true
            }
        }
    };
</script>

<template>
    <div 
        class="timeline"
    >
        <TimelineElement
            v-for="config in timelineConfig"
            :config="config"
        />
    </div>
</template>
