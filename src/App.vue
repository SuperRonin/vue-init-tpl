

<template>
  <img alt="Vue logo" src="./assets/logo.png" />

  <div>X坐标：{{ x }} <br/>Y坐标:{{y}}</div>

  <div class="mt-20px mb-20px">当前网络状态： {{ online }}</div>

  <el-button type="primary">submit</el-button>

  <el-date-picker v-model="dateVal" type="date" placeholder="Pick a day" />
</template>


<script setup>
const { x, y } = useMouse();
const online = useOnline();
const dateVal = ref("");
const str = ref('')
console.log('init');

</script>

<style lang="scss">

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
