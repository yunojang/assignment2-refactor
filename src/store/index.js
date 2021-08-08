import { LS_KEYNAME } from 'constant/keyName';
import { ArrayStorage } from 'utils/localStorage';

const uninterestStorage = new ArrayStorage(LS_KEYNAME.UNINTEREST);
const recentShowStorage = new ArrayStorage(LS_KEYNAME.RECENT_SHOW);

export {
  uninterestStorage,
  recentShowStorage
}