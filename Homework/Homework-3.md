## Create StarWars Characters' Cards in a paginated Grid with sorting options

Your project is very Star Warsly themed and as part of the Web App you are building the project manager has asked you to create a two dimensional grid displaying Star Wars Characters' cards.

The data for the characters can be found at:
https://swapi.co/api/people

And it is paginated so you would get the data for a specific page as follows:

https://swapi.co/api/people?page=2

The card should contain information from the /people endpoint (name, age, gender etc.) Display whatever information you want. You have all the freedom here.

Here's how a card usually looks like: 

https://material-ui.com/demos/cards/

## Paging functionality:

Clicking the next pagination control should load the next page and store it in some form of cache of your chosing. If there is no next page the button should be disabled.
Going to the previous page and then forward should not make an extra request for the currently loaded page data, instead it should load the data from cache.

Clicking the previous pagination control should load the previous page and store it in some form of cache of your chosing. If there is no previous page the button should be disabled.
Going to the next page and then backwards should not make an extra request for the currently loaded page it should instead load the page from cache.

Furthermore you are required to implement sorting of the characters by name.

Sorting by name on first click sorts the names of the characters only for the displayed page alphabetically. A - Z

Sorting the characters by name on second click sorts the names of the characters only for the displayed page alphabetically in reverse. Z - A.

Components needed hints:

- <StarWarsCharacterCard>
- <StarWarsCharactersGrid>
- <PaginatedContainer>

Good luck !