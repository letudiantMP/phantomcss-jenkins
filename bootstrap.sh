#!/usr/bin/env bash

if [ ! -f /etc/apt/sources.list.d/jenkins.list ]
then
  echo "Mise a jour des sources lists avec http://pkg.jenkins-ci.org/debian"
  wget -q -O - https://jenkins-ci.org/debian/jenkins-ci.org.key | sudo apt-key add -
  sudo sh -c 'echo deb http://pkg.jenkins-ci.org/debian binary/ > /etc/apt/sources.list.d/jenkins.list'
fi

apt-get update
sudo apt-get install -y jenkins
sudo apt-get install -y nodejs
npm install phantomcss

rm -rf /var/www
ln -fs /vagrant /var/www
