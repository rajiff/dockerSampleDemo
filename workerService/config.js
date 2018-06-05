let config = {
  REDIS: {
    // URL format: [redis[s]:]//[[user][:password@]][host][:port][/db-number][?db=db-number[&password=bar[&option=value]]]
    REDIS_URL: (process.env.REDIS_URL || 'redis://localhost:6379/')
  },
  EVENT_QUEUE: {
    NEW_EMP_REGISTERED: "NEW_EMP_REGISTERED"
  }
}

module.exports = config;