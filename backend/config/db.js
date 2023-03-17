const { MongoClient } = require("mongodb");

let dbConnection;

module.exports = {
  connectToDb: (callback) => {
    MongoClient.connect(process.env.MONGO_URI)
      .then((client) => {
        dbConnection = client.db();
        return callback();
      })

      .catch((err) => {
        console.log(err);
        return callback(err);
      });
  },

  getDb: () => dbConnection,
};
