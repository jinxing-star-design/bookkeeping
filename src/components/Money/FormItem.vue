<template>
    
        <label class="formItem">
            <span class="name">{{this.fieldName}}</span>
            <input type="text" 
                   :value="value"
                   @input="onValueChanged($event.target.value)"
                   :placeholder="this.placeholder">
        </label>      
    
</template>

<script lang="ts">
 import Vue from 'vue';
import {Component, Prop, Watch} from 'vue-property-decorator';



 @Component
  export default class FormItem extends Vue{
      @Prop({default: ''}) readonly value!:string;

      @Prop({required: true}) fieldName!: string;
      @Prop() placeholder?:string;

      @Watch('value') 
      onValueChanged(value: string) {
          this.$emit('update:value', value);
      }
//只要value变化，就能监听到，然后触发事件
    }
   

    
</script>

<style lang="scss" scoped>
 @import "~@/assets/style/helper.scss";
.formItem {
      font-size: 14px;
      background: #f5f5f5;
      padding-left: 16px;
      display: block;
      padding: 0 16px ;
      display: flex;
      align-items: center;
      .name {
          padding-right: 16px;
      }

      input {
          height: 40px;
          flex-grow: 1;
          background: transparent;
          border: none;
          padding-right: 16px;
      }
  }
</style>