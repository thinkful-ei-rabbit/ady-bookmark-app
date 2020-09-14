import $ from 'jquery';
import {generateCollapsedView, generateHomePage, generateNewBookmarkPage, generateExpandedView} from './templates';
import './style.css';
import {bookmarks} from './store';

// This function conditionally replaces the contents of the <main> tag

function main() {
  renderList();
}

function renderList() {
  $('#root').html(generateHomePage());
  handleNewBookmark();
  console.log('`renderList` ran');
  const bookmarkListItems = handleMap(bookmarks);
  const bookmarkExpandedListItems = handleMapExpand(bookmarks);
  //console.log(bookmarkListItems);
  $('.bookmarkItems').html(bookmarkListItems);
  $('.expndView').html(bookmarkExpandedListItems);
}

function handleNewBookmark() {
  $('.addNewBtn').on('click', (e) => {
    e.preventDefault;
    $('#root').html(generateNewBookmarkPage());
    handleCreateNewBookmark();
  });
}

function cancelNewBookmark() {
  $('#root').on('click', '.cnclBtn', (e) => {
    e.preventDefault;
    renderList();
    handleNewBookmark();
  });
}

function handleCreateNewBookmark() {
  $('.createBookmark').on('click', (e) => {
    e.preventDefault;
    const newBookmark = {
      id: bookmarks.length,
      title: $('#bookmarkTtl').val(),
      link: $('#bookmarkurl').val(),
      rating: $('input:checked').val(),
      description: $('#bookmarkDesc').val(),
    }
    console.log(newBookmark);
    bookmarks.push(newBookmark);
    renderList();
  });
}

function handleMap(bookmarkList) {
  console.log('Generating Bookmarks');
  const bookmarkItems = bookmarkList.map((item) => 
    generateCollapsedView(item));

  return bookmarkItems.join("");
}

function handleMapExpand(bookmarkList) {
  console.log('Generating Expanded Bookmarks');
  const bookmarkExpandItems = bookmarkList.map((item) => 
    generateExpandedView(item));

  return bookmarkExpandItems.join("");
}

/********** EVENT HANDLER FUNCTIONS **********/

function eventHandle() {
  main();
  cancelNewBookmark();
}

$(eventHandle);