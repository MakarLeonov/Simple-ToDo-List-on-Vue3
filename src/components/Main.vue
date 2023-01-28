<template>
    <div>
        <page-title>Список задач</page-title>

        <note-list 
            v-if="notes.length > 0"
            :notes="notes"
            @toDeleteNote="toDeleteNote"
            @toEditNote="toEditNote"
            @removeToDone="removeToDone"  />
        
        <p class="addNewNote" v-else >Список заметок пуст, добавьте первую :)</p>

        <my-form @addNewNote="addNewNote"/>
        
    </div>
</template>
<script>
import NoteList from "@/components/NoteList.vue";
import MyForm from "@/components/UI/MyForm.vue";
import PageTitle from "@/components/UI/PageTitle.vue";

export default {
    components: {
        NoteList, MyForm, PageTitle
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
        },

        removeToDone(newIndex) {
            console.log("Main: ", newIndex)
            this.$emit('removeToDone', newIndex);
        }
    },
}
</script>
<style lang="scss" scoped>
@import "@/assets/variables.scss";
    .addNewNote {
        text-align: center;
        padding: 8px;
    }

    
</style>