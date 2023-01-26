<template>

    

    <div class="notes">
        <transition-group name="list" tag="p">
            <my-note 
                class="list-item"
                v-for="(note, index) in notes" 
                :key="index" 
                :note="note" 
                :index="index"
                @toDeleteNote="toDeleteNote"
                @toEditNote="toEditNote"
                @removeToDone="removeToDone"  />
        </transition-group>
    </div>
</template>
<script>
import MyNote from "@/components/UI/MyNote.vue";
export default {

    components: {
        MyNote,
    },

    props: {
        notes: {
            type: Array,
        },
    },

    methods: {
        toDeleteNote(index){
            this.$emit('toDeleteNote', index);
        },

        toEditNote(index, text){
            this.$emit('toEditNote', index, text);
        },

        removeToDone(newIndex) {
            console.log("NoteList: ", newIndex)
            this.$emit('removeToDone', newIndex);
        }
    },

}
</script>
<style lang="scss" scoped>
@import "@/assets/variables.scss";

.notes {
    width: 100%;
    display: flex;
    flex-direction: column;
}

.list-enter-active,
.list-leave-active {
  transition: all 1s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

</style>