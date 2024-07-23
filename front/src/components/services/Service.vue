<script lang="ts">
    /**
     * @brief Configuration d'un service
     */
    export interface ServiceConfig{
        /**
         * @brief Nom du service
         */
        serviceName: string;
        /**
         * @brief Description non obligatoire du service
         */
        serviceDescription?: string;
    };

    export default{
        props: {
            serviceConfig: {
                type: Object as ServiceConfig,
                required: true
            }
        }
    };
</script>

<template>
    <div class="service">
        <p>{{ serviceConfig.serviceName }}</p>
    </div>
</template>

<style src="./Service.scss" lang="scss" scoped>
</style>
