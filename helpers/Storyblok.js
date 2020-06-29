// Storyblok Module uses storyblok-js-client
// https://github.com/storyblok/storyblok-js-client

/**
 * Reacts (updates and reloads) on changes within the editing UI
 * @param {*} component
 * @param {*} story
 */
export const reactToEdits = function(storybridge, store, router) {
  storybridge.on(["input", "published", "change"], event => {
    if (event.action == "input") {
      store.commit("UPDATE_STORY", event.story);            
    } else {
      router.go({
        path: router.currentRoute,
        force: true
      });
    }
  });
  console.log("STORYBRIDGE UP")
};

export const resizeImage =  (image, sizeOptions) => {
  if (typeof image === "undefined") {
    return null;
  }  
  return '//img2.storyblok.com/' + sizeOptions + image.replace('//a.storyblok.com', '')
}

/**
 * https://stackoverflow.com/a/40732240/59532
 * @param {*} links
 */
const buildLinkTree = dataset => {
  let hashTable = Object.create(null);
  dataset.forEach(
    aData => (hashTable[aData.id] = { ...aData, childNodes: [] })
  );
  let dataTree = [];
  dataset.forEach(aData => {
    if (aData.parent_id)
      hashTable[aData.parent_id].childNodes.push(hashTable[aData.id]);
    else dataTree.push(hashTable[aData.id]);
  });
  return dataTree;
};
