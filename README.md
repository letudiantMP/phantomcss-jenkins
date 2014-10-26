casperjs-jenkins
================

WORK IN PROGRESS ! this documentation is not finished and not tested




Full test environment with phantomcss and Jenkins on Vagrant

First of all, you must install Vagrant and Virtual box
After install done, launch the vagrant box with "vagrant up" command
This will install jenkins on a debian box. The Vagrant box will expose jenkins on http://localhost:8099. Go on it and configure jenkins.

add Github Plugin
add Xunit Plugin

Go to admin Jenkins
Go to Configure system
Choose "add git" and check git installation
Save

Go back home and click "add a new item". 

Choose a name for your item and the type "build a free-style project"
Choose your VCS and add security parameter if your repository is not public.
Choose the branch where the build will be done.

Choose execution frequency (like on a cron tab)

Add a step to the build : execute shell script
Add the script

npm install
export PATH=${PATH}:`pwd`/node_modules/phantomjs/bin/:`pwd`/node_modules/casperjs/bin/
casperjs test tests/testsuite-etu.js --xunit=$WORKSPACE/xunit.xml


Add a behavior after build and choose publish xunit test result.
Specify a filter to find xunit.xml



