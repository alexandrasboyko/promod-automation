//@ts-check
const {BaseFragment, Input, Button, Checkbox} = require('../../../../lib')


/**
 * @typedef {object} NewUserFormCommonAction
 * @property {null} [username] username
 * @property {null} [name] name
 * @property {null} [email] email
 * @property {null} [password] password
 * @property {null} [create] create
 */

/**
 * @typedef {object} NewUserFormGetResAction
 * @property {string} [username] username
 * @property {string} [name] name
 * @property {string} [email] email
 * @property {string} [password] password
 * @property {boolean} [isAdmin] is Admin
 * @property {string} [create] create
 */

/**
 * @typedef {object} NewUserFormSendKeysAction
 * @property {string} [username] username
 * @property {string} [name] name
 * @property {string} [email] email
 * @property {string} [password] password
 * @property {boolean} [isAdmin] is Admin
 * @property {string} [create] create
 */

// Фрагмент-регистрации
class NewUserFormFragment extends BaseFragment {
  constructor(root, name) {
    super(root, name)
    this.username = this.init('input[placeholder="Ім\'я користувача"]', 'Username Field', Input) // root-элемента фрагмента на странице
    this.name = this.init('input[placeholder="Ім\'я"]', 'Name Field', Input) // root-элемента фрагмента на странице
    this.email = this.init('input[placeholder="Імейл"]', 'Email Field', Input) // root-элемента фрагмента на странице
    this.password = this.init('input[placeholder="Пароль"]', 'Password Field', Input) // root-элемента фрагмента на странице
    this.isAdmin = this.init('input[type="checkbox"]', 'Is admin checkbox', Checkbox) // root-элемента фрагмента на странице
    this.create = this.init('.btn.btn-primary', 'Sign Up New User Button', Button) // root-элемента фрагмента на странице
  }
}

module.exports = {
  NewUserFormFragment
}