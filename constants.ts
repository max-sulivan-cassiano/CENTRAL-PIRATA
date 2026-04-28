import { LogisticsStop } from './types';

export const COLORS = {
  CYBER_YELLOW: '#F2EB0D',
  NEON_GREEN: '#39FF14',
  ELECTRIC_BLUE: '#00D1FF',
  CRIMSON_RED: '#FF003C',
  JET_BLACK: '#0B0B0B',
  DARK_PANEL: '#1A1A1A',
  LINE_COLOR: '#333333',
};

export const DEFAULT_LOGISTICS: LogisticsStop[] = [
  { id: '1', city: 'Ibirité', type: 'stop', name: 'Base de Operações - Ponto Zero' },
  { id: '2', city: 'São Paulo', type: 'stop', name: 'Parada Logística' },
  { id: '3', city: 'Cascavel', type: 'stop', name: 'Entroncamento Oeste' },
  { id: '4', city: 'Foz do Iguaçu', type: 'hotel', name: 'Carol Palace Hotel' },
  { id: '5', city: 'Ciudad del Este', type: 'border', name: 'Ponte da Amizade' },
];

export const TARGET_EQUIPMENT = [
  'Poco X8 Pro Max (512GB)',
  'MacBook Air M1',
  'Capa Thule Gauntlet',
];

export const INVESTMENT_TARGETS = ['MXRF11'];
