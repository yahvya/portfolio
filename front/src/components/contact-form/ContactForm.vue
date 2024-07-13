<script lang="ts">
    export default{
        props: {
            postLink: {
                type: String,
                required: true
            },
            areaMessage: {
                type: String,
                required: true
            }
        },
        data(){
            return {
                fullname: "",
                email: "",
                reason: "",
                message: ""
            };
        }
    };
</script>

<template>
    <form 
        class="contact-form" 
        method="post" 
        :action="postLink"
    >   
        <p 
            class="contact-message"
        ></p>

        <div 
            class="container flex-row align-center justify-between"
        >
            <div 
                class="side flex-column"
            >
                <div 
                    class="flex-row align-center"
                >
                    <i class="fa-solid fa-user an-icon"></i>

                    <input 
                        v-model="fullname" 
                        type="text" 
                        name="fullname" 
                        minlength="2" 
                        maxlength="60" 
                        placeholder="Entrez votre nom et / ou prénom" 
                        required=""
                    />
                </div>

                <div 
                    class="flex-row align-center"
                >
                    <i class="fa-solid fa-envelope an-icon"></i>
                
                    <input 
                        v-model="email"
                        type="email" 
                        name="email" 
                        placeholder="Saisissez votre e-mail" 
                        required=""
                    />
                </div>

                <div 
                    class="flex-row align-center"
                >
                    <i class="fa-solid fa-circle-question an-icon"></i>
                    
                    <input 
                        v-model="reason"
                        type="text" 
                        name="reason" 
                        placeholder="Raison du message" 
                        minlength="7" 
                        maxlength="255"
                        required=""
                    />
                </div>
            </div>

            <textarea  
                v-model="message"
                name="message" 
                minlength="20" 
                required="" 
                :placeholder="areaMessage"
            ></textarea>
        </div>

        <slot name="security-tags"></slot>

        <button class="special-button">Envoyer</button>
    </form>
</template>


<style src="./ContactForm.scss" lang="scss" scoped>
</style>
