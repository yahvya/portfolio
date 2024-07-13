<script lang="ts">
    import {classicNavbarConfig, type ClassicNavbarItemConfig} from "./ClassicNavbarConfig";
    import ClassicNavbarMenuItem from "@/components/classic-navbar/ClassicNavbarMenuItem.vue";

    export default{
        computed: {
            classicNavbarConfig():Array<ClassicNavbarItemConfig> {
                return classicNavbarConfig;
            }
        },
        components: {
            ClassicNavbarMenuItem: ClassicNavbarMenuItem
        },
        props: {
            contactLink: {
                type: String,
                required: true
            },
            linkedinLink: {
                type: String,
                required: true
            },
            githubLink: {
                type: String,
                required: true
            }
        }
    };
</script>

<template>
    <span id="page-top"></span>
    <input type="checkbox" id="app-nav-checkbox">

    <div
        id="classic-navbar"
        class="sticky-top on-bg-variant"
    >
        <label
            title="Navigation"
            class="menu flex-column align-end justify-center" for="app-nav-checkbox">
            <span></span>
            <span></span>
            <span></span>
        </label>

        <div class="container">
            <div
                class="menu-items flex-row align-center justify-center great-gap"
            >
                <ClassicNavbarMenuItem
                    v-for="menuItem in classicNavbarConfig"
                    :text=menuItem.text
                    :link=menuItem.link
                    :icon-classes=menuItem.iconClasses
                    :is-blank=menuItem.isBlank
                    :title=menuItem.title
                />
            </div>

            <div
                class="side-elements flex-column align-center small-gap"
            >
                <a
                    href="{{ githubLink }}"
                    title="Visitez mon github"
                    target="_blank"
                ><i class="fa-brands fa-github"></i></a>

                <a
                    href="{{ linkedinLink }}"
                    title="Visitez mon profil linkedin"
                    target="_blank"
                ><i class="fa-brands fa-linkedin-in"></i></a>

                <a
                    :href="contactLink"
                    title="Contactez moi"
                ><i class="fa-solid fa-envelope"></i></a>

                <a
                    href="#page-top"
                    title="Haut de page"
                    class="upp-icon on-bg flex-row justify-center align-center"
                ><i class="fa-solid fa-caret-up"></i></a>
            </div>
        </div>
    </div>
</template>

<style src="./styles/ClassicNavbar.scss" scoped lang="scss">
</style>
