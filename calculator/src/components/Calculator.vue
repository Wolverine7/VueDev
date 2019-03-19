<template>
  <div class="calculator">
    <div class="display">{{current || '0'}}</div>
    <div @click="clear" class="btn">C</div>
    <div @click="sign" class="btn">+/-</div>
    <div @click="percent" class="btn">%</div>
    <div @click="divide" class="btn operator">/</div>
    <div @click="append('7')" class="btn">7</div>
    <div @click="append('8')" class="btn">8</div>
    <div @click="append('9')" class="btn">9</div>
    <div @click="multiply" class="btn operator">x</div>
    <div @click="append('4')" class="btn">4</div>
    <div @click="append('5')" class="btn">5</div>
    <div @click="append('6')" class="btn">6</div>
    <div @click="minus" class="btn operator">-</div>
    <div @click="append('1')" class="btn">1</div>
    <div @click="append('2')" class="btn">2</div>
    <div @click="append('3')" class="btn">3</div>
    <div @click="add" class="btn operator">+</div>
    <div @click="append('0')" class="btn zero">0</div>
    <div @click="dot" class="btn">.</div>
    <div @click="equal" class="btn operator">=</div>
  </div>
</template>

<script>
export default{
  data(){
    return {
      current: '',
      operator:null,
      previous:null,
      operatorClicked: false,
    }
  },
  methods:{
    clear(){
      this.current = '';
    },
    sign(){
      this.current = this.current.charAt(0) === '-'?
        this.current.slice(1) : `-${this.current}`;
    },
    percent(){
      this.current = `${parseFloat(this.current)/100}`
    },
    append(number){
      if(this.operatorClicked){
        this.current = '';
        this.operatorClicked = false
      }
      this.current = `${this.current}${number}`;
    },
    dot(){
      if(this.current.indexOf('.') === -1){
        this.append('.');
      }
    },
    divide(){
      this.operator = (a,b) => a/b;
      this.operatorClicked = true;
      this.previous = this.current;
    },
    multiply(){
      this.operator = (a,b) => a*b;
      this.operatorClicked = true;
      this.previous = this.current;
    },
    minus(){
      this.operator = (a,b) => a-b;
      this.operatorClicked = true;
      this.previous = this.current;
    },
    add(){
      this.operator = (a,b) => a+b;
      this.operatorClicked = true;
      this.previous = this.current;
    },
    equal(){
      this.current = `${this.operator(
        parseFloat(this.current),
        parseFloat(this.previous)
      )}`;
    },
  }
}
</script>

<style>

.calculator{
  margin: 0 auto;
  width: 400px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(50px, auto);
}
  .display{
    padding-top: 10px;
    text-align: center;
    font-size: 25px;
    grid-column: 1/5;
    background-color: #333;
    color:white;
  }
  .zero{
    grid-column: 1/3;
    text-align: center;
    background-color: silver;
  }
  .btn{
    padding-top: 10px;
    background-color: #eee;
    border: 1px solid;
    text-align: center;
    cursor: pointer;
  }

  .btn:hover{
    margin: 2px;
  }

  .operator{
    background-color: orange;
    color: white;
    border-color: black;
  }
</style>
