<template>
    <div class="numberPad">
               <div class="output">{{output}}</div>
               <div class="buttons" >
                    <button @click="inputContent">1</button>
                    <button @click="inputContent">2</button>
                    <button @click="inputContent">3</button>
                    <button @click="remove">删除</button>
                    <button @click="inputContent">4</button>
                    <button @click="inputContent">5</button>
                    <button @click="inputContent">6</button>
                    <button @click="clear">清空</button>
                    <button @click="inputContent">7</button>
                    <button @click="inputContent">8</button>
                    <button @click="inputContent">9</button>
                    <button class="ok" @click="ok">ok</button>
                    <button @click="inputContent" class="zero">0</button>
                    <button @click="inputContent">.</button>
               </div>        
           </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';
@Component
export default class NumberPad extends Vue {
    @Prop(Number) readonly value!: number
    output = this.value.toString(); //uotput的初始值是最开始给的value


    inputContent(event: MouseEvent){
        const button = (event.target as HTMLButtonElement)
        const input = button.textContent as string;
        if (this.output.length === 16) {return;}
        if(this.output === '0'){
            if(input === '0'){
                return;
            }else if('123456789'.indexOf(input)>=0){
                this.output = input;
                return;
            }else {
                this.output += input;
                return;
            }
        }
        if(this.output.indexOf('.')>=0){
            if(input === '.') {return;}
        }
        this.output += input;
        }

        remove() {
            if(this.output.length === 1){
                this.output = '0';
            }else {
                this.output = this.output.slice(0,-1);
            } 
        }

        clear() {
            this.output = "0";
        }

        ok() {
            const number = parseFloat(this.output)
            this.$emit('update:value',number);
            this.$emit('submit', number)
            this.output = '0';
        }
    }
</script>


<style lang="scss" scoped>
 @import "~@/assets/style/helper.scss";
   .numberPad{
      .output{
          @extend %x; 
          font-size: 46px;
          font-family: Consolas,monospace;
          padding: 9px 16px;
          text-align: right;
        //   box-shadow: inset  0 -5px 5px -5px fade_out(black,0),
        //               inset  0 5px 5px -5px fade_out(black,0),
          height: 72px;
                    
      }
      .buttons{
          @extend %x; 
        //相当于把这个buttons选择器每次复制到App.vue，x就代表选择器
          > button {
              width: 25%;
              height: 64px;
              float: left;
              background: transparent;
              border:none;
              &.ok {
                  height: 64*2px;
                  float: right;
              }
              &.zero {
                  width: 25*2%;
              }
              $bg: #f2f2f2;
              &:nth-child(1){
                  background: $bg;
              }
              &:nth-child(2), &:nth-child(5) {
                  background: darken($bg, 4%); 
              }

              &:nth-child(3),&:nth-child(6),&:nth-child(9){
                  background: darken($bg, 4*2%);
              }
              &:nth-child(4),&:nth-child(7),&:nth-child(10){
                  background: darken($bg, 4*3%);
              }
              &:nth-child(8),&:nth-child(11),&:nth-child(13){
                  background: darken($bg, 4*4%);
              }       
              &:nth-child(14){
                  background: darken($bg, 4*5%);
              }
              &:nth-child(12){
                  background: darken($bg, 4*6%);
              }
      }
  }}
</style>