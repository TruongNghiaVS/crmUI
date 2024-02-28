var request = require('request')
var CronJob = require('cron').CronJob;



var request = require('request')
var CronJob = require('cron').CronJob;
new CronJob('*/3 * * * *', function() {
    console.log('You will see this message four minute');

    request('http://192.168.1.3:7676/api/job/CalculatingTalktime', function(error, response, body) {
		
		
        if (!error && response.statusCode == 200) {
            console.log('im ok')
            // console.log(body) // Show the HTML for the Google homepage.
        }
		else console.log(error);
    })
}, null, true, "America/Los_Angeles");


