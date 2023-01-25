<template>
    <div>
        <p class="title">Выполнено</p>

        <done-list
            :done="done"
            @returnToNotes="returnToNotes"
        >

        </done-list>
    </div>
</template>
<script>
import DoneList from "@/components/DoneList.vue";
export default {
    components: {
        DoneList,
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
    .title {
        font-size: 22px;
        font-weight: 500;
        margin-bottom: 10px;
        text-align: center;
    }
</style>