import { version } from '../package.json'
import { ElDivider } from './components/divider/'
import { ElAvatar } from './components/avatar'
import { ElLink } from './components/link/'
import { ElIcon } from './components/icon/'
import { ElBadge } from './components/badge/'
import { ElAlert } from './components/alert'

import {
  ElAside,
  ElContainer,
  ElFooter,
  ElHeader,
  ElMain,
} from './components/container/'
import { ElEmpty } from './components/empty/'
import { ElCard } from './components/card/'
import { ElButton } from './components/button/'
import { ElForm } from './components/form/'
import '/theme/src/icon.scss'

const components = [
  ElDivider,
  ElIcon,
  ElBadge,
  ElAvatar,
  ElLink,
  ElContainer,
  ElHeader,
  ElAside,
  ElMain,
  ElFooter,
  ElEmpty,
  ElCard,
  ElButton,
  ElAlert,
  ElForm,
]
function install(app) {
  components.forEach((component) => {
    app.use(component)
  })
}

const element3 = {
  version,
  install,
}

export {
  ElDivider,
  ElIcon,
  ElBadge,
  ElAvatar,
  ElLink,
  ElContainer,
  ElHeader,
  ElAside,
  ElMain,
  ElFooter,
  ElEmpty,
  ElCard,
  ElButton,
  ElAlert,
  ElForm,
}
export default element3
