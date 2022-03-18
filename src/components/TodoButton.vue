<template>

    <b-button variant="danger" size="sm" @click="clickingButton">
        <Icon icon="ant-design:delete-filled" color="white" height="15" />
        {{text}}
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
        methods:{
            clickingButton(e){
                this.clickMethod();
                // console.log(event.target);
                e.target.className = "btn btn-primary btn-sm"
                // 把顏色變成藍色
            }
        }
    })
</script>
