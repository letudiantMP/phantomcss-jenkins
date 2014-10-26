#!/usr/bin/env bash

if [ ! -f /etc/apt/sources.list.d/jenkins.list ]
then
  echo "Mise a jour des sources lists avec http://pkg.jenkins-ci.org/debian"
  wget -q -O - https://jenkins-ci.org/debian/jenkins-ci.org.key | sudo apt-key add -
  sudo sh -c 'echo deb http://pkg.jenkins-ci.org/debian binary/ > /etc/apt/sources.list.d/jenkins.list'
fi

sudo apt-get update
sudo apt-get install -y jenkins
sudo apt-get install -y build-essential python
sudo apt-get install -y git
sudo apt-get install -y libfontconfig1
cd
wget http://nodejs.org/dist/v0.10.32/node-v0.10.32.tar.gz
tar xfz node-v0.10.22.tar.gz
cd node-v0.10.22
./configure
make
sudo make install

rm -rf /var/www
ln -fs /vagrant /var/www
