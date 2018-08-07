## Create a Trello Board Like application

Here is an image reference:

https://pasteboard.co/Hy23y3i.png

You don't need to hit the design right, just the functionality, howerver you do need to get a few things right:

1. The app consists of 1 row of scrollable columns
2. Each column consists of cards
3. There is a filter which can filter cards by name
4. Clicking on a card title should take you to a route with more details of the card

You can use Bootstrap or any other UI framework to make things pretty.

### What you need to do:

1. Have an add column functionality
Initially the application starts with 0 columns. You will have to create columns from the Add column button:

Add column button:
https://pasteboard.co/Hy25r6C.png

That should bring out a modal where you can add the name of the column and create the column.
If no name is provided then do not create a column.
A column name cannot begin with a number and is at maximum 100 characters and minimum 2.

Add column modal:
https://pasteboard.co/Hy25Hzn.png

The produced column should look like: 

New column:
https://pasteboard.co/Hy26Vc0.png

2. Add a note to column

Clicking on the + button on a column should prompt the user to fill in details for a note:

Add note button
https://pasteboard.co/Hy27FmS.png

Note form:
https://pasteboard.co/Hy27Wf1.png

Unlike the image above though our notes will have more information than just the title. A note should have:
 - title
 - deadline
 - one of 3 statuses: important | critical | not-important
 - Name of creator
 - Further description

Once a note is created it should show as a Note card as such:

Note card:
https://pasteboard.co/Hy29njX.png

The card contains only the title of the card and the name of the author as information displayed.
The card also displays a button to access a menu where you can view the card details or delete the card.


Card menu:
https://pasteboard.co/Hy2b8VT.png

Clicking on details or the card title should link you to a page where you can see the full details of a card.
Unfortunately I don't have a design for that but you can think of something.

3. A card can be "moved" from one column to another.
You don't need to create a drag and drop functionality. A simple option in the card many named "Move to"
and another drop down to choose to move to a specific column is sufficient.
Think of it as right click on a file in Windows and choosing the "Send to"

https://pasteboard.co/Hy2cA9e.png

4. Filtering

You should be able to filter all the cards (notes) via a filter input:

Filter
https://pasteboard.co/Hy2ejBF.png

For simplicity just filter the cards by name. When a filter is applied it should show only cards containing the string in the filter
either in the title of the card or the description of the card.

### Technical

1. Store information in Redux store and where necessary just the local state of a component. No need for back-end or anything like that.
Upon refresh the data should be lost
2. Use 2 Routes. 1 to show all columns with the cards and the filter and 1 to show the card details
3. Use any 3rd party React plugins you want
4. You have complete freedom in terms of design
5. Use trello or other board systems for reference if you like. The examples here use github's project functionality

Good luck, all !

Contact me if you need any further explanation
