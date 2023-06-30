# redditthrottler
Our extension aims to reduce the appeal of spending excessive amounts of time on the website reddit.com by intentionally throttling its performance. By slowing down the loading and rendering of the site, we hope to make the user experience less enjoyable and encourage more mindful use of the platform. This extension is not meant to block access to the site, but rather to provide a gentle nudge towards a healthier balance of online and offline activities


# how to generate a new version
install web-ext node application
https://extensionworkshop.com/documentation/develop/getting-started-with-web-ext/
'''npm install --global web-ext'''

from /src run to generate zip from curent files
'''bash
web-ext build --overwrite-dest'''


go to mozilla portal, upload the zip and follow further instructions

https://addons.mozilla.org/en-GB/developers/


# how to generate using NPM
run 
'''npm run build'''


# TODO
CICD
https://extensionworkshop.com/documentation/publish/signing-and-distribution-overview/#distributing-your-addon