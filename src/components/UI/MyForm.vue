<template>
    <div class="form">
            <input 
                type="text" 
                class="form_inp" 
                v-model="text"
                @keydown.enter="addNewNote"
            >
            <button class="form_btn" @click="addNewNote">Добавить</button>
        </div>
</template>
<script>

export default {
    data() {
        return {
            text: '',

        }
    },

    methods: {
        addNewNote(){
            if (this.text != '') {
                let newNote = {
                    id: Date.now(),
                    note: this.text
                }

                this.$emit('addNewNote', newNote);
                this.text = '';
            }
        },
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