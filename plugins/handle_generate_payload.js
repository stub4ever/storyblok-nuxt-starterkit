import { storeMutations } from '@/store/index';
/**
 *  Site Generation Payload handling
 * @param {*} context
 */
export default ({ store, payload }) => {
  if (!payload) {
    return;
  }
  if (payload.stories) {
    console.log('Setting stories', payload.stories.length);
    for (const s of payload.stories) {
      store.commit(storeMutations.ADD_STORY, s);
    }
  }
};
