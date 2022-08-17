# lighthouse-slack-reports
Runs lighthouse on a URL(s), and sends the report to a slack channel

# Setup
##Install dependencies
`npm install`
##Slack signing secret
Open your slack app configuration page(api.slack.com) in your browser. In the `App Credentials` section, copy the `Client Secret`:
![image](https://user-images.githubusercontent.com/650317/185105192-c5cf422a-ac8a-422c-927a-fb1bd2541022.png)

and add it to your `lighthouserc.ts` file:

`
{
  ...
  slackSigningSecret: 'xxxxxxxxxxxxxxxxxxxxxxxx'
  ...
}
`
##Webhook
In the slack app configuration page, go to `Incoming Webhooks` and copy the `Webhook URL`:
![image](https://user-images.githubusercontent.com/650317/185106519-f5d6238b-46be-473a-9251-67e4f7dc4cad.png)

and add it to your `lighthouserc.ts` file:
`
{
  ...
  slackWebhookUrl: 'xxxxxxxxxxxxxxxxxxxxxxxxx'
  ...
}
`

##URLs
The `urlsToProfile` key in your `lighthouserc.ts` file is an array of strings. Each URL should point to the URL's you want to profile:

`
{
  ...
  urlsToProfile: [
		'https://google.com',
    'https://microsoft.com'
	]
  ...
`
