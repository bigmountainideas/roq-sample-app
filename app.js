var roq = require('../index')
;


roq.static(   __dirname + '/app/static');
roq.localize( __dirname + '/app/i18n');


//
if( process.env.NODE_ENV=='test'){
  module.exports = roq.run( __dirname);
}else {
  roq.run( __dirname);
}