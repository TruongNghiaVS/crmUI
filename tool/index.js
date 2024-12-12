var request = require('request')
var CronJob = require('cron').CronJob;



var request = require('request')
var CronJob = require('cron').CronJob;
new CronJob('*/3 * * * *', function() {


    request('http://42.115.94.180:7777/api/job/CalculatingTalktime', function(error, response, body) {
		
		
        if (!error && response.statusCode == 200) {
          
       
        }
		else 
    })
}, null, true, "America/Los_Angeles");


