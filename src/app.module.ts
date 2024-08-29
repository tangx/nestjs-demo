import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerModule } from 'nestjs-pino'

// import { redisClusterConfig, redisConfig } from './redis.config';
import { ClusterModule, RedisModule } from '@liaoliaots/nestjs-redis';
import { RedisConnect } from './redis.config';

@Module({
  // imports: [],
  imports: [
    // LoggerModule.forRoot(),
    // RedisModule.forRoot(redisConfig),
    // ClusterModule.forRoot(redisClusterConfig),
    RedisConnect('simple')
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }

