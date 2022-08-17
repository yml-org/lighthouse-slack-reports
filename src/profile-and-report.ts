const config = require('../lighthouserc.');
const {exec}= require('child_process');

function execute(command, callback) {
    exec(command, function(error, stdout, stderr) { callback(stdout); });
};

if (config?.urlsToProfile?.length>0){
    config.urlsToProfile.map(url => {
        execute(`lighthouse ${url} --output json --quiet`)
    });
}