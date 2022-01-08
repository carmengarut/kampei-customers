
const { Schema, model } = require('mongoose')

const userSchema = new Schema({
  email: String,
  name: String,
  surname: String,
  passwordHash: String,
  profileImg: String,
  creationDate: Date,
  orders: [{
    type: Schema.Types.ObjectId,
    ref: 'Order'
  }]
})

userSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id
    delete returnedObject._id
    delete returnedObject.__v
    delete returnedObject.passwordHash
  }
})

const User = model('User', userSchema)

module.exports = User
