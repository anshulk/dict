#!/usr/bin/env node

var api = require('./api/wordnik');
var format = require('./utils/format');

const program = require('commander');

program
  .version('0.0.1');

program
  .command('def <word>')
  .description('Display definitions of a word.')
  .action(function(word){
    api.getData(word, 'def', function(err, data){
      data = JSON.parse(data);
      format.def(word,data);
    });
  });

program
  .command('syn <word>')
  .description('Display synonyms of a word.')
  .action(function (word) {
    api.getData(word, 'syn', function(err, data){
      data = JSON.parse(data);
      format.syn(word,data);
    });
  });

program
  .command('play <word>')
  .description('Play game.')
  .action(function (word) {
    console.log("Play game");
  });

program
  .command('ant <word>')
  .description('Display antonyms of a word.')
  .action(function (word) {
    api.getData(word, 'ant', function(err, data){
      data = JSON.parse(data);
      format.ant(word,data);
    });
  });


program
  .command('ex <word>')
  .description('Display synonyms of a word.')
  .action(function (word) {
    api.getData(word, 'ex', function(err, data){
      data = JSON.parse(data);
      format.ex(word,data);
    });
  });

program
  .command('[dict] <word>')
  .description('Display everything for the word.')
  .action(function (word) {
    console.log("Display everything for the word.", word);
  });

program
  .command('*')
  .description('Display everything for the word of the day')
  .action(function (word) {
    console.log("Display everything for the word. ");
  });

// .command('ant <word>','Display antonyms of a word.')
  // .command('ex <word>','Examples of a word')
  // .command('[dict] <word>','Everything for the word')
  // .command('play ','Game')
  // .command('*','Everything for the word of the day')
program.parse(process.argv);

if (program.args.length === 0) {
  program.help();
}
