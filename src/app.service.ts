import { Injectable } from '@nestjs/common';
import { InjectRedis, DEFAULT_REDIS_NAMESPACE } from '@liaoliaots/nestjs-redis';
import Redis from 'ioredis';

@Injectable()
export class AppService {
  constructor(
    @InjectRedis() private readonly redis: Redis
  ) { }


  async getHello(): Promise<string> {

    // this.redis.set('key', 'valueAAAa123', 'EX', 199990);

    // return 'Hello World!';
    const val = await this.redis.get('key');
    return val

  }
}
