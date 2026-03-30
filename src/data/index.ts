import type { ShopId, ShopDefinition } from '../types';
import { tesco } from './tesco';
import { sainsburys } from './sainsburys';
import { morrisons } from './morrisons';
import { boots } from './boots';
import { coop } from './coop';
import { marks_spencer } from './marks_spencer';
import { greggs } from './greggs';

export const shops: ShopDefinition[] = [tesco, sainsburys, morrisons, boots, coop, marks_spencer, greggs];

export const shopById: Record<ShopId, ShopDefinition> = {
  tesco,
  sainsburys,
  morrisons,
  boots,
  coop,
  marks_spencer,
  greggs,
};
