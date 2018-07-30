import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import rate from './rate';
import lastBlocks from './blocks';
import transactions from './transactions';
import allBlocks from './allBlocks';
import oneBlock from './oneBlock';
import oneTransaction from './oneTransaction';
import blockByHeight from './blockByHeight';

export default combineReducers({
  routing: routerReducer,
  rate,
  lastBlocks,
  transactions,
  allBlocks,
  oneBlock,
  oneTransaction,
  blockByHeight
});