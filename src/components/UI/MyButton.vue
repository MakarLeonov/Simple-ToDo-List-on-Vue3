<template>
    <div>
        <button class="button">
            <slot>Добавить</slot>
        </button>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
    .button {
        padding: 8px;
        background-color: rgba(0, 139, 139, 0.308);
        border: 2px solid rgba(0, 139, 139, 0.308);
        border-radius: 3px;

        &:hover {
            background-color: darkcyan;
            color: #fff;
            transition: all .2s;
        }
    }
</style>