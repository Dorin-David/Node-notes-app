let chalk = require('chalk');
let yargs = require('yargs');
let notes = require('./notes.js');


yargs.command({
    command: 'add',
    describe: 'add a new element to the array',
    builder: {
        title: {
            describe: 'add a note by title',
            demandOption: true,
            type: 'string'
        }, 
        body: {
            describe: 'body of the note',
            demandOption: true,
            type: 'string',
        }
    },

    handler(argv){ 
         notes.addNote(argv)
    } 
})

yargs.command({
     command: 'remove', 
     describe: 'remove an element from the list',
     builder: {
       title: {
           describe: 'remove by title',
           demandOption: true,
           type: 'string'
       }
     },
     handler(argv){
         notes.removeNote(argv)
     }
})


yargs.command({
    command: 'read', 
    describe: 'read an element from list',
    builder: {
     title: {
         describe: 'read a note by title',
         demandOption: true,
         type: 'string'
     }
    },
    handler(argv){
        notes.readNote(argv)
    }
})

yargs.command({
    command: 'list', 
    describe: 'read the entire list',  
    handler(argv){
       notes.listNotes()
    }
})

yargs.parse()





