<template>
        <div class="note" @dblclick="showInput">
            <div class="left">
                <!-- <input class="checkbox" type="checkbox" checked @change="returnToNotes"> -->
                <!-- <span class="material-symbols-outlined reply" @click="returnToNotes">settings_backup_restore</span> -->
                <!-- <span class="material-symbols-outlined reply" @click="returnToNotes">published_with_changes</span> -->
                <span class="material-symbols-outlined reply" @click="returnToNotes">task_alt</span>
                <p class="note_text" >{{  done.note }}</p>
            </div>
            <div class="right">
                <p class="date_text" >{{  done.date }}</p>
            </div>
        </div>
</template>
<script>
export default {

    props: {
        done: {
            type: Object,
        },

        index: {
            type: Number,
        }
    },

    methods: {
        returnToNotes() {
            this.$emit('returnToNotes', this.index);
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

            .date_text {
                margin-right: 2px;
                font-size: 14px;
            }

            .checkbox {
                width: 15px;
            }

            .reply {
                font-size: 20px;
                font-weight: 600;
                padding-top: 2px;
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