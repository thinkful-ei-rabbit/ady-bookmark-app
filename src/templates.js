import {bookmarks} from './store';
import './style.css';

export const generateHomePage = () => {
  return `
    <div class='appWrapper'>
      <header>
        <div class='gap-sm'>
          <h1 class='header'>BOOKMARKn</h1>
        </div>
        <nav>
          <div>
            <ul id='fltrMenu'>
              <li><div><select id='dropdown' name='rating'>
                  <option disabled value></option>
                  <option value='Filter'>Filter</option>
                  <option value=5>5</option>
                  <option value=4>4+</option>
                  <option value=3>3+</option>
                  <option value=2>2+</option>
                  <option value=1>1+</option>
                  </select></div></li>
              <li><div><button class='addNewBtn' type='button'>New</button></div></li>
            </ul>
          </div>
        </nav>
      </header>
      <div class='errMsg hidden'></div>
      <main>
        <div>
          <h2>Bookmarks:</h2>
        </div>
        <div class='bookmarkListWrap'>
            <div class='bookmarkItems'></div>
        </div>

      </main>
    </div>
    `;
};

export const generateFilteredPage = () => {
  return `
    <div class='appWrapper'>
      <header>
        <div class='gap-sm'>
          <h1 class='header'>BOOKMARKn</h1>
        </div>
        <nav>
          <div>
            <ul id='fltrMenu'>
              <li><select id='dropdown' name='rating'>
                  <option disabled value></option>
                  <option value='Filter'>Filter</option>
                  <option value=5>5</option>
                  <option value=4>4+</option>
                  <option value=3>3+</option>
                  <option value=2>2+</option>
                  <option value=1>1+</option>
                  </select></li>
              <li><button class='button' type='button'><a href='#addBookmark'>New</a></button></li>
            </ul>
          </div>
        </nav>
      </header>
      <div class='errMsg hidden'></div>
      <div>
        <hr class='hrzntlBr' />          
      </div>
      <main>
        <div>
          <h3>Filtered Bookmarks:</h3>
          <ul class='bookmarkList js-bookmark-list'>
            <li><div class='bookmarkItem'>{store.bookmarks[0].title} - {bookmarks[0].rating}</li>
            <li>{store.bookmarks[0].title} - {store.bookmarks[0].rating}</li>
            <li>{store.bookmarks[1].title} - {store.bookmarks[1].rating}</li>
            <li>{store.bookmarks[2].title} - {store.bookmarks[2].rating}</li>
            <li>{store.bookmarks[3].title} - {store.bookmarks[3].rating}</li>
            <li>{store.bookmarks[4].title} - {store.bookmarks[4].rating}</li>
            <li>{store.bookmarks[5].title} - {store.bookmarks[5].rating}</li>
          </ul>
        </div>
      </main>
    </div>
    `;
};

export const generateNewBookmarkPage = () => {
  return `
    <div class='appWrapper'>
        <header>
            <div class='gap-sm'>
                <h1 class='header'>BOOKMARKn</h1>
            </div>
            <nav>
                <div>
                    <ul id='fltrMenu'>
                        <li><select id='dropdown' name='rating'>
                            <option disabled value></option>
                            <option value='Filter'>Filter<i class='far fa-bookmark'></i></option>
                            <option value=5>5</option>
                            <option value=4>4+</option>
                            <option value=3>3+</option>
                            <option value=2>2+</option>
                            <option value=1>1+</option>
                            </select></li>
                        <li><button type='button' class='cnclBtn'>Cancel</button></li>
                    </ul>
                </div>
            </nav>
        </header>
        <div>         
        </div>
        <main>
            <div>
                <h3>Add New Bookmark:</h3>
                <div class='formWrapper'>
                    <form id='bookmarkForm'>
                        <div class='formTtl'>
                            <input type='text' name='title' id='bookmarkTtl' placeholder='Title' required />
                        </div>
                        <div class='formUrl'>
                            <input type='text' name='url' id='bookmarkurl' placeholder='Url' required />
                        </div>
                        <div class='formRating'>
                            <fieldset class='formRating'>
                                <legend>Rating</legend>
                                <div class='ratings'>
                                    <input type='radio' name='rating' id='rating5' value='5' />
                                    <label for='rating5'><i class='far fa-bookmark'></i><i class='far fa-bookmark'></i><i class='far fa-bookmark'></i><i class='far fa-bookmark'></i><i class='far fa-bookmark'></i></label>
                                    <input type='radio' name='rating' id='rating5' value='4' />
                                    <label for='rating4'><i class='far fa-bookmark'></i><i class='far fa-bookmark'></i><i class='far fa-bookmark'></i><i class='far fa-bookmark'></i></label>
                                    <input type='radio' name='rating' id='rating5' value='3' required />
                                    <label for='rating3'><i class='far fa-bookmark'></i><i class='far fa-bookmark'></i><i class='far fa-bookmark'></i></label>
                                    <input type='radio' name='rating' id='rating5' value='2' />
                                    <label for='rating2'><i class='far fa-bookmark'></i><i class='far fa-bookmark'></i></label>
                                    <input type='radio' name='rating' id='rating5' value='1' />
                                    <label for='rating1'><i class='far fa-bookmark'></i></label>
                                </div>
                            </fieldset>
                        </div>
                        <div class='formDesc'>
                            <input type='text' name='desc' id='bookmarkDesc' placeholder='description' required />
                        </div>
                    </form>
                </div>
            </div>
        </main>
    </div>
    <footer>
        <div>
            <button class='createBookmark'>Create</button> 
        </div>
      </footer>
    </div>
    `;
};

export const generateCollapsedView = (bookmarkItem) => {
  return `
      <div class='expndTtl expndRating' id='${bookmarkItem.id}'>
          <h4 class='bookmark'>${bookmarkItem.title} <i class='bookmark-rating open'>${bookmarkItem.rating}</i></h4>
          <div class='expndView'></div>
      </div>
  `;
};

export const generateExpandedView = () => {
  return `
          <div class='expnDesc'>
              <p class='desc'>${bookmarks[0].description}</p>
          </div>
          <div class='expndUrl'>
              <p class='expndLink'>URL: <input type='text' name='expndLink' id='expndLink' value='${bookmarks[0].link}' /></p>
          </div>
          <footer>
              <div>
                  <ul id='menuFooter'>
                      <li><button type='reset' class='resetBtn'>Clear</button></li>
                      <li><button class='createNewBtn'>Create</button></li>
                  </ul>
              </div>
          </footer>
    `;
};

export const generateEditBookmarkView  = () => {
  return `
    <div class='appWrapper'>
      <header>
        <div class='gap-sm'>
          <h1 class='header'>BOOKMARKn</h1>
        </div>
        <nav>
          <div>
            <ul id='fltrMenu'>
              <li><select id='dropdown' name='rating'>
                  <option disabled value></option>
                  <option value='Filter'>Filter<i class='far fa-bookmark'></i></option>
                  <option value=5>5</option>
                  <option value=4>4+</option>
                  <option value=3>3+</option>
                  <option value=2>2+</option>
                  <option value=1>1+</option>
                  </select></li>
              <li><button class='button' type='button'>New <i class='far fa-bookmark'></i></button></li>
            </ul>
          </div>
        </nav>
      </header>
      <div>         
      </div>
      <main>
        <div>
          <h3>Add New Bookmark:</h3>
          <div class='formWrapper'>
              <form id='bookmarkForm'>
                  <div class='formTtl'>
                      <input type='text' name='title' id='bookmarkTtl' placeholder='Title' required />
                  </div>
                  <div class='formUrl'>
                    <input type='text' name='url' id='bookmarkurl' placeholder='Url' required />
                </div>
                <div class='formRating'>
                    <fieldset class='formRating'>
                        <legend>Rating</legend>
                        <div class='ratings'>
                            <input type='radio' name='rating' id='rating5' value='5' required />
                            <label for='rating5'><i class='far fa-bookmark'></i><i class='far fa-bookmark'></i><i class='far fa-bookmark'></i><i class='far fa-bookmark'></i><i class='far fa-bookmark'></i></label>
                            <input type='radio' name='rating' id='rating5' value='4' required />
                            <label for='rating5'><i class='far fa-bookmark'></i><i class='far fa-bookmark'></i><i class='far fa-bookmark'></i><i class='far fa-bookmark'></i></label>
                            <input type='radio' name='rating' id='rating5' value='3' required />
                            <label for='rating5'><i class='far fa-bookmark'></i><i class='far fa-bookmark'></i><i class='far fa-bookmark'></i></label>
                            <input type='radio' name='rating' id='rating5' value='2' required />
                            <label for='rating5'><i class='far fa-bookmark'></i><i class='far fa-bookmark'></i></label>
                            <input type='radio' name='rating' id='rating5' value='1' required />
                            <label for='rating5'><i class='far fa-bookmark'></i></label>
                        </div>
                    </fieldset>
                </div>
                <div class='formDesc'>
                    <input type='text' name='desc' id='bookmarkDesc' placeholder='description' required />
                </div>
              </form>
          </div>
        </div>
      </main>
    </div>
      <footer>
        <div>
          <ul id='menuFooter'>
            <li><button type='button'><a href='#clear-form'>Clear</a></button></li>
            <li><button type='button'><a href='#addBookmark'>Create</a></button></li>
          </ul>
        </div>
      </footer>
    </div>
    `;
};