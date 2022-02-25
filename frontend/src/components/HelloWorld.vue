<template>
  <div class="hello">
    <h1 > Vue ToDo List</h1>
    <b-card-header>
      <b-row no-gutters align-v="center" align-h="end">
      <b-col >
        <b-form-checkbox v-model="openTask" name="check-button" switch>Undone Task</b-form-checkbox>
      </b-col>
      <b-col >
        <b-form-checkbox v-model="openTaskDone" name="check-button" switch>Done Task</b-form-checkbox>
      </b-col>
      <b-col >
        <b-button variant="danger" v-on:click="deleteCompletedTask">Delete Completed Task</b-button>
      </b-col>
      <b-col >
        <b-button variant="danger" v-on:click="deleteAllTask">Delete All Task</b-button>
      </b-col>
    </b-row>
    </b-card-header>

    <b-card-body>
      <b-list-group>
        <!-- 如果勾選task item -->
        <b-list-group-item 
          class="d-flex justify-content-between align-items-center" 
          v-for="(item, index) in showList"
          :key="index"
          >
          
          <!-- <div class="row"> -->
            <div class="col-10" v-if="!item.done">
              <button type="button" class="btn btn-link"  v-on:click="item.done = true">
                <Icon icon="akar-icons:circle-check-fill" color="green" height="20" v-if="!item.done"/>
              </button>
              <div v-if="!item.editing"> {{item.text}}</div>
              <b-form-input v-else
                v-model="item.text" 
                @keydown.enter="item.editing = false"
              >
              </b-form-input>
            </div>
            <div class="col-10" v-if="item.done">
              <button type="button" class="btn btn-link"  v-on:click="item.done = false">
              <Icon icon="akar-icons:circle-check-fill" color="grey" height="20" v-if="item.done"/>
              </button>
              <del v-if="!item.editing"> {{item.text}}</del>
              <b-form-input v-else
                v-model="item.text"
                @keydown.enter="item.editing = false"
              >
              </b-form-input>
            </div>
            <!-- edit button -->
            <button button type="button" class="btn btn-link col-1"  v-on:click="item.editing = !item.editing">
              <Icon icon="ant-design:edit-outlined" color="gray" height="20" />
            </button>
            <!-- delete button -->
            <button type="button" class="btn btn-link col-1"  v-on:click="todoItem.splice(index,1)">
              <Icon icon="ant-design:delete-filled" color="#d41d0d" height="20" />
            </button>
        </b-list-group-item>
      </b-list-group>
      
    </b-card-body>
  <b-card-footer>
    <b-form-input 
    v-model="typingTodo" 
    placeholder="Enter your task"
    @keydown.enter="addTask"
    ></b-form-input>
  </b-card-footer>
  </div>
  
</template>

<script>
import { Icon } from '@iconify/vue';

export default {
  name: 'HelloWorld',
  // props: {
  // },
  components:{
    Icon
  },
  data(){
    return{
      openTask: true,
      openTaskDone: true,
      typingTodo: "",
      editingTodo: "",
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
    addTask(){
      this.todoItem.push({
        id: this.todoItem.length,
        text: this.$data.typingTodo,
        done: false,
        editing: false
      })
      this.$data.typingTodo = "";
    },
    deleteAllTask(){
      this.todoItem = []
    },
    deleteCompletedTask(){
      this.todoItem = this.todoItem.filter(item => !item.done)
    }
  },
  computed:{
    showList(){
      if(this.openTask && this.openTaskDone){
        return this.todoItem;
      }
      else if(this.openTask){
        return this.todoItem.filter(item => !item.done);
      }
      else if(this.openTaskDone){
        return this.todoItem.filter(item => item.done);
      }
      else{
        return [];
      }
  }
}
}
</script>

<style scoped>

</style>
