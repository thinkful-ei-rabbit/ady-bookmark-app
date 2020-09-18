import './index.css';
import $ from 'jquery';
import api from './scripts/api';
import store from './scripts/store';
import bookmarks from './scripts/bookmarks';

const main = function () {
  api.getBookmarks()
    .then((bookmarksArr) => {
      bookmarksArr.forEach((bookmark) => store.addBookmark(bookmark));
      bookmarks.render();
    });
  bookmarks.eventListeners();
  bookmarks.render();
};
 
$(main);