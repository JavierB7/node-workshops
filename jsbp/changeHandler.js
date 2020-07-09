module.exports = {
	getAmount: function(coinType) {
    // COINS:
    // [p]enny
    // [n]ickel
    // [d]ime
    // [q]uarter

    var money = {
    	'p': 1,
    	'n': 5,
    	'd': 10,
    	'q': 25
    }
    if(money[coinType]){
    	return money[coinType];    	
    }else{
    	throw new Error('Unrecognized coin ' + coinType);
    }
  }
};