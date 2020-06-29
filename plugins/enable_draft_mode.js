import {isEditMode} from './../helpers/helper'

import { reactToEdits } from "@/helpers/Storyblok";

export default function({ app, store , route: {query}, enablePreview, $storybridge}) {
  // check if in draft mode using query string storyblok token
  if (isEditMode(app, query)) {    
    if (process.client) {
      reactToEdits($storybridge, store, app.router);
    }
    // enable preview if exists https://nuxtjs.org/blog/going-full-static/
    enablePreview && enablePreview(); 
    store.commit("SET_DRAFT_MODE", true);
    return store.dispatch("fetchStoryBySlug", query._storyblok)
  }
}
