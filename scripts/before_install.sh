#!/bin/bash
cd /home/ec2-user/server
curl -sL https://rpm.nodesource.com/setup_14.x | sudo -E bash - ||  echo "ya existe"
yum -y install nodejs npm ||  echo "ya existe"