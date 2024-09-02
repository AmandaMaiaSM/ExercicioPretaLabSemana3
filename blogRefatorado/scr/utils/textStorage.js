class TextStorage {
    constructor() {
      if (!TextStorage.instance) {
        this.texts = []
        TextStorage.instance = this
      }
      return TextStorage.instance
    }
  
    add(text) {
      this.texts.push(text)
    }
  
    getAll() {
      return this.texts
    }
  
    getById(id) {
      return this.texts.find(text => text.id === id)
    }

    updateText(id, updates) {
      const text = this.getById(id);
      
      if (!text) {
        throw new Error(`Texto com ID ${id} não encontrado`);
      }
      text.title = updates.title || text.title;
      text.content = updates.content || text.content;
      text.status = updates.status || text.status;
      text.author = updates.author || text.author;
      return text;
    }

  }
  
  module.exports = new TextStorage()
