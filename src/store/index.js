import { LS_KEYNAME } from 'constant/keyName';
import { ListStorage } from 'utils/localStorage';

const uninterestStorage = new ListStorage(LS_KEYNAME.UNINTEREST);
const recentShowStorage = new ListStorage(LS_KEYNAME.RECENT_SHOW);

export {
  uninterestStorage,
  recentShowStorage
}