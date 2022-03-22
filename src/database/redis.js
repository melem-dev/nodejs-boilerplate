import IORedis from "ioredis";

const main = async () => {
  let redis;

  try {
    const PORT = process.env.REDIS_PORT;
    const HOST = process.env.REDIS_HOST;
    const PASSWORD = process.env.REDIS_PWD;

    if (!PORT) {
      throw Error("Redis PORT is required");
    }

    if (!HOST) {
      throw Error("Redis HOST is required");
    }

    if (!PASSWORD) {
      throw Error("Redis PWD is required");
    }

    const redisConfig = {
      port: PORT,
      host: HOST,
      password: PASSWORD,
      lazyConnect: true,
      maxRetriesPerRequest: 0,
    };

    redis = new IORedis(redisConfig);

    redis.on("error", (err) => {
      redis.disconnect();
      throw Error(err);
    });

    redis.on("connect", () => {
      console.log("[Database Redis] status: on");
    });

    await redis.info();

    return redis;
  } catch (error) {
    console.log("[Database Redis] error: " + error.message);
    throw error;
  }
};

export default main;
