<template>
    <b-form-input 
    v-model="typingTodo" 
    placeholder="Enter your task"
    @keydown.enter="addTask"
    ></b-form-input>
</template>

<script>

export default({
    name: 'TodoInput',
    props:{
        'parentTodoItem': {
            type: Object,

        }
    },
    data(){
        return{
            typingTodo: "",
        }
    },
    methods:{
        addTask(){ 
            let temp = [...this.parentTodoItem,{
            id: this.parentTodoItem.length,
            text: this.typingTodo,
            done: false,
            editing: false
            }]
            this.$emit('update:parentTodoItem', temp)
        this.typingTodo = "";
        }
    }
})
</script>
