'use strict';
/*function Hero(name, level) {
  this.name = name;
  this.level = level;
  }

let hero1 = new Hero('Bjorn', 1);
  console.log (hero1);


// Add greet method to the Hero prototype
Hero.prototype.greet = function () {
  return `${this.name} says hello.`;
  }
  console.log (hero1.greet());


function First(name) {
  this.name = name;
  }

let hero1 = new First('Привет, я метод родителя!');


  console.log (hero1);

  First.prototype.second = function () {
    return `${this.name} А я наследуемый!`;
    };
    console.log (hero1.second());*/





   

    class First {
    
      constructor(name) {
        this.name = name;
      }
    
      hello() {
        console.log('Привет, я метод родителя!');
      }
  
    }
    

    class Second extends First {
      hello2() {
        console.log('А я наследуемый!');
      }
    }
    



    let user = new Second (" ");
    user.hello(); 
    user.hello2();