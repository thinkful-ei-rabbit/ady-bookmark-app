import $ from 'jquery';
import store from './store.js';
import api from './api';

// ---------- generate functions ---------- //

const generateHomePageHTML = () => {
  return `
    <section class="container">
        <h1>BOOKMARKn</h1>
        <div class="error-container shadow"></div>
        <div class="even-flex js-add-bookmark-button ">
          <button class='js-add-bookmark shadow'></button>
          <select class='js-filter-rating shadow'>
            <option value="0">Filter</option>
            <option value="1">1+ &barvee;</option>
            <option value="2">2+ &barvee;</option>
            <option value="3">3+ &barvee;</option>
            <option value="4">4+ &barvee;</option>
            <option value="5">5 &barvee;</option>
          </select>
        </div>
        <div id="js-add-new-bookmark" class="js-add-new-bookmark"></div>
    </section>
    <section class="container">
        <ul id="js-bookmark-list" class="bookmark-list"></ul>
    </section>
    `;
};

const generateFormHTML = () => {
  return `
    <form id="js-add-new-bookmark-form" class="js-add-new-bookmark-form">
        <span class="even-flex flex-direction">
            <fieldset class="flex-desktop">
                <input type="text" id="bookName" name="title" class="js-bookmark-title-entry" placeholder="title" required />
                <label for='bookName'></label>
            </fieldset>
        </span>
        <span>
            <fieldset>
                <textarea name="desc" id="addDescr" class="js-bookmark-desc-entry textarea-newadd" maxlength="300" placeholder="description" required ></textarea>
                <label for='addDescr'></label>
            </fieldset>
        </span>
        <span>
            <fieldset class="flex-desktop">
                <input type="text" id="siteURL" name="url" class="js-bookmark-url-entry" placeholder="url" required />
                <label for='siteUrl'></label>
            </fieldset>
        </span>
        <span class="flex-between">
            <div class="rating left-side barvee-size" aria-label="choose your rating">
                <label>
                    <input type="radio" id='rating' name="rating" class="js-bookmark-rating-entry" value="1" required/>
                    <span class="icon">&barvee;</span>
                </label>
                <label>
                    <input type="radio" id='rating' name="rating" class="js-bookmark-rating-entry" value="2" />
                    <span class="icon">&barvee;</span>
                    <span class="icon">&barvee;</span>
                </label>
                <label>
                    <input type="radio" id='rating' name="rating" class="js-bookmark-rating-entry" value="3" />
                    <span class="icon">&barvee;</span>
                    <span class="icon">&barvee;</span>
                    <span class="icon">&barvee;</span>   
                </label>
                <label>
                    <input type="radio" id='rating' name="rating" class="js-bookmark-rating-entry" value="4" />
                    <span class="icon">&barvee;</span>
                    <span class="icon">&barvee;</span>
                    <span class="icon">&barvee;</span>
                    <span class="icon">&barvee;</span>
                </label>
                <label>
                    <input type="radio" id='rating' name="rating" class="js-bookmark-rating-entry" value="5" />
                    <span class="icon">&barvee;</span>
                    <span class="icon">&barvee;</span>
                    <span class="icon">&barvee;</span>
                    <span class="icon">&barvee;</span>
                    <span class="icon">&barvee;</span>
                </label>
            </div>
        <div>
            <button class="right-side add-button" type= "submit"> + </button>
        </div>
      </span>
    </form>`;
};

const generateBookmarkItem = (bookmark, bookmarkIcon) => {
  return `
      <li class="js-bookmark-item shadow" data-item-id="${bookmark.id}">
        <div class="top-half" tabindex=0>
          <h2>${bookmark.title}</h2>
        </div>
        <div class="bottom-half">
          <div class="rating even-flex">
            <span class="icon background-bookmarkIcon">${bookmarkIcon}</span>
          </div>
        </div>
      </li>
    `;
};

const generateExpandBookmarkByClass = (bookmark) => {
  return `
    <li class="js-bookmark-item" data-item-id="${bookmark.id}">
       <div class="top-half" tabindex=0>
            <h2 class="bookmark-title">${bookmark.title}</h2>
       </div>
       <div class="flex-details">
            <div class="flex-link">
                <button class="flex-button" aria-label="click to visit bookmark" onclick=" window.open('${bookmark.url}','_blank')">visit</button>
            </div>
            <textarea name="desc" class="js-bookmark-desc-entry flex-desc" maxlength="300" required>${bookmark.desc}</textarea>
        </div>
        <div class="bottom-half flex-between">
            <div class="rating left-side barvee-size>
                <label for='rating'>
                    <input type="radio" id='rating' name="rating" class="js-bookmark-rating-entry" value="1" ${bookmark.rating == 1 ? 'checked' : '' } required/>
                    <span class="icon"&barvee;</span>
                </label>
                <label for='rating'>
                    <input type="radio" id='rating' name="rating" class="js-bookmark-rating-entry" value="2" ${bookmark.rating == 2 ? 'checked' : '' } required/>
                    <span class="icon"&barvee;</span>
                    <span class="icon"&barvee;</span>
                </label>
                <label for='rating'>
                    <input type="radio" id='rating' name="rating" class="js-bookmark-rating-entry" value="3" ${bookmark.rating == 3 ? 'checked' : '' } required/>
                    <span class="icon"&barvee;</span>
                    <span class="icon"&barvee;</span>
                    <span class="icon"&barvee;</span>
                </label>
                <label for='rating'>
                    <input type="radio" id='rating' name="rating" class="js-bookmark-rating-entry" value="4" ${bookmark.rating == 4 ? 'checked' : '' } required/>
                    <span class="icon"&barvee;</span>
                    <span class="icon"&barvee;</span>
                    <span class="icon"&barvee;</span>
                    <span class="icon"&barvee;</span>
                </label>
                <label for='rating'>
                    <input type="radio" id='rating' name="rating" class="js-bookmark-rating-entry" value="5" ${bookmark.rating == 5 ? 'checked' : '' } required/>
                    <span class="icon"&barvee;</span>
                    <span class="icon"&barvee;</span>
                    <span class="icon"&barvee;</span>
                    <span class="icon"&barvee;</span>
                    <span class="icon"&barvee;</span>
                </label>
            </div>
            <div class="right-side">
                <button class="js-bookmark-save expand-buttons shadow" aria-label="click to save bookmark"><span class="buttonLabel">save</span></button>
                <button class="js-bookmark-delete expand-buttons shadow" aria-label="click to delete bookmark"><span class="buttonLabel">delete</span></button>
            </div>
        </div>
    </li>
       `;
};

const generateRating = (number) => {
  let bookmarkIcon = '';
  for(let i = 0; i < number; i++) {
    bookmarkIcon += '&barvee;';
  }
  return `<span class="icon colored-bookmarkIcon">${bookmarkIcon}</span>`;
};

const generateBookmarkListString = (bookmarkList) => {
  const bookmarks = bookmarkList
    .filter((bookmark) => {
      return bookmark.rating >= store.rating;
    }).map((bookmark) => (!bookmark.expand) ? generateBookmarkItem(bookmark, generateRating(bookmark.rating)) : generateExpandBookmarkByClass(bookmark));
  return bookmarks.join('');
};

const render = () => {
  renderErrMsg();
  $('main').html(generateHomePageHTML);
  if (store.addNewBookmark) {
    $('.js-add-new-bookmark').html(generateFormHTML());
  } else {
    $('.js-add-new-bookmark').empty();
  }
  let bookmarks = [...store.bookmarks];
  //render bookmark to DOM
  const bookmarkListString = generateBookmarkListString(bookmarks);
  $('.js-add-bookmark').html(!store.addNewBookmark ? '+ Bookmark' : 'cancel');
  $('#js-bookmark-list').html(bookmarkListString);
};

const generateErrMsg = (message) => {
  return `
        <section class="error-content">
          <button id="cancel-error">X</button>
          <p>${message}</p>
        </section>
      `;
};

const getItemIdFromElement = function (item) {
  return $(item)
    .closest('.js-bookmark-item')
    .data('item-id');
};

// ---------- Event Handlers ---------- //

const handleAddNewBookmark = () => {
  $('main').on('click','.js-add-bookmark', event => {
    event.preventDefault();
    store.toggleAddNewBookmark();
    render();
  });
};

const handleSubmitNewBookmark = () => {
  $('main').on('submit', '.js-add-new-bookmark-form', event => {
    event.preventDefault();
    const newBookmarkData = $(event.target).serializeJson();
    api.createBookmark(newBookmarkData)
      .then((newBookmark) => {
        store.addBookmark(newBookmark);
        store.toggleAddNewBookmark();
        render();
      })
      .catch((error) => {
        store.setError(error.message);
        renderErrMsg();
      });
  });
};

const handleExpandedBookmarkView = () => {
  $('main').on('click', '.top-half', event => {
    const bookmarkId = getItemIdFromElement(event.currentTarget);
    const bookmark = store.findById(bookmarkId);
    store.findAndUpdate(bookmarkId, {expand: !bookmark.expand});
    render();
    store.bookmarks.forEach(bookmark => bookmark.expand = false);
  });
}; 

const handleRatingFilter = () => {
  $('main').on('change', '.js-filter-rating', event => {
    store.rating = $(event.target).val();
    render();
  });
};

const handleDeleteBookmark = () => {
  $('main').on('click', '.js-bookmark-delete', event => {
    const bookmarkId = getItemIdFromElement(event.currentTarget);
    api.deleteBookmark(bookmarkId)
      .then(() => {
        store.findAndDelete(bookmarkId);
        render();
      })
      .catch((error) => {
        store.setError(error.message);
        renderErrMsg();
      });
  });
};

const handleEditSaveBookmark = () => {
  $('main').on('click', '.js-bookmark-save', event => {
    const bookmarkId = getItemIdFromElement(event.currentTarget);
    const newDesc = $('.js-bookmark-desc-entry').val();
    const newRating = $('input[name="rating"]:checked').val();
    const newData = JSON.stringify({desc: newDesc, rating: newRating});
    const parsedNewData = JSON.parse(newData);
    api.updateBookmark(bookmarkId, newData)
      .then(() => {
        store.findAndUpdate(bookmarkId, parsedNewData);
        render();
      })
      .catch((error) => {
        store.setError(error.message);
        renderErrMsg();
      });
  });
};

const renderErrMsg = () => {
  if (store.error) {
    const el = generateErrMsg(store.error);
    $('.error-container').html(el);
  } else {
    $('.error-container').empty();
  }
};

const handleCloseErrMsg = () => {
  $('.error-content').on('click', '#cancel-error', () => {
    store.setError(null);
    renderErrMsg();
  });
}; 
  
$.fn.extend({
  serializeJson: function() {
    const formData = new FormData(this[0]);
    const o = {};
    formData.forEach((val, name) => o[name] = val);
    return JSON.stringify(o);
  }
});

const eventListeners = () => {
  handleAddNewBookmark();
  handleSubmitNewBookmark();
  handleExpandedBookmarkView();
  handleRatingFilter();
  handleDeleteBookmark();
  handleEditSaveBookmark();
  renderErrMsg();
  handleCloseErrMsg();
};

export default {
  generateHomePageHTML,
  generateFormHTML,
  generateBookmarkItem,
  generateExpandBookmarkByClass,
  generateRating,
  generateBookmarkListString,
  render,
  eventListeners,
};