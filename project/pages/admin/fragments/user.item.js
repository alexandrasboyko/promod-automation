//@ts-check
const {BaseFragment, Button, Text} = require('../../../../lib')
const {isNumber} = require('sat-utils')

/**
 * @typedef {object} UserItemCommonAction
 * @property {null} [username] username
 * @property {null} [details] details
 */

/**
 * @typedef {object} UserItemGetResAction
 * @property {string} [username] username
 * @property {string} [details] details
 */

//Фрагмент поле-сегмент новоствореного користувача
class UserItemFragment extends BaseFragment {
  constructor(root, name,) {
    super(root, name)
    this.username = this.init(`.user_item_username`, `New User`, Text) // root-элемента фрагмента на странице
    this.details = this.init(`button`, 'User List', Button)  // root-элемента фрагмента на странице
  }

  async isRequired(childInstance) {
    const thisResultOfUserItem = await this.getData({...childInstance}) // {...data} --> копируем входящий аргумент, теперь это деструктуризированный объект {index, action, rest=username}
    // вызов метода getData у UserItem фрагмента запускается для того, чтобы извлечь данные из копии аргумента data объекта, который пришел на проверку, аргументами в getData попадают {index, action, rest=username} -->результат присваиваем в thisResult
    return Object.keys(childInstance).every((key) => {
      childInstance[key] === thisResultOfUserItem[key]
    })

  } // выделить ключи из объекта аргумента data и для каждого из его ключей проверить соответствует ли тот ключ ключам объекта, из getData который есть результатом извлечения данных из элементов фрагмента UserItem
}


module.exports = {
  UserItemFragment
}