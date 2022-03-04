<template>
    <!-- <p>
            {{todoItem}}
    </p> -->
    <b-button variant="danger" size="sm" @click="clickMethod()">
        <Icon icon="ant-design:delete-filled" color="white" height="15" />
        {{text}}
        <!-- 這邊用傳入的東西做參數 -->
    </b-button>
</template>

<script>
    import { Icon } from '@iconify/vue';

    export default({
        name: 'TodoButton',
        components: {
            Icon
        },
        props:{
            'buttonText':{
                type: String
            },
            'clickMethod':{
                type: Function
            },
            'parentTodoItem':{
                type: Object
            }
        },
        data(){
            return{
                text: this.buttonText,
                method: this.clickMethod,
                todoItem: this.parentTodoItem
            }
        },
    })
</script>
