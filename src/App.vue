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
            notes: [
                { id: 5, note: 'Обновить приложение', date: '20.03.2023' },
                { id: 6, note: 'Добавить функционал', date: '20.03.2023' },
                { id: 7, note: 'Закинуть на GitHub', date: '20.03.2023' },
            ],

            done: [
                { id: 1, note: 'Сломать всё к чертям', date: '20.03.2023' },
                { id: 2, note: 'Молиться, чтобы всё заработало', date: '21.03.2023' },
                { id: 3, note: 'Тупить час и потом вернуть всё, как было', date: '22.03.2023' },
                { id: 4, note: 'Забыть поспать', date: '23.03.2023' },
            ],
        }
    },

    methods: {
        toDeleteNote(index){
            this.notes.splice(index, 1);
        },

        addNewNote(newNote){
            this.notes.push(newNote);
        },

        toEditNote(index, text){
            console.log(index, text);

            this.notes[index].note = text;
        },

        returnToNotes(index) {
            this.notes.push(this.done[index]);
            this.done.splice(index, 1);
        },

        removeToDone(newIndex) {
            this.notes[newIndex].date = new Date().toLocaleDateString();
            this.done.push(this.notes[newIndex]);
            this.notes.splice(newIndex, 1);
        }
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