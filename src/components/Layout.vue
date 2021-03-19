<template>
  <div class="layout-wrapper" :class="classPrefix && `${classPrefix}-wrapper`">
    <div class="content" :class="classPrefix && `${classPrefix}-content` ">
      <slot/>
    </div>
    <Nav/>
  </div>
</template>


<script lang="ts">
  export default {
    props: ['classPrefix'],
    name: 'Layout'
  };
</script>

<style lang="scss" scoped>
    .layout-wrapper {
         display: flex;
         flex-direction: column;
          min-height: 100vh;
         }
        .content{
            //border: 1px solid white;
            overflow:auto;
            flex-grow: 1; //定义项目的放大比例 默认为0 1即代表等分剩余空间
        }
</style>