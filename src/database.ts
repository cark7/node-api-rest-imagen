import {connect} from 'mongoose'

export async function startConection(){
    await connect('mongodb://localhost/photo-gallery-db', {
       useNewUrlParser: true 
    })
    console.log('database is conneted')
}
