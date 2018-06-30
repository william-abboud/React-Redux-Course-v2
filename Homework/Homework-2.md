## Create a table component listing records with sorting options

Your product owner has asked you to implement the following design:

https://i.stack.imgur.com/IbPuu.png

Your table contains rows of data where each row has the following information e.g JSON:

```json
{
  "position": "Software Engineer",
  "salary": 200106,
  "currency": "USD",
  "office": "New York",
  "extensionNumber": 5555
}
```

1. First create an array of sample data in a file called ```records.json``` (or .js). Make sure the data is not sorted in any way.
2. Create a ```<RecordsTable records={dataGoesHere} />``` Component where you need to display the data in ```records.json```
3. Create a somewhat pleasant design to look at (use the image for reference)
4. Implement sorting of the data by clicking on each header of
   each column to sort alphabetically or numerically by that column's data:

e.g If you click on the "Position" table header you sort the table alphabetically by the position name.
e.g 2 If you click on the "Salary" table header you sort the table by MOST salary first.

Hint: Use state heavily to keep the table data. When you sort update state with sorted table data.
Hint 2: Pass the initial table data through props (records prop)

Good luck !

P.S I know its way harder than what we've looked at and discussed but the point here is to start combining all you've learned
and make something that is actually usable in the real world.
