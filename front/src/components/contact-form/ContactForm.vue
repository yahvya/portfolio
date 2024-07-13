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
                        type="text" 
                        name="fullname" 
                        minlength="2" 
                        maxlength="60" 
                        placeholder="Entrez votre nom et / ou prénom" 
                        value="" 
                        required=""
                    />
                </div>

                <div 
                    class="flex-row align-center"
                >
                    <i class="fa-solid fa-envelope an-icon"></i>
                
                    <input 
                        type="email" 
                        name="email" 
                        placeholder="Saisissez votre e-mail" 
                        value="" 
                        required=""
                    />
                </div>

                <div 
                    class="flex-row align-center"
                >
                    <i class="fa-solid fa-circle-question an-icon"></i>
                    
                    <input 
                        type="text" 
                        name="reason" 
                        placeholder="Raison du message" 
                        minlength="7" 
                        maxlength="255" 
                        value="" 
                        required=""
                    />
                </div>
            </div>

            <textarea  
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
