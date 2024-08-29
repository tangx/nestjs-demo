import { ClusterModule, RedisModule } from "@liaoliaots/nestjs-redis"

const redisConfig = {
  config: {
    host: '192.168.1.101',
    port: 6379,
    password: 'Redis12345'
  }
}

const redisClusterConfig = {
  config: {
    nodes: [{ host: 'localhost', port: 16380 }],
    redisOptions: { password: 'authpassword' }
  }
}


export function RedisConnect(mode: string) {

  if (mode === 'cluster') {
    return ClusterModule.forRoot(redisClusterConfig)
  }

  return RedisModule.forRoot(redisConfig)

}