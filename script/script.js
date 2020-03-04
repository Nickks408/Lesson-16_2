'use strict';

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