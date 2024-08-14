import { Instituicao } from './entities/instituicao.entity';

export const instituicaoProviders = [
  {
    provide: 'INSTITUICAO_REPOSITORY',
    useValue: Instituicao,
  },
];
