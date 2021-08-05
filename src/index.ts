import app from './app'
import {startConection} from './database'

async function main() {
    startConection()
    await app.listen(app.get('port'))
    console.log('server on port', app.get('port'))
}
main()
/*
app.listen(4000, () => {
  console.log('server on port', 4000)  
})
*/