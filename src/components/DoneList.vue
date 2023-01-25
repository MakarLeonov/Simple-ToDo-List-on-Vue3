<template>
    
    

    <div class="notes">
        <transition-group name="list" tag="p">
            <done-note
                    class="list-items"
                    v-for="(note, index) in done" 
                    :key="index"
                    :done="note"
                    :index="index"
                    @returnToNotes="returnToNotes"
                />
        </transition-group>
    </div>
</template>
<script>
import DoneNote from '@/components/UI/doneNote.vue';
export default {

    components: {
        DoneNote,
    },

    props: {
        done: {
            type: Array,
        },
        
    },

    methods: {
        returnToNotes(index) {
            this.$emit('returnToNotes', index);
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