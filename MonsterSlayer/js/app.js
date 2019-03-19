new Vue({
  el: '#app',
  data:{
    playerHealth: 100,
    monsterHealth: 100,
    gameIsRunning: false,
    specialAttackAllowed: true,
    turns:[]
  },
  methods:{
    startGame: function(){
      this.gameIsRunning = true;
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.specialAttackAllowed = true;
    },
    attack: function(){

      this.monsterHealth -= this.calculateDamage(3,10);

        if(this.checkWin()){
          return;
        }

        this.playerHealth -= this.calculateDamage(5,12);

        if(this.playerHealth <= 0){
          alert('You lost!');
          this.gameIsRunning = false;
        }
        this.checkWin();
      },
    specialAttack: function(){
        if(this.specialAttackAllowed){
          this.monsterHealth -= this.calculateDamage(10,20);
          if(this.checkWin()){
            return;
          }
          this.playerHealth -= this.calculateDamage(5,12);
          this.checkWin();
          this.specialAttackAllowed = false;
        }else{
          alert("No more specialAttack");
        }


    },
    heal: function(){

          if(this.playerHealth <= 90){
            this.playerHealth += 10;
          }else{
            this.playerHealth = 100;
          }
    },
    giveUp: function(){
        this.gameIsRunning = false;
    },
    calculateDamage: function(min, max){
      return Math.max(Math.floor(Math.random()*max)+1, min)
    },
    checkWin: function(){
      if(this.monsterHealth <= 0){
        if(confirm('You won! New Game?')){
          this.startGame();
        }else{
          this.gameIsRunning = false;
        }
        return true;
      }else if(this.playerHealth <= 0){
        if(confirm('You lost! New Game?')){
          this.startGame();
        }else{
          this.gameIsRunning = false;
        }
        return true;
      }
      return false;
    },
  }
});
