import Vue from 'vue'
import {
  Button,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup
} from 'element-ui'

const elements = [
  Button,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup
]

elements.forEach(ele => Vue.use(ele))
