'use strict';

function MagicCreature(type) {
  let creaturesIsSecret = true;
  this.type = function() {
    if ( type == 'wizard' ) {
      console.log('Now You know truth');
      return creaturesIsSecret;
    }
    return false;
    
  };
  
  
}

function Human(human) {
  MagicCreature.call(this, human)
}


const Oleg = new Human('human');