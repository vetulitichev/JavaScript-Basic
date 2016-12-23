const SERVICES = (function Service() {

  let hashTable = {};
  let bank = {};

  return {
    storage() {
      return [SKLAD_1.slice(), SKLAD_2.slice()]
    },
    permissions() {
      if (hashTable[this.name]) {
        return true;
      }
      return false;
    },
    get hashTable() {
      return hashTable
    },
    set hashTable(name) {
      hashTable[name] = true;
    },
    addPermisions(name) {
      SERVICES.hashTable = name;
    },

    request() {
      if (this.bank > 0) {
        this.bank -= 1;
        // this.addPermisions(this.name);  HELLO FROM OOP :-)
        SERVICES.addPermisions(this.name);
      } else {
        console.log('You don\'t have enough money');
      }
    },

    test() {
      console.log(SERVICES);
      console.log(this);
    }
  }

})();
