### assumption

- no backend servers can be used ie.firebase rails to store and share notes among other users
- no outside apis can be used
- notes will be displayed by seperate groups (high normal low)
- notes will be movable? (requires a library to do this will have to research)
- notes can be moved up to prioritize/lift importance in list
- notes can be moved horizontally to other "lists" in another category

### Components i need to add

- input component (consist of both new card and new list)
- list component
  - card components
    - CRUD FOR CARDS

### functinality props

- add a new list (first)
- add card to list (seconds)
  - edit card
  - delete card
- update information and CRUDS

### nice to have

- drag and drop card in same list to prioritize(dunno how)
- drag and drop card in different list to change catergory (low, medium, high)
- drag and drop list??????

// setter
localStorage.setItem('myData', data);

// getter
localStorage.getItem('myData');

// remove
localStorage.removeItem('myData');

// remove all
localStorage.clear();
