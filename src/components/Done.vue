<template>
    <div>
        <page-title>Выполнено</page-title>

        <done-list
            :done="done"
            @returnToNotes="returnToNotes"
        >

        </done-list>
    </div>
</template>
<script>
import DoneList from "@/components/DoneList.vue";
import PageTitle from "@/components/UI/PageTitle.vue";

export default {
    components: {
        DoneList, PageTitle,
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
    
</style>