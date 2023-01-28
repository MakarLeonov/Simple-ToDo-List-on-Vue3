<template>
    <div class="form">
            <input 
                type="text" 
                ref="input"
                class="form_inp" 
                v-model.trim="text"
                @keydown.enter="addNewNote"
            >
            
            <my-button @click="addNewNote"></my-button>
        </div>
</template>
<script>
import MyButton from "@/components/UI/MyButton.vue";

export default {

    components: {
        MyButton, 
    },

    data() {
        return {
            text: '',

        }
    },

    mounted() {
            this.toFocusInput()
        },

    methods: {
        addNewNote(){
            if (this.text != '') {
                let newNote = {
                    id: Date.now(),
                    note: this.text,
                    date: ''
                }

                this.$emit('addNewNote', newNote);
                this.text = '';
            }

        },
        
        toFocusInput(){
            this.$refs.input.focus();        
        }
    },
}
</script>
<style lang="scss" scoped>
    .form {
        display: flex;
        justify-content: end;
        padding: 2px;

        .form_inp {
            padding: 5px;
            margin-right: 2px;
        }
    }
</style>