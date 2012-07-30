var bantu = require('bantu');
var config = require('./config');
var server = bantu.createServer(config.username, config.password, config.port, function(server){
  console.log('Ready to execute commands');  
});
