<a href="https://mytimes-crossword.herokuapp.com/#/" target=" "><img src="./app/assets/images/mytimes_logo_white_bg.jpg" Alt="The Mad Year Times Wordcross - an homage to the New York Times&reg; Crossword Web App by Matthew Greer" width="100%"></a>  

<h1>an homage to <a href="https://www.nytimes.com/crosswords" target=" ">The New York Times&reg; Crossword Web App</a></h1>  

<h2>by <a href="https://www.linkedin.com/in/matthewgreerdev" target=" ">Matthew Greer</a> | <a href="mailto:matthew.greer.dev@gmail.com?subject=GitHub%20MYTimes%20Crossword">matthew.greer.dev@gmail.com</a> | <a href="http://www.matthewgreer.net" target=" ">matthewgreer.net</a></h2>
<h2>* * * CHECK OUT THE APP <a href="https://mytimes-wordcross-5306a4c10039.herokuapp.com" target=" ">LIVE ON HEROKU</a> * * *</h2>

<a href="https://mytimes-crossword.herokuapp.com/#/" target=" "><img src="./app/assets/images/readme-header-myt.jpg" Alt="The Mad Year Times Wordcross - an homage to the New York Times&reg; Crossword Web App by Matthew Greer" width="100%"></a>

<hr />


<h2>TABLE OF CONTENTS</h2>
<ul>
  <li><h3><a href="#about-sect">ABOUT</a></h3></li>
  <li><h3><a href="#tech-sect">TECH</a></h3></li>
  <li><h3><a href="#features-sect">FEATURES</a></h3></li>
  <li><h3><a href="#future-sect">FUTURE</a></h3></li>
  <li><h3><a href="#credit-sect">ACKNOWLEDGEMENTS</a></h3></li>
  <li><h3><a href="#me-sect">ABOUT ME</a></h3></li>
  <li><h3><a href="#install-sect">INSTALL</a></h3></li>
</ul>
<hr>
<a id="about-sect"></a><h2>ABOUT</h2>
<p>The <strong>MYTimes Wordcross</strong> is my loving homage to <a href="https://www.nytimes.com/crosswords">The New York Times&reg; Crossword Web App</a>. Designed to closely mimic its source's styling and functionality using original SCSS/CSS and JavaScript UI/UX, <strong>MYTimes Wordcross</strong> presents a fully-featured crossword game, plus the creation and storage of user accounts.</p>

<table style="margin: 0 auto;">
  <th colspan="2"><h2 style="font-style: italic;">Why <strong>"Mad Year Times"</strong>?</h2></th>
  <tr>
    <td width="500px">
      <p style="font-style: italic;">I wanted the logos, etc. to be a close relative of the original New York Times&reg; logo.</p>
      <p style="font-style: italic;"><strong>I also wanted to avoid litigation.</strong></p>
      <p style="font-style: italic;">The acronym stand-in for the "NY" equates to the word "my," since this project was developed solely by myself, as my first larger-scale full-stack application.</p>
      <p style="font-style: italic;">Replacements for the full words needed to be the same length as "New" and "York", which limited the playing field.</p>
      <p  style="font-style: italic;">Ultimately, the app was developed during the "unprecedented" year 2020, so "<strong>The Mad Year Times</strong>" seemed right on the nose--a nose which was, of course, covered in public by a mask.</p>
    </td>
    <td>
      <img src="./app/assets/images/readme-fauci.gif" alt="Thank you Dr. Fauci!" width="200px">
    </td>
  </tr>
</table>

<hr />
<h2><a id="tech-sect"></a>TECH</h2>
<p style="font-weight: 900;">PostgreSQL | Ruby on Rails | Jbuilder | bcrypt | jQuery</p>  
<p style="font-weight: 900;">Node | React | Redux | Webpack</p>
<p>


| Required | Gem | Version |\| | Required | Package | Version |
|---|---|---|---|---|---|---|
| [**PostgreSQL**](https://www.postgresql.org/download/) | | |\| | [**Node.js**](https://nodejs.org/en/download/) | | **10.13.0** |
| [**Ruby**](https://www.ruby-lang.org/en/downloads/) | | **2.5.1p57** |\| | **NPM** | | **6.14.7** |
| | `bundler` | 2.2.15 |\| | | `@babel/core` | 7.10.5|
| | `rails` | 5.2.4.4 |\| | | `@babel/core` | 7.10.5|
| | `pg` (postgresql) | 1.2.3 |\| | | `@babel/preset-env` | 7.10.4 |
| | `puma` | 3.12.6 |\| | | `@babel/preset-react` | 7.10.4 |
| | `sass-rails` | 5.1.0 |\| | | `babel-loader` | 8.1.0 |
| | `uglifier` | 4.2.0 |\| | | `react` | 16.13.1 |
| | `jbuilder` | 2.10.1 |\| | | `react-dom` | 16.13.1 |
| | `bcrypt` | 3.1.16 |\| | | `react-redux` | 7.2.1 |
| | `jquery-rails` | 4.4.0 |\| | | `react-router-dom` | 5.2.0 |
| | `byebug` (development/test only) | 11.1.3 |\| | | `redux` | 4.0.5 |
| | `better_errors` (development/test only) | 2.8.3 |\| | | `redux-logger` | 3.0.6 |
| | `binding_of_caller` (development/test only) | 0.8.0 |\| | | `redux-thunk` | 2.3.0 |
| | `pry-rails` (development/test only) | 0.3.9 |\| | | `webpack` | 4.44.0 |
| | `annotate` (development/test only) | 2.7.5 |\| | | `webpack-cli` | 3.3.12 |
| | | |\| | | `hamburgers` ([@jonsuh](#Credit)) | 1.1.3 |

<hr>

<a id="features-sect"></a><h2>FEATURES</h2>

<img src="./app/assets/images/readme-demo.gif" alt="Demo of MYTimes Wordcross interactivity">

<ul>
  <li>
    <h3><strong>MYTimes</strong> "subscribes" users, securely storing <code>bcrypt</code> hashed password digests, puzzle progress, and solving streaks in a <code>PostgreSQL</code> relational database.</h3>
    <table style="margin: 0 auto;">
      <tr>
        <td width="200px">
          <p style="font-style: italic;">While the <strong> New York Times&reg;</strong>  allows non-subscribers access to their daily <strong> Mini</strong>  puzzle and requires a valid login for the regular <strong> Daily</strong>  puzzle, <strong> MYTimes</strong>  differs in that both <strong> Daily</strong>  and <strong> Micro</strong>  puzzle types are beyond the subscriber wall. But <strong> MYTimes</strong>  doesn't charge for a subscription, so I think it's more than a fair trade-off. 😄 </p>
        </td>
        <td>
          <img src="./app/assets/images/readme-subscribe.jpg" alt="MYTimes Subscribe Form" width="200px">
        </td>
      </tr>
    </table>
  </li>
  <li>
    <h3><code>Rails</code> streamlines API requests over RESTful routes, using <code>Jbuilder</code> to respond succinctly in <code>JSON</code> format. A token is stored client-side to persist login across sessions.</h3>

```ruby
namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :update] do 
      get 'user_dailies/:wordcross_date', to: 'user_dailies#show', as: 'daily_fetch'
      patch 'user_dailies/:id', to: 'user_dailies#update', as: 'daily_update'
      get 'user_micros/:wordcross_date', to: 'user_micros#show', as: 'micro_fetch'
      patch 'user_micros/:id', to: 'user_micros#update', as: 'micro_update'
    end
    get 'dailies/:wordcross_date', to: 'dailies#show', as: 'daily_fetch_author'
    get 'micros/:wordcross_date', to: 'micros#show', as: 'micro_fetch_author'
    resource :session, only: [:create, :destroy]
  end
  root to: "static_pages#root" 
```
</li>
<li>
  <h3>In lieu of creating a new, original pair of puzzles every day, the database is seeded with seven <strong>Micro</strong> Wordcrosses and seven <strong>Daily</strong> Wordcrosses, and a different pair is served for each day of the week. The puzzle grids and clue set are lovingly borrowed and reproduced from sample puzzles made freely available by the <a href="https://www.nytimes.com/crosswords" target=" ">NYT&reg;</a>. Full credit is given to <a href="#credit">the puzzles' creators</a> and again please don't sue me. <code>React</code> components and <code>Redux</code> state allow for efficient single-page rendering and DOM updating as users fill in the grid.</h3>  

```ruby
microSun = Micro.create!(
  wordcross_date: '2020-08-03',
  author: 'Joel Fagliano', 
  solution: [
```
SOLUTION REDACTED &ndash; No Cheating!
```ruby
  ],
  label_set: [
    ['#', '#', '1', '2', '3'],
    ['4', '5', ' ', ' ', ' '],
    ['6', ' ', ' ', ' ', ' '],
    ['7', ' ', ' ', ' ', ' '],
    ['8', ' ', ' ', '#', '#']
  ],
  clue_set: {
    a1: {
      direction: 'across',
      number: 1,
      boxes: ['0,2','0,3','0,4'],
      clue: 'Dog name like Hairy Pawter, e.g.'
    }, 
    a4: {
      direction: 'across', 
      number: 4, 
      boxes: ['1,0','1,1','1,2','1,3','1,4'],
      clue: 'Unit of stock'
    }, 
    a6: {
      direction: 'across', 
      number: 6, 
      boxes: ['2,0','2,1','2,2','2,3','2,4'],
      clue: 'Africa’s Republic of the ______'
    },
    
    etc...

  }
)
```  
  </li>
  <li>
    <h3>Several <code>JavaScript</code> methods respond to user clicks and keystrokes, closely emulating the solving behavior of the NYT&reg; puzzle app. </h3>

```javascript
// methods for processing user input -- keys
// =========================================

handleTabOrEnter(shifted) {
  // shifted (SHIFT + TAB or SHIFT + ENTER) moves in opposite direction
  const { activeClueName, board, solvingDirection } = this.state;
  let cluesArray = this.solvingDirectionCluesArray();
  const extremeIndex = shifted ? 0 : (cluesArray.length - 1);
  let newIndex;
  let newClue;
  let nextDirection;
  let nextBoxInFocusName;
  
  // check if the activeClueName is the last (or first, if shifted) clue
  //   in that direction
  if ( cluesArray.indexOf(activeClueName) === extremeIndex ) {
    // if activeClue IS at the extremity, switch directions
    cluesArray = this.oppositeCluesArray(cluesArray);
      // get the index for the first (or last, if shifted) clue in the
    //   opposite direction
    newIndex = shifted ? cluesArray.length - 1 : 0;
    // set the newClue
    newClue = cluesArray[newIndex]
    nextDirection = this.oppositeSolvingDirection();
  } else {
    // if activeClueName is NOT at the extremity,
    const currentIndex = cluesArray.indexOf(activeClueName);
    newIndex = shifted ? currentIndex - 1 : currentIndex + 1;
    newClue = cluesArray[newIndex];
    nextDirection = solvingDirection;
  }

  // next, check if the next activeClue is completed or not
  if ( this.isClueEntryCompleted(newClue, board) === true ) {
    // if this clue is completed, focus on the first box of the clue
    nextBoxInFocusName = this.clueBoxesArray(newClue)[0];
  } else {
    // if this clue is NOT completed, focus on the first empty box in 
    //   the clue entry
    nextBoxInFocusName = this.nextEmptyBoxInClueEntry(
      this.clueBoxesArray(newClue)[0],
      newClue,
      board
    );
  }
  this.setSolvingDirection(nextDirection);
  return this.setBoxInFocusName(nextBoxInFocusName);
}  
```
```javascript
handleArrowKey(direction) {
  switch(direction) {
    case 'ArrowUp':
      if (this.state.solvingDirection === 'across') {
        this.switchSolvingDirection();
        this.setSolvingDirection('down');
      }
      return this.shiftBoxInFocusAlongGrid( [-1, 0] );
    case 'ArrowDown':
      if (this.state.solvingDirection === 'across') {
        this.switchSolvingDirection();
        this.setSolvingDirection('down');
      }
      return this.shiftBoxInFocusAlongGrid( [1, 0] );
    case 'ArrowRight':
      if (this.state.solvingDirection === 'down') {
        this.switchSolvingDirection();
        this.setSolvingDirection('across');
      }
      return this.shiftBoxInFocusAlongGrid( [0, 1] );
    case 'ArrowLeft':
      if (this.state.solvingDirection === 'down') {
        this.switchSolvingDirection();
        this.setSolvingDirection('across');
      }        
      return this.shiftBoxInFocusAlongGrid( [0, -1] );
    default:
      return null;
  }
}  
```  
etc.
  </li>
  <li>
    <h3>Others track the level of puzzle completion and, like the NYT&reg;, display a series of icons on the main view to show returning users how far they've come on that puzzle.</h3>

```javascript
if (this.props.wordcrossType === 'Micro') {
      if (isSolved) {
        return this.wordcrossIcon = 7; 
      } else {
        switch (true) {
          case percentComplete < 1:
            return this.wordcrossIcon = 2;
          case percentComplete < 25:
            return this.wordcrossIcon = 3;
          case percentComplete < 50:
            return this.wordcrossIcon = 4;
          case percentComplete < 75:
            return this.wordcrossIcon = 5;
          case percentComplete <= 100:
            return this.wordcrossIcon = 6;
        }
      }
    } else {

      etc...


```
  <table style="margin: 0 auto;">
    <th colspan="2" style="text-align: center;"><h2 style="font-weight: 900;">Icons</h2></th>
    <tr>
      <td width="300px">
        <p style="font-style: italic; color:#EC4308">This was another area in which I was mindful to avoid litigation. I developed my own &ndash; very similar but still distinct &ndash; icons using <strong>Adobe Illustrator</strong>.</p>
      </td>
      <td rowspan="3">
        <img src="./app/assets/images/readme-compare-icons.jpg" alt="Icon comparison. Don't sue me." width="400px">
      </td>
    </tr>
    <tr>
      <td style="text-align: center; vertical-align: bottom;">
        <p>MICRO PROGRESS ICONS</p>
      </td>
    </tr>
    <tr>
      <td style="text-align: center; vertical-align: top;">
        <img src="./app/assets/images/readme-micro-progress-icons.jpg" alt="Micro Progress Icons" width="150px">
      </td>
    </tr>
  </table>
  </li>  

  <li><h3>User progress is also measured by a timer component, which can be paused, but, like the NYT&reg; puzzle, the puzzle and clues are blurred during pauses to prevent cheating. A reset button also allows solvers to start over from the beginning. The timer doesn't reset though. Did I mention no cheating?</h3>
  <img src="./app/assets/images/readme-timer.jpg" alt="Timer, reset button, blur effect">  

```css
.modal-veil {    
  background-color: $modalFogGray;
  opacity: .86;
  backdrop-filter: blur(7px);
  height: 100vh;
  left: 0;
  top: 0;
  width: 100vw;
  position: absolute;
  z-index: 4;
}
```
</li>
</ul>
<hr>


<a id="future-sect"></a><h2>FUTURE</h2>
<ul>
  <li>Data Visualization & Statistics</li>
  <li>Puzzle "Archive"</li>
  <li>Micro Leaderboard</li>
  <li>Congratulatory Sound Cue</li>
  <li>Footer</li>
  <li>"Wordplay" => "Wordnerd" / How to Solve... Articles</li>
  <li>Mobile Design</li>
</ul>

<hr>

<a id="credit-sect"></a><h2>ACKNOWLEDGEMENTS</h2>
<ul>
  <li><strong>The New York Times Crossword&reg; engineering team.</strong> <em>Instead of suing me, you <strong>could</strong> hire me...maybe?</em> 😁🙏</li>
  <li><strong>The New York Times Crossword&reg;</strong></li>
  <ul>
    <li><strong>Will Shortz</strong>, editor</li>
    <li><strong>Joel Fagliano</strong> author: Mini puzzles</li>
    <li><strong>Lynn Lempel</strong> author: Daily puzzle published Monday, July 6, 2020</li>
    <li><strong>Brian Thomas</strong> author: Daily puzzle published Tuesday, November 21, 2017</li>
    <li><strong>Jake Halperin</strong> author: Daily puzzle published Wednesday, July 24, 2019</li>
    <li><strong>Robyn Weintraub</strong> author: Daily puzzle published Thursday, July 23, 2020</li>
    <li><strong>Rich Proulx</strong> author: Daily puzzle published Friday, July 17, 2020</li>
    <li><strong>Randolph Ross</strong> author: Daily puzzle published Saturday, February 15, 2020 and
	Sunday puzzle published Sunday, January 27, 2019</li>
  </ul>
  <li><strong>Jonathan Suh</strong> for the tasty CSS-animated hamburger
  <ul>
    <li><a href="https://jonsuh.com/hamburgers" target=" ">https://jonsuh.com/hamburgers</a></li>
    <li><a href="https://github.com/jonsuh/hamburgers" target=" ">https://github.com/jonsuh/hamburgers</a></li>
  </ul>  
  <li><a href="https://meyerweb.com/eric/tools/css/reset/" target=" ">Meyerweb CSS Reset</a></li>
  <li><a href="https://www.appacademy.io/" target=" ">app/Academy</a></li>
  <li><a href="https://www.linkedin.com/company/artistswhocode/" target=" ">Artists Who Code</a></li>
</ul>

<hr>

<a id="me-sect"></a><h2>ABOUT ME</h2>
<p>A highly-experienced classically-trained actor (and puppeteer for Ryan Reynolds's fake arms in a popular <a href="https://www.youtube.com/watch?v=YrnchwA9WYA" target=" ">commercial</a> for <strong>TOON BLAST</strong> by Peak Games), I'm now bringing the collaborative and imaginative skill set of a performing artist to the field of software development. I live in Brooklyn, NY with my actress wife and two alarmingly tall children. And a dog. And a tortoise. Visit <a href="http://www.matthewgreer.net" target=" "> matthewgreer.net</a> for more info.</p>
<p><strong>Hobbies:</strong> designing and constructing space-efficient furniture, blues harmonica, contributing to the amazing <a href="https://www.linkedin.com/company/artistswhocode/" target=" ">Artists Who Code</a> community, and um, crosswords. <strong>Current consecutive solving streak for NYTimes Crossword:</strong> 480+ (<em>darn you, Xmas 2019!</em>)</p>

<hr>

<a id="install-sect"></a><h2>INSTALL</h2>
<ul>
  <li>Ensure you have PostgreSQL, Ruby, Node.js, NPM, etc. (see <a href="#tech">TECH</a>)</li>
  <li>Clone the repo. Run:

```shell
$ git clone https://github.com/matthewgreer/mytimes-crossword.git
```

  </li>
  <li>In a terminal, in the mytimes_crossword directory, run:

```shell
$ bundle install
```
then
```shell
$ npm install
```

  </li>
  <li>Run PostgreSQL server from the Postgres app, or run the following in the terminal:

```shell
$ postgres -D /usr/local/pgsql/data
```

  </li>
  <li>Setup the project database with Rails by running:

```shell
$ bundle exec rails db:setup
```

  </li>
  <li>Add the seed data to the database:

```shell
$ bundle exec rails db:seed
```

  </li>
  <li>Start a Rails Server:

```shell
$ bundle exec rails server
```

  </li>
  <li><strong><em>Open a second terminal</em></strong>, and start Webpack:

```shell
$ npm start
```

  </li>
  <ul>
    <li>NOTE: <code>npm start</code> runs the script below.

```json
"scripts": {
  "start": "webpack --watch --mode=development",
  "test": "echo \"Error: no test specified\" && exit 1",
  "postinstall": "webpack"
},
```
  </li>
  </ul>
  <li>In your browser, navigate to <a href="http://localhost:3000/#/" target=" ">http://localhost:3000/#/</a></li>
</ul>
<p>
<p>
<h2>Happy solving!</h2>
