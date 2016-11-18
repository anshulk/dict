var request = require('request');
var config = require('../config/config');

module.exports = {
  getData : function( word, type, cb){

    var url = config.base_url;

    if(['word', 'random'].indexOf(type) == -1)
      url = url + word + '/';

    url = url + config.endpoints[type];

    var qs = config.params[type];
    qs.api_key = config.api_key;

    var req = {
      url: url,
      qs: qs
    };

    // console.log(req);

    request(
      req,
      function(err, response, body) {
        cb(err, body);
      }
    );
  }
}
