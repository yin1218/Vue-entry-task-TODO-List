<template>
    <b-form-checkbox @change="switchChange" name="check-button" switch>
        {{switchText}} ({{itemCount}})
    </b-form-checkbox>
</template>

<script>
export default ({
    name: "TodoSwitch",
    props:{
        'switchText':{
            type: String
        },
        'controlVariable':{
            type: Boolean,
        },
        'itemCount':{
            type: Number,
        }
    },
    methods:{
        switchChange(checked){
            this.$emit('update:controlVariable', checked)
        }
    }
})
</script>
