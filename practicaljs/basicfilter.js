function getShortMessages(messages) {
      const map1 = messages.map(function(item){
          return item.message;
      });
      return map1.filter(item => item.length < 50);
 }

module.exports = getShortMessages