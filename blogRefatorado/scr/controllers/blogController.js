const TextService = require('../services/textServices');

const createPost = (req, res) => {
  const { title, content, status, author } = req.body
  const newText = TextService.createText({ title, content, status, author})
  res.status(201).json({ message: `Texto ${newText.title} criado com sucesso` })
}

const listPosts = (req, res) => {
  const texts = TextService.getAllTexts()
  res.json(texts)
}

const listPost = (req, res) => {
  const { id } = req.params 

  const text = TextService.getTextById(id)

  if (!text) {
    res.status(404).json({ message: `Text com ID ${id} não encontrado`})
  }

  res.json(text)
}

const updatePostEdit = (req, res) =>{
  const {id} = req.params
  const {title, content, status, author} = req.body

  try {
    const updateText = TextService.updateText(id, {title,content, status,author})
    res.json({message: `Texto ${updatePostEdit.title} atualizado`})
  }
  catch (error){
    res.status(404).json({message: error.message})
  }

}

const deletePost = (req, res) =>{
  const {id} = req.params
  const result = TextService.deleteText(id)
  
  if (result.success){
    res.status(200).json({message: 'Post dletado com sucesso'})
  } 
  else{
    res.status(404).json({error: 'Postagem não encontrada'})
  }

}



module.exports = {
  createPost,
  listPosts,
  listPost,
  updatePostEdit,
  deletePost
}