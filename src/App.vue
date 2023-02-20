<template lang="">
    <div>
        <my-header></my-header>
        <div class="container">
            <router-view 
                :notes="notes"
                :done="done"
                @toDeleteNote="toDeleteNote"
                @addNewNote="addNewNote"
                @toEditNote="toEditNote"
                @returnToNotes="returnToNotes"
                @removeToDone="removeToDone"  />
        </div>
        
    </div>
</template>
<script>
import MyHeader from '@/components/UI/MyHeader.vue';

export default {
    components: {
        MyHeader,
    },

    data() {
        return {
            notes: [],
            done: [],
        }
    },

    methods: {
        toDeleteNote(index){
            this.notes.splice(index, 1);
            localStorage.notes = JSON.stringify(this.notes);
        },

        addNewNote(newNote){
            this.notes.push(newNote);
            localStorage.notes = JSON.stringify(this.notes);
        },

        toEditNote(index, text){
            console.log(index, text);
            this.notes[index].note = text;
            localStorage.notes = JSON.stringify(this.notes);
        },

        returnToNotes(index) {
            this.notes.push(this.done[index]);
            this.done.splice(index, 1);
            localStorage.notes = JSON.stringify(this.notes);
            localStorage.done = JSON.stringify(this.done);
        },

        removeToDone(newIndex) {
            this.notes[newIndex].date = new Date().toLocaleDateString();
            this.done.push(this.notes[newIndex]);
            this.notes.splice(newIndex, 1);
            localStorage.notes = JSON.stringify(this.notes);
            localStorage.done = JSON.stringify(this.done);
        }
    },

    beforeMount() {
        this.notes = JSON.parse(localStorage.getItem('notes'))
        this.done = JSON.parse(localStorage.getItem('done'))
    },




}
</script>
<style lang="scss">
    @import "@/assets/variables.scss";

    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Rubik', sans-serif;
    }

    .container {
        width: $cont_w;
        margin: 0 auto;;
    }

    
    

    
</style>