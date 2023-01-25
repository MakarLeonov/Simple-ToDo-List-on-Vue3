<template>
    <div>
        <p class="title">Список задач</p>

        <note-list 
            v-if="notes.length > 0"
            :notes="notes"
            @toDeleteNote="toDeleteNote"
            @toEditNote="toEditNote"  />
        
        <p class="addNewNote" v-else >Список заметок пуст, добавьте первую :)</p>

        <my-form @addNewNote="addNewNote"/>
        
    </div>
</template>
<script>
import NoteList from "@/components/NoteList.vue";
import MyForm from "@/components/UI/MyForm.vue";

export default {
    components: {
        NoteList, MyForm,
    },

    props: {
        notes: {
            type: Array,
        }
    },

    methods: {
        toDeleteNote(index){
            this.$emit('toDeleteNote', index);
        },

        addNewNote(newNote) {
            this.$emit('addNewNote', newNote);
        },

        toEditNote(index, text){
            this.$emit('toEditNote', index, text);
        }
    },
}
</script>
<style lang="scss" scoped>
@import "@/assets/variables.scss";
    .title {
        font-size: 22px;
        font-weight: 500;
        margin-bottom: 10px;
        text-align: center;
    }
    .addNewNote {
        text-align: center;
        padding: 8px;
    }

    
</style>