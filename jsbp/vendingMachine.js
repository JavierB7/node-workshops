
var balanceManager = require('./balanceManager');
var changeHandler = require('./changeHandler');
var productInventory = require('./productInventory');

var balance = 0;

var products = [
  {
    name: 'Skittles',
    price: 85,
    id: 'A1'
  }
];

module.exports = {
  
  
  insertCoin: function(coinType){
    var value = changeHandler.getAmount(coinType);
    balanceManager.increaseBalance(value);
  },
  isValidAmount: function(amount){
    if(amount === null){
      return false;
    } else {
      return true;
    }
  },
  vendProduct: function(productId){
    var product = productInventory.getProduct(productId);
    this.decreaseBalance(product.price);
    return product;
  },
  releaseChange: function(){
    var currentBalance = balanceManager.getBalance();
    balanceManager.decreaseBalance(currentBalance);
    return this.convertToChange(currentBalance);
  }
};
