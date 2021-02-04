const fs = require('fs');
const chalk = require('chalk');


function addNote(argv){
    let notes = loadNotes(); 
    if(notes.find(item => item.title == argv.title)) {
        //throw new Error('This title is already taken'); //throw error if the title is already used (a bit harsh on the user :) )
        console.log(chalk.red.inverse('title taken!'))
    }
    notes.push({title: argv.title, body: argv.body})
    saveNotes(notes)
    console.log(chalk.green.inverse('note added!'))
}


function saveNotes(notes){
  fs.writeFileSync('notes.json', JSON.stringify(notes))
}

function loadNotes(){
   try {
    return JSON.parse(fs.readFileSync('notes.json'))
   } catch(e){
       return [] //if there is no such a file as notes.js, return an empty array (the notes.json will be an array)
   }
}

function removeNote(argv){
   let notes = loadNotes();
   if(notes.find(item => item.title == argv.title)){
      saveNotes(notes.filter(item => item.title != argv.title))
      console.log(chalk.bgGreen('Note removed!'))
      return
   }
   console.log(chalk.bgRed('No note found!'))
}

function readNote(argv){
    let notes = loadNotes();
    let targetNote = notes.find(item => item.title == argv.title);
    if(targetNote){
       console.log(chalk.blue.inverse(targetNote.title))
       console.log(targetNote.body)
       return
    }
    console.log(chalk.red('Error! Note not found'))
}

function listNotes(){
    let notes = loadNotes();
    console.log(chalk.greenBright('Your notes:'))
    notes.forEach(element => console.log(chalk.green.inverse(element.title)))
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote,
}
