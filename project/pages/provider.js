// @ts-check
// pageProvider - объект, который предоставляет возможность работы и взаимодействия с интерфейсами созданных страниц
const pageProvider = {
  get main() { // метод для взаимодействия с main страницей
    const {getMain} = require('./main/page')
    return getMain()
  },
  get tables() { // метод для взаимодействия с tables страницей
    const {getTables} = require('./tables/page')
    return getTables()
  },
  get admin() { // метод для взаимодействия с admin страницей
    const {getAdmin} = require('./admin/page')
    return getAdmin()
  }
}

module.exports = {
  pageProvider
}