<template>
    <div v-once>
        <page-title>Тут информация о разработке😎👍✨</page-title>
        <p>Данный пед-проект послужил закреплению на практике уже изученных концепций Vue3.js, а также изучению новых фишек и опций. Благодаря проету я научился:</p>
        <ul>
            <li>Работать с маршрутизацией;</li>
            <li>Работать с основными директивами;</li>
            <li>Работать с основными модификаторами;</li>
            <li>Разбивать приложение на компоненты;</li>
            <li>Передавать пропсы дочерним компонентам;</li>
            <li>Эмитить события и прослушивать их в родителе;</li>
        </ul>
        <br>
        <p>Ссылка на GitHub: 
            <a 
                href="https://github.com/MakarLeonov/Simple-ToDo-List-on-Vue3"
                title="Перейти на мой GitHube с данным репозиторием"
                target="_blank"
                >ToDo List on Vue3.js</a>
        </p>
    </div>
</template>
<script>
import PageTitle from "@/components/UI/PageTitle.vue";

export default {
    components: {
        PageTitle,
    }
}
</script>
<style lang="scss" scoped>
    li {
        margin-left: 30px;
    }

    a {
        text-decoration: none;
        &:hover {
            color: red;
            transition: all .2s;
        }
    }
</style>