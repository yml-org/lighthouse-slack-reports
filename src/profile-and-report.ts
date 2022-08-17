const config = require('../lighthouserc');
const {exec}= require('child_process');
const axios = require('axios');

function execute(command, callback) {
    exec(command, function(error, stdout, stderr) { callback(stdout); });
};

if (config?.urlsToProfile?.length>0){
    config.urlsToProfile.map(url => {
        execute(`lighthouse ${url} --output=json --quiet --chrome-flags="--headless"`, function(output){
            const LHOutput = JSON.parse(output),
                perf = LHOutput?.categories?.performance?.score * 100,
                accessibility = LHOutput?.categories?.accessibility?.score * 100,
                bestPractices = LHOutput?.categories['best-practices'].score * 100,
                seo = LHOutput?.categories?.seo?.score * 100,
                formattedString = `URL: ${url}, perf: ${perf}, accessibility: ${accessibility}, bestPractices: ${bestPractices}, seo: ${seo}`;
            const payload = {
                attachments: [{text: formattedString, color: 'green'}]
              };
              console.log(formattedString);
              axios.post(config.slackWebhookUrl,  JSON.stringify({
                    token: config.slackSigningSecret,
                    text: ':wave:' + formattedString,
                  }), { headers: { authorization: `Bearer ${config.slackSigningSecret}` }}).catch((reason) => {
                    console.log(reason);
                });
            
        })
    });
}