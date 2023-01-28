<template lang="">
    <header>
            <div class="container">
                <router-link to="/main" class="logo">
                    <span class="material-symbols-outlined logo">list_alt</span>
                    Logotip
                </router-link>
                    
                <nav>
                    <router-link to="/main">Home</router-link>
                    <router-link to="/done">Done</router-link>
                    <router-link to="/about">About</router-link>
                </nav>
            </div>
        </header>
</template>
<script>
export default {
    
}
</script>
<style lang="scss">
@import "@/assets/variables.scss";

    header {
        width: 100%;
        background-color: $fon_c;
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 30px;
        
        .container {
            width: $cont_w;
            display: flex;
            justify-content: space-between;
            align-items: center;

            .logo {
                font-size: 26px;
                font-weight: 500;
                color: $font_c;

                display: flex;
                align-items: center;
                text-decoration: none;

                &:hover {
                        color: yellow;
                        cursor: pointer;
                    }
            }

            nav {
                display: flex;

                a {
                    color: $font_c;
                    margin-left: 15px;
                    font-size: 18px;
                    text-decoration: none;

                    &:hover {
                        color: yellow;
                        cursor: pointer;
                    }
                }
            }
        }
    }
</style>