var request = require('request')
var CronJob = require('cron').CronJob;



var request = require('request')
var CronJob = require('cron').CronJob;
new CronJob('*/3 * * * *', function() {


    request('http://192.168.1.3:7777/api/job/CalculatingTalktime', function(error, response, body) {
		
		
        if (!error && response.statusCode == 200) {
          
       
        }
		else 
    })
}, null, true, "America/Los_Angeles");


