const R = require('ramda')

const emails = [
  { title: 'aaa', date: 20190401, sender: 'test1@gmail.com' },
  { title: 'bbb', date: 20190301, sender: 'test2@gmail.com' },
  { title: 'ccc', date: 20190201, sender: 'test3@gmail.com' },
]

// search by title 'bbb'
console.log(R.pipe(
  R.filter(email => email.title.includes('ccc'))
)(emails))

// search by date range and sender
console.log(R.pipe(
  R.filter(email => email.date > 20190205), 
  R.filter(email => email.sender === 'test1@gmail.com'), 
)(emails))

// whatever searching you want to do ...
