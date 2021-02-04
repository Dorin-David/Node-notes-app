# Node-notes-app

A simple Node.js app for taking notes. It was build while following the first part of the @andrewjmead's course on Node.js. 
You can find the course here: https://www.udemy.com/course/the-complete-nodejs-developer-course-2/

The app uses two modules, **yargs** (1) for handling the various commands, and **chalk** (2) for styling it. It accepts 4 commands:
- **add** => adds a note 
- **remove** => removes a note by title
- **read** => reads a note by title
- **list** => outputs the list of notes by title

The notes are stored and retrieved from a JSON file. yargs makes sure all the commands are valid and that there no duplicates notes are added; chalk is used for highlighting successful/
failed operations
(1)<https://www.npmjs.com/package/yargs>
(2)<https://www.npmjs.com/package/chalk>
