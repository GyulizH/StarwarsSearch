# Starwars Search

## How To Run The App

###  **yarn install**

In order to run the project after cloning the repository, you need to use run **yarn install**  before you run any other scripts available.

## Available Scripts

### yarn start 

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### yarn build ### 

Builds the app for production to the `build` folder.<br> 
This can be omitted for this project.

### yarn prettier:fix ###

Formats the code inside src folder.

## How the App works

- The app consists of a Search component which is rendered with the search results on one page and the character list of the selected movie from the search results on the redirected page.

- The search can only be made for movies and consists of a standard logic which returns all the movies which includes the keyword.

- The search has autocomplete and to see the characters you are prompt to click on the ```Click To View The Characters``` to be directed to the page which consists of the characters of the specific movie.

## Improvements that can make the app better

- Current application does not have unit tests, which I did not have time for while trying to do it not more than 3 hours.

- The components could be made in a more clever and atomic way, for example there could be one Card component which could be used both as Film Card 
or Character Card.

- The design of the app definitely can be improved and be made responsive.

- When I list the characters in a movie, I did not give a unique id to each list item like I did for the movie list. I basically used the character name as the key. However, this can cause problems.

-  There was actually no id parameter from the API response for each movie, I created an id field from the movie url, I could have followed a similar approach for creating character ids.

- There is a loader which checks whether the api response after a search performed, is actually coming. I could do a loader for redirecting to the character list.

- Currently the url of the character list can be shared and seen in the same state, however if there is a nonexisting id on the id part of the path, the page will be an empty list. It could have rendered an error page saying 'no results for this id`

- It can be nice to be directed to the movies of the specific character from clicking to a character.

