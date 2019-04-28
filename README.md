# study-leaflet-with-nodejs-and-mongodb

## Steps to create this app
- install express generator : `sudo npm install express-generator -g`
- creating project: `express --view=pug leaflet_map`
- add MongoDB dependency: `npm i --save mongodb`
- add Mongoose dependency: `npm i --save mongoose`
- download dependencies: `npm i 
- run `DEBUG=leaflet_map:* npm start` and access `http://localhost:3000`
- `sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 9DA31620334BD75D9DCB49F368818C72E52529D4`
- **echo "deb [ arch=amd64 ] https://repo.mongodb.org/apt/ubuntu bionic/mongodb-org/4`.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.0.list**
- sudo apt-get update
-  sudo apt-get install -y mongodb-org
-  sudo service mongod start

See:
- http://localhost:3000/mapjson/points 
- http://localhost:3000/map

### References:
- http://deneli.us/a-leaflet-map-with-node-js-and-mongodb/
- https://mlab.com/
