<template>
    <div class="note" @dblclick="showInput">
            <div class="left">
                <!-- <input class="checkbox" type="checkbox"> -->
                <span class="material-symbols-outlined done" @click="removeToDone">add_task</span>
                <input
                    autofocus
                    type="text"
                    v-if="editing"    
                    v-model="editingText" 
                    @keydown.enter="toEditNote"
                >
                <p 
                    v-else 
                    class="note_text"   
                >{{ note.note }}</p>
                
            </div>
            <div class="right">
                <!-- <span class="material-symbols-outlined done">add_task</span> -->
                <span class="material-symbols-outlined delete" @click="toDeleteNote">delete</span>
                <span class="material-symbols-outlined edit" @click="toEditNote">edit</span>
            </div>
        </div>
</template>
<script>
export default {

    props: {
        note: {
            type: Object,
        },

        index:{
            type: Number,
        }
    },

    data() {
        return {
            editing: false,
            editingText: this.note.note,
        }
    },

    methods: {
        toDeleteNote(){
            this.$emit('toDeleteNote', this.index);
        },
        toEditNote() {
            if (this.note.note != this.editingText) {
                this.$emit('toEditNote', this.index, this.editingText);
            }
            this.editing = false;

        },

        showInput(){
            this.editing = true;
        },

        removeToDone() {
            let newIndex = this.index;
            console.log("MyNote: ", newIndex)
            this.$emit('removeToDone', newIndex);
        }
        
    },
    
}
</script>
<style lang="scss" scoped>
@import "@/assets/variables.scss";
    .note {
        background-color: $itemfon_c;
        border-radius: 3px;
        padding: 8px 9px;
        margin-bottom: 2px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        &:hover {
            background-color: $itemfon_c2;
            transition: all .1s;
        }


        .left, .right {
            display: flex;

            .note_text {
                margin-left: 6px;
            }

            .delete {
                margin-right: 4px;
                &:hover {
                    color: red;
                    cursor: pointer;
                }
            }

            .edit {
                margin-right: 2px;
                &:hover {
                    color: yellow;
                    cursor: pointer;
                }
            }
            .checkbox {
                width: 15px;
            }

            .done {
                font-size: 20px;
                font-weight: 600;
                padding-top: 2px;
                // margin-right: 4px;
                cursor: pointer;
                color: rgb(94, 94, 94);

                &:hover {
                    color: #fff;
                    margin-top: -2px;
                    padding-bottom: 2px;
                    text-shadow: 0px 2px 2px rgba($color: #000000, $alpha: 0.2);                    
                    transition: all .2s;

                    
                }
            }
        }
    }
</style>