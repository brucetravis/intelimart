const fs = require('fs')


fs.readFile('./ex.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err)
        return
    }

    console.log(data)
})


fs.writeFile('./example.txt', "Hi there", (err) => {
    if (err) throw err
    console.log('File Written.')
})
