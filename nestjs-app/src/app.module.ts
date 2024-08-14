import { Module } from '@nestjs/common';

import { InstituicaoModule } from './instituicao/instituicao.module';

@Module({
  imports: [InstituicaoModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

