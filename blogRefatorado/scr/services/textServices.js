const TextFactory = require('./textFactory')
const TextStorage = require('../utils/textStorage')
const textStorage = require('../utils/textStorage')


module.exports = {
  createText: ({ title, content, status, author }) => {
    const newText = TextFactory.create({ title, content, status, author })
    TextStorage.add(newText)
    return newText
  },

  getAllTexts: () => {
    return TextStorage.getAll()
  },

  getTextById: (id) => {
    return textStorage.getById(id)
  },

  updateText: (id, updates) =>{
    const updateText = TextStorage.updateText(id, updates)
    return updateText
  },
  deleteText: (id) =>{
    const deletePostList = TextStorage.getAll().findIndex(post => post.id === id)
    
    if (deletePostList == -1){
      return {success: false}
    }
    TextStorage.getAll().splice(deletePostList, 1)
    
    //return deletePostList
    return {success: true}
  }

}