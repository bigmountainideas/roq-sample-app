var roq = require('../index')
;


roq.static(   __dirname + '/app/static');
roq.localize( __dirname + '/app/i18n');


//
roq.run( __dirname);