<template>
  <div>
    <ul class="types">
      <li :class="value === '-' && 'selected'"
          @click="selectType('-')">支出
      </li>
      <li :class="value === '+' && 'selected'"
          @click="selectType('+')">收入
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {Component,Prop, Watch} from 'vue-property-decorator';

//typescripte的好处
//1.自动提示更智能
//2.你不能随便写
//3.如果编译报错，就无法变成js，这样就更加严谨。

       // @Prop(Number) xxx: number | undefined; //propA可以是number也可以是undefined
        //prop 告诉 Vue.xxx不是data是prop
        //Number 告诉 Vue.xxx是个Number
        //xxx属性名
        //number | undefined就是xxx的类型
        //后半部分是编译时类型，前半部分是运行时类型
  @Component
  export default class Types extends Vue {
    @Prop() readonly value!: string;
    selectType(type: string) {
      if (type !== '-' && type !== '+') {
        throw new Error('type is unknown');
      }
      this.$emit('update:value', type);
    }
  }
</script>

<style lang="scss" scoped>
  .types {
    background: #c4c4c4;
    display: flex;
    text-align: center;
    font-size: 24px;
    > li {
      width: 50%;
      height: 64px;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      &.selected::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 4px;
        background: #333;
      }
    }
  }
</style>