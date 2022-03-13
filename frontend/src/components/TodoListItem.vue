<template>
    <div class="col-10 d-flex justify-content-start align-items-center" v-if="!item.done">
        <button type="button" class="btn btn-link"  @click="item.done = true">
        <Icon icon="akar-icons:circle-check" color="green" height="20" v-if="!item.done"/>
        </button>
        <div v-if="!item.editing"> {{item.text}}</div>
        <b-form-input v-else
        v-model="item.text" 
        @keydown.enter="item.editing = false"
        >
        </b-form-input>
    </div>
    <div class="col-10 d-flex justify-content-start align-items-center" v-if="item.done">
        <button type="button" class="btn btn-link"  @click="item.done = false">
        <Icon icon="akar-icons:circle-check-fill" color="grey" height="20" v-if="item.done"/>
        </button>
        <del v-if="!item.editing" class="text-left"> {{item.text}}</del>
        <b-form-input v-else
        v-model="item.text"
        @keydown.enter="item.editing = false"
        >
        </b-form-input>
    </div>
    <div class="col-2 d-flex justify-content-end align-items-center">
        <!-- edit button -->
        <button button type="button" class="btn btn-link"  @click="item.editing = !item.editing">
        <Icon icon="ant-design:edit-outlined" color="gray" height="20" />
        </button>
        <!-- delete button -->
        <button type="button" class="btn btn-link"  @click="deleteItem(index)">
        <Icon icon="ant-design:delete-filled" color="#d41d0d" height="20" />
        </button>

    </div>
</template>

<script>

export default({
    name: "TodoListItem",
    props:{
        "itemName":{
            type:String
        },
        "itemEditing":{
            type:Boolean
        },
        "itemKey":{
            type:Number
        }
    }
})
</script>
