import IORedis from "ioredis";

const PORT = process.env.REDIS_PORT;
const HOST = process.env.REDIS_HOST;
const PASSWORD = process.env.REDIS_PWD;

const redisConfig = {
  port: PORT,
  host: HOST,
  password: PASSWORD,
  lazyConnect: true,
  maxRetriesPerRequest: 0,
};

const redis = new IORedis(redisConfig);

redis
  .info()
  .then(() => {
    console.log("[Database] Redis status: on");
  })
  .catch(({ err }) => {
    throw Error(message);
  });

export default redis;
