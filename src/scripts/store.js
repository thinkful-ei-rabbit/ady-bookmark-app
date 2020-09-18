'use_strict';
let bookmarks = [];
let addNewBookmark = false;
let rating = 0;
let error = null;

function setError(error) {
   this.error = error;
}

function findById(id) {
   return this.bookmarks.find(currentBookmark => currentBookmark.id === id);
}

function addBookmark(bookmark) {
   let expand = {
      expand: false
   };
   bookmark = {
      ...bookmark,
      ...expand
   }
   this.bookmarks.push(bookmark);
}

function findAndUpdate(id, newData) {
   Object.assign(this.bookmarks.find(bookmark => bookmark.id === id), newData);
}

function findAndDelete(id) {
   this.bookmarks = this.bookmarks.filter(currentBookmark => currentBookmark.id !== id);
}

function toggleAddNewBookmark() {
   this.addNewBookmark = !this.addNewBookmark;
}

export default {
   bookmarks,
   addNewBookmark,
   rating,
   error,
   addBookmark,
   findById,
   findAndUpdate,
   toggleAddNewBookmark,
   findAndDelete,
   setError
}

// Test Store
// export const bookmarks = [
//   { "title": "Instagram", "url": "https://www.instagram.com", "rating": "4", "desc": "Create an account or log in to Instagram - A simple, fun & creative way to capture, edit & share photos, videos & messages with friends & family.", "expanded": false},
//   { "title": "YouTube", "url": "https://www.youtube.com", "rating": "5", "desc": "Enjoy the videos and music you love, upload original content, and share it all with friends, family, and the world on YouTube.", "expanded": false},
//   { "title": "Twitter", "url": "https://www.twitter.com", "rating": "2", "desc": "From breaking news and entertainment to sports and politics, get the full story with all the live commentary.", "expanded": false},
//   { "title": "MySpace", "url": "https://www.myspace.com", "rating": "4", "desc": "Featured Content on Myspace. ... Benjamin Booker. Musician. adimere cometa. Photographer, Designer. Join the Millions of Musicians and Artists on Myspace.", "expanded": false},
//   { "title": "Pinterest", "url": "https://www.pinterest.com", "rating": "5", "desc": "Discover recipes, home ideas, style inspiration and other ideas to try.", "expanded": false},
//   { "title": "Xanga", "url": "https://www.xanga.com", "rating": "5", "desc": "Our biggest effort has been around researching themes systems, so we can upgrade Xangas default theme system to be more flexible and powerful.", "expanded": false},
//   { "title": "Reddit", "url": "https://www.reddit.com", "rating": "5", "desc": "Reddit is a network of communities based on people\'s interests. Find communities you\'re interested in, and become part of an online community!", "expanded": false}
// ];          