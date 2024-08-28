import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerModule } from 'nestjs-pino'
@Module({
  // imports: [],
  imports: [LoggerModule.forRoot()],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }

