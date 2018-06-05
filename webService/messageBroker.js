const redis = require("redis");
const logger = require("./logger");
const config = require("./config");

publishToQueue = function(queueName, queueMsg, done) {
  reidsClient = redis.createClient(config.REDIS.REDIS_URL);

  reidsClient.on("error", function(err) {
    if (err)
      logger.error("Error with Redis ", err);
  });

  let publishData = JSON.stringify(queueMsg);
  reidsClient.lpush(queueName, publishData, done);
}

module.exports = {
  publishToQueue
}