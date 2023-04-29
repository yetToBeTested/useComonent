<template>
  <div class="calc">
    <div class="res"><input v-model="expression" placeholder="表达式" /></div>
    <div class="res"><input v-model="res" placeholder="计算结果" /></div>
    <div class="btn">
      <button></button>
      <button></button>
      <button></button>
      <button @click="handleBtnClera">清除</button>
    </div>
    <div class="btn">
      <button @click="handleBtn('(')">(</button>
      <button @click="handleBtn(')')">)</button>
      <button>n!</button>
      <button @click="handleBtn('/')">/</button>
    </div>
    <div class="btn">
      <button @click="handleBtn(1)">1</button>
      <button @click="handleBtn(2)">2</button>
      <button @click="handleBtn(3)">3</button>
      <button @click="handleBtn('*')">x</button>
    </div>
    <div class="btn">
      <button @click="handleBtn(4)">4</button>
      <button @click="handleBtn(5)">5</button>
      <button @click="handleBtn(6)">6</button>
      <button @click="handleBtn('-')">-</button>
    </div>
    <div class="btn">
      <button @click="handleBtn(7)">7</button>
      <button @click="handleBtn(8)">8</button>
      <button @click="handleBtn(9)">9</button>
      <button @click="handleBtn('+')">+</button>
    </div>
    <div class="btn">
      <button @click="handleBtn('')">+/-</button>
      <button @click="handleBtn(0)">0</button>
      <button @click="handleBtn('.')">.</button>
      <button @click="handleBtn('=')">=</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { calc } from './calc'

const expression = ref<any>('')
const res = ref<string>('')
function handleBtn(num: number | string) {
  if (num === '=') {
    res.value += calc(expression.value)
    console.log(res.value, 99998)
    return
  }
  console.log(num)
  expression.value += num
}
// "8 + ( 6 - 5 ) * 3 - 9 / 2";
function handleBtnClera() {
  expression.value = ''
  res.value = ''
}
</script>

<style scoped lang="less">
.calc {
  width: 350px;
  height: 420px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  background-color: antiquewhite;
  margin-top: -40px;
  .res {
    margin-top: 20px;
    width: 200px;
    height: 25px;
    border: 2px solid #c4c7ce;
    border-radius: 10px;
    &:hover {
      border: 2px solid #00ff00;
    }

    input {
      background-color: transparent;
      border: 0;
      outline: 0;
    }
  }

  .btn {
    height: 50px;

    display: flex;
    flex-wrap: wrap;
    align-items: center;
    button {
      height: 30px;
      width: 50px;
    }
    button + button {
      margin-left: 3px;
    }
  }
}
</style>
