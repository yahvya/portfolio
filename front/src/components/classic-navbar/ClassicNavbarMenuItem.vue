<script lang="ts">
    export default{
        props: {
            text:{
                type: String,
                required: true
            },
            link: {
                type: String,
                required: true
            },
            iconClasses: {
                type: String,
                required: true
            },
            isBlank: {
                type: Boolean,
                required: false
            },
            title: {
                type: String,
                required: true
            }
        }
    };
</script>

<template>
    <div
        class="menu-item flex-row align-center small-gap"
    >
        <i
            :class="iconClasses"
        ></i>

        <a
            :href="link"
            :title="title"
        >{{ text }}</a>
    </div>
</template>

<style src="./styles/ClassicNavbarMenuItem.scss" scoped lang="scss">

</style>