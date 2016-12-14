module.exports = {
  servers: {
    one: {
      username: 'root',
      // pem:
      password: 'poloboy1',
      // or leave blank for authenticate from ssh-agent
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
      PORT:3000,
    },

    //dockerImage: 'kadirahq/meteord'
    deployCheckWaitTime: 60
  },

  mongo: {
    oplog: true,
    port: 27017,
    servers: {
      one: {},
    },
  },
};
