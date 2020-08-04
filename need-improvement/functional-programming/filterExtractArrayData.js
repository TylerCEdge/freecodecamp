// ARRAY DATA FROM THE FCC LESSON
// @@@ COLLAPSE LINE 9 TO IMPROVE READABILITY ARRAY IS ONLY PROVIDED FOR ADDITIONAL CONTEXT @@@

// FCC LESSON URL
// ------------------------------------------------------
('https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/use-the-filter-method-to-extract-data-from-an-array');
// ------------------------------------------------------

var watchList = [
  {
    Title: 'Inception',
    Year: '2010',
    Rated: 'PG-13',
    Released: '16 Jul 2010',
    Runtime: '148 min',
    Genre: 'Action, Adventure, Crime',
    Director: 'Christopher Nolan',
    Writer: 'Christopher Nolan',
    Actors: 'Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy',
    Plot:
      'A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.',
    Language: 'English, Japanese, French',
    Country: 'USA, UK',
    Awards: 'Won 4 Oscars. Another 143 wins & 198 nominations.',
    Poster:
      'http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg',
    Metascore: '74',
    imdbRating: '8.8',
    imdbVotes: '1,446,708',
    imdbID: 'tt1375666',
    Type: 'movie',
    Response: 'True',
  },
  {
    Title: 'Interstellar',
    Year: '2014',
    Rated: 'PG-13',
    Released: '07 Nov 2014',
    Runtime: '169 min',
    Genre: 'Adventure, Drama, Sci-Fi',
    Director: 'Christopher Nolan',
    Writer: 'Jonathan Nolan, Christopher Nolan',
    Actors: 'Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow',
    Plot:
      "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    Language: 'English',
    Country: 'USA, UK',
    Awards: 'Won 1 Oscar. Another 39 wins & 132 nominations.',
    Poster:
      'http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg',
    Metascore: '74',
    imdbRating: '8.6',
    imdbVotes: '910,366',
    imdbID: 'tt0816692',
    Type: 'movie',
    Response: 'True',
  },
  {
    Title: 'The Dark Knight',
    Year: '2008',
    Rated: 'PG-13',
    Released: '18 Jul 2008',
    Runtime: '152 min',
    Genre: 'Action, Adventure, Crime',
    Director: 'Christopher Nolan',
    Writer:
      'Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)',
    Actors: 'Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine',
    Plot:
      'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.',
    Language: 'English, Mandarin',
    Country: 'USA, UK',
    Awards: 'Won 2 Oscars. Another 146 wins & 142 nominations.',
    Poster:
      'http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg',
    Metascore: '82',
    imdbRating: '9.0',
    imdbVotes: '1,652,832',
    imdbID: 'tt0468569',
    Type: 'movie',
    Response: 'True',
  },
  {
    Title: 'Batman Begins',
    Year: '2005',
    Rated: 'PG-13',
    Released: '15 Jun 2005',
    Runtime: '140 min',
    Genre: 'Action, Adventure',
    Director: 'Christopher Nolan',
    Writer:
      'Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)',
    Actors: 'Christian Bale, Michael Caine, Liam Neeson, Katie Holmes',
    Plot:
      'After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.',
    Language: 'English, Urdu, Mandarin',
    Country: 'USA, UK',
    Awards: 'Nominated for 1 Oscar. Another 15 wins & 66 nominations.',
    Poster:
      'http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg',
    Metascore: '70',
    imdbRating: '8.3',
    imdbVotes: '972,584',
    imdbID: 'tt0372784',
    Type: 'movie',
    Response: 'True',
  },
  {
    Title: 'Avatar',
    Year: '2009',
    Rated: 'PG-13',
    Released: '18 Dec 2009',
    Runtime: '162 min',
    Genre: 'Action, Adventure, Fantasy',
    Director: 'James Cameron',
    Writer: 'James Cameron',
    Actors: 'Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang',
    Plot:
      'A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.',
    Language: 'English, Spanish',
    Country: 'USA, UK',
    Awards: 'Won 3 Oscars. Another 80 wins & 121 nominations.',
    Poster:
      'http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg',
    Metascore: '83',
    imdbRating: '7.9',
    imdbVotes: '876,575',
    imdbID: 'tt0499549',
    Type: 'movie',
    Response: 'True',
  },
];

// ------------------------  MY ANSWER ------------------------------

var filteredList = watchList
  .map((item) => ({
    title: item['Title'],
    rating: parseFloat(item['imdbRating']), // chaining .toFixed(1) resolves this but why is it necessary here and not on line 162?
  }))
  .filter((movie) => movie.rating >= 8.0);

// CONSOLE LOG

[
  { title: 'Inception', rating: 8.8 },
  { title: 'Interstellar', rating: 8.6 },
  { title: 'The Dark Knight', rating: 9 },
  { title: 'Batman Begins', rating: 8.3 },
];

// -------------------------  FREECODECAMP SOLUTION -----------------------------

var filteredList = watchList
  .map((movie) => {
    return {
      title: movie['Title'],
      rating: movie['imdbRating'],
    };
  })
  .filter((movie) => {
    return parseFloat(movie.rating);
  });

// CONSOLE LOG

[
  { title: 'Inception', rating: '8.8' },
  { title: 'Interstellar', rating: '8.6' },
  { title: 'The Dark Knight', rating: '9.0' },
  { title: 'Batman Begins', rating: '8.3' },
];

// ------------------------------------------------------

console.log(filteredList);

// --------------------------  FCC URL TO ACCESS THE EXERCISE ----------------------------

('https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/use-the-filter-method-to-extract-data-from-an-array');

// -------------------------  ANSWERS FROM JAY -----------------------------

// JAY: .map returns values that compute a new array

// JAY: so you using parseFloat in .map is mutating the array

// JAY: FCC’s solution is using parseFloat in the .filter which makes no changes to the data in the array, it just filters on the condition provided in .filter’s callback function

// ME: So IF I were to use it.  Filter is the optimal place to use it?  Is the mutation why .toFixed(1) is required to yield the same result as using it in .filter without that addition?

// JAY: yes

// JAY: there are lots of small reasons why that’s the case

// JAY: you can cause a mutation in .filter as well

// JAY: it’s really about understanding that objects are “pass by reference”

// JAY: so when you change the value of an object property in a .map you are changing it everywhere that it is referenced

// ------------------------- MY RUBBER DUCK SELF TALK IN ATTEMPT TO INVOKE A LIGHT BULB MOMENT -----------------------------

// The parseFloat() function parses an argument (converting it to a string first if needed) and returns a floating point number.  So ...

// My solution technically works, however, it takes the string value inside imdbRating ( line 77 ) ...
// utilizes parseFloat to convert the string to a floating point number ( line 139 ) ...
// and outputs an array of objects containing title: string, rating: floating point number ( lines 146-149 ) ...
// except the floating point number for The Dark Knight's rating is 9 instead of 9.0 ( line 148 ) whereas the other 3 titles returned hold a value of 1 past the decimal point ( line 146, 147, 149 ) ...

// ------------------------- MY QUESTION(S) -----------------------------

// Why does parseFloat(item['imdbRating']) ( line 139 ) !== parseFloat(movie.rating) ( line 162 ) ???

//
