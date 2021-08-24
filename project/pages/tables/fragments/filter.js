// @ts-check
const {BaseFragment} = require('../../../../lib')


class FilterFragment extends BaseFragment {
  constructor(root, name) {
    super(root, name)
    this.manufacturer = root.$('input[placeholder="Виробник"]')
    this.workingVolume = root.$('input[placeholder = "Робочий об\'єм"]')
    this.price = root.$('input[placeholder="Ціна"]')
    this.filter = root.$('.btn.btn-default')
  }
}

module.exports = {
  FilterFragment
}