<template>
  <div class="calc">
    <!-- <p>表达式</p> -->
    <div class="res">
      <!-- <p>表达式1</p> -->
      <input v-model="expression" placeholder="表达式" />
    </div>
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
let falg = false
let temp = 0
let calcData = ''
function handleBtn(num: number | string) {
  if (num === '=') {
    res.value = ''
    res.value += calc(expression.value)
    //
    return
  }
  // console.log(num)
  const opt = ['+', '-', '*', '/']

  if (typeof num == 'string') {
    calcData += temp
    calcData += num
    console.log(calcData, '22')

    if (opt.includes(num)) {
      if (falg) {
        falg = false
        expression.value += num
      }
    } else {
      expression.value += num
    }
  } else {
    temp = temp * 10 + num
    // console.log(temp)

    expression.value += num
    falg = true
  }
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
    // width: 260px;
    height: 25px;
    border: 2px solid #c4c7ce;
    border-radius: 10px;
    display: flex;

    &:hover {
      border-color: #00ff00;
    }
    p {
      width: 60px;
    }
    input {
      background-color: transparent;
      width: 200px;
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
