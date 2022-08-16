# FairyMeasure


## Tech Stack
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)

![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)

![AWS](https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white) 
![Nginx](https://img.shields.io/badge/nginx-%23009639.svg?style=for-the-badge&logo=nginx&logoColor=white)

![Vim](https://img.shields.io/badge/VIM-%2311AB00.svg?style=for-the-badge&logo=vim&logoColor=white) 
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white) 
![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white) 
![Visual Studio Code](https://img.shields.io/badge/Visual_Studio_Code-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white)
![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=Postman&logoColor=white)
![Babel](https://img.shields.io/badge/Babel-F9DC3e?style=for-the-badge&logo=babel&logoColor=black) 


## Overview
Created a scalable questions and answers microservice to an e-commerce website with low latency serving millions of rows of data.

## Accomplishments
- Optimized a highly scalable microservie to handle 5k requests per second using just four AWS EC2 micro's.
- PostgreSQL Insert, Remove, and Update queries optimized to under 3ms over 10 million rows of data.
- Ensured low latency (62ms) and 0.00% error rate for fast reliable consumption
- Utilized stress testing and monitoring tools such as K6, Loader.IO, and New Relic to pinpoint bottlenecks on a local machine and remote AWS Micro EC2 instance.
- Implemented Nginx to provide caching and load balancing using the least connection load methodology
- Attempted to vertically scale by creating clusters and worker thread techniques

## Installation
```
$ git https://github.com/OmnitrixSDC/AlienX-Q-A.git
$ cd AlienX-Q-A
$ npm install
$ npm run client-dev
$ npm run server-dev
