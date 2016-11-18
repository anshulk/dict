var c = require('chalk');
var wrap = require('wordwrap')(10, 80);
var _ = require('lodash');

var log = console.log;

String.prototype.capitalize = function() {
	    return this.charAt(0).toUpperCase() + this.slice(1);
}


module.exports = {
  
	def : function(word,data){
    log('');
		log(c.green.bold(word.capitalize()) + " - definitions");
    log('');
		for( var i in data){
			log((c.blue(parseInt(i)+1) + '. ')+ c.italic.red(data[i].partOfSpeech));
      log(wrap(data[i].text));
        //.replace(/(.{80})/g,"$&" + "\n"));
    }
    log('');
  },

	syn : function (word,data) {
    // log(data);
		log('');
    log(c.green.bold(word.capitalize()) + " - synonyms");
    log('');

    var fltr = _.filter(data, { relationshipType : 'synonym'});
    // log(fltr);
    if(fltr && fltr.length){
      log(fltr[0].words.join(", "));
    } else {
      log(c.red("No synonyms found!!!"));
    }

    log('');
	},

  ant : function (word,data) {
    // log(data);
    log('');
    log(c.green.bold(word.capitalize()) + " - antonyms");
    log('');

    var fltr = _.filter(data, { relationshipType : 'antonym'});
    // log(fltr);
    if(fltr && fltr.length){
      log(fltr[0].words.join(", "));
    } else {
      log(c.red("No antonyms found!!!"));
    }

    log('');
  },

  ex : function (word, data) {
    data = data.examples;
    // log(word, data);
    log('');
    log(c.green.bold(word.capitalize()) + " - examples");
    log('');

    for( var i in data){
      log((c.blue(parseInt(i)+1) + '. ')+ c.italic.red(data[i].title));
      log(wrap(data[i].text));
      //.replace(/(.{80})/g,"$&" + "\n"));
    }
    log('');
  }

}
