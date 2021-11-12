//@ts-check
const {BaseFragment, Button, Text} = require('../../../../lib')

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
  constructor(root, name) {
    super(root, name)
    this.username = this.init('.user_item_username', 'New User', Text) // root-элемента фрагмента на странице
    this.details = this.init('button', 'Users List', Button) // root-элемента фрагмента на странице
  }

  async isRequiredItem(data) {
    const thisResult = await this.getData({...data}) // {...data} --> копируем входящий аргумент, теперь это деструктуризированный объект {index, action, rest=username}
    // запуск метода getData у UserItem фрагмента запускается для того, чтобы извлечь данные из копии аргумента data объекта дескриптора{}, аргументами в getData попадают {index, action, rest=username}
    //присваиваем результат в thisResult
    console.log("thisResult=> ", thisResult, "data=>", data)
    return Object.keys(data).every(key => thisResult[key] === data[key]) // выделить ключи из объекта data-дескриптор и для каждого из его ключей проверить соответствует ли тот ключ ключу из объекта, который есть результатом извлечения данных из элементов фрагмента UserItem
  }
}

module.exports = {
  UserItemFragment
}