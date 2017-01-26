module.exports = {
  servers: {
    one: {
      host: 'healthcarebaja.com',
      username: 'root',
      // pem:
      password: 'poloboy1',
      // or leave blank for authenticate from ssh-agent
      //C:\Users\Saul\AppData\Roaming\npm\mup
    }
  },

  meteor: {
    name: 'healthcarebaja',
    path: '../',
    servers: {
      one: {}
    },
    buildOptions: {
      serverOnly: true,
    },
    env: {
      ROOT_URL: 'https://healthcarebaja.com',
      MONGO_URL: 'mongodb://localhost/meteor',
      //MONGO_URL: 'mongodb://pekub:hypogrifo#2016@ds041556.mlab.com:41556/heroku_cqm1l378',
      PORT:3000,
    },

    dockerImage: 'abernix/meteord:base',
    deployCheckWaitTime: 60
  },

    mongo: { // (optional)
    oplog: true,
    port: 27017,
    servers: {
      one: {},
    },
  },
};
