<template>
  <div class="todo d-flex flex-column align-items-center">
    <h1 class="display-4" > Vue ToDo List</h1>
    <b-card no-body
      style="width: 70vw;"
    >
      <b-card-header>
      <b-row align-v="center" class="justify-content-md-end">
      <b-col md="auto">
        <TodoSwitch
          switch-text="Undone Task"
          v-model:control-variable="openTaskUndone"
          :item-count="undoneItem.length"
        ></TodoSwitch>
      </b-col>
      <b-col md="auto">
        <TodoSwitch
          switch-text="Done Task"
          v-model:control-variable="openTaskDone"
          :item-count="doneItem.length"
        ></TodoSwitch>
      </b-col>
      <!-- v-if="doneItem.length !== 0" -->
      <b-col md="auto" >
        <TodoButton
          button-text="Done Task"
          :click-method="deleteCompletedTask"
          v-model:parent-todo-item="todoItem"
        ></TodoButton>

      </b-col>
      <!-- v-if="todoItem.length !== 0" -->
      <b-col md="auto" >
          <TodoButton
          button-text="All Tasks"
          :click-method="deleteAllTask"
          v-model:parent-todo-item="todoItem"
        ></TodoButton>

      </b-col>
    </b-row>
    </b-card-header>
    <b-card-body class="overflow-auto" style="max-height: 50vh;">
      <TodoList
        v-model:parent-todo-item="todoItem"
        v-model:parent-open-task-undone="openTaskUndone"
        v-model:parent-open-task-done="openTaskDone"
        :parent-undone-item="undoneItem"
        :parent-done-item="doneItem"
      ></TodoList>
    </b-card-body>
  <b-card-footer>
    <TodoInput 
      v-model:parent-todo-item="todoItem"
    ></TodoInput>
  </b-card-footer>

    </b-card>

  </div>
  
</template>

<script>
import TodoInput from './TodoInput.vue'
import TodoButton from './TodoButton.vue'
import TodoSwitch from './TodoSwitch.vue'
import TodoList from './TodoList.vue'
export default {
  name: 'Todo',
  components:{
    TodoSwitch, TodoInput, TodoButton, TodoList
  },
  data(){
    return{
      openTaskUndone: true,
      openTaskDone: true,
      todoItem: [
        {
          id: 0,
          text: "finish entry task",
          done: false,
          editing: false
        },
        {
          id: 1,
          text: "review OR",
          done: true,
          editing: false
        }
      ]
    }
  },
  methods:{
    // function about clicking button
    deleteAllTask(){
      this.todoItem = []
      // 讓按鈕的顏色變成藍色
    },
    deleteCompletedTask(){
      this.todoItem = this.todoItem.filter(item => !item.done)
      // 讓按鈕的顏色變成藍色
    }
  },
  computed:{
    undoneItem(){
      return this.todoItem.filter(item => !item.done)
    },
    doneItem(){
      return this.todoItem.filter(item => item.done)
    },
}
}
</script>

<style scoped>

</style>
