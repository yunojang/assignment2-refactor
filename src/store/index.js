import { LOCAL_STORAGE } from 'constant/keyName';
import { ListStorage } from 'utils/localStorage';

const uninterestStorage = new ListStorage(LOCAL_STORAGE.UNINTEREST);
const recentShowStorage = new ListStorage(LOCAL_STORAGE.RECENT_SHOW);

export {
  uninterestStorage,
  recentShowStorage,
}