import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { MongooseModule } from '@nestjs/mongoose';

import { EventStoreModule } from './core/eventstore/eventstore.module';

@Module({
  imports: [
    EventStoreModule.forRoot(),
    MongooseModule.forRoot('mongodb://localhost/iam'),
    CqrsModule,
  ],
})
export class AppModule {}
