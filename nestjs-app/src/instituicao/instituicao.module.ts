import { Module } from '@nestjs/common';
import { InstituicaoService } from './instituicao.service';
import { InstituicaoController } from './instituicao.controller';
import { instituicaoProviders } from './instituicao.provider';
import { DatabaseModule } from 'src/databse/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [InstituicaoController],
  providers: [InstituicaoService, ...instituicaoProviders],
})
export class InstituicaoModule {}
