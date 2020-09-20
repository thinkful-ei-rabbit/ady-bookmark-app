import './src/index.css';
import $ from 'jquery';
import api from './src/scripts/api';
import store from './src/scripts/store';
import bookmarks from './src/scripts/bookmarks';

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