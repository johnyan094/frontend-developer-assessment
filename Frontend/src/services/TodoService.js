const axios = require('axios')

const GetUrl = (method = '') => {
  return 'http://localhost:7000/api/todoItems/' + method
}

export const GetTodoItems = async () => {
  var url = GetUrl()
  var items = await axios.get(url)

  return items.data
}

export const AddTodoItem = async (todoItem) => {
  var url = GetUrl()
  var newTodoItem = await axios.post(url, {
    description: todoItem.description,
  })

  return newTodoItem.data
}

export const MarkItemAsComplete = async (id) => {
  var url = GetUrl(id)
  var newTodoItem = await axios.put(url)
  return newTodoItem.data
}
