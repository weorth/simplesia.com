
import CardItem from '@/containers/cards/CardItem.vue'
import CardsList from '@/containers/cards/CardsList.vue'

import DataForm from '@/containers/data/DataForm.vue'
import DataTable from '@/containers/data/DataTable.vue'

import ColumnLayout from '@/containers/layouts/ColumnLayout.vue'
import GridLayout from '@/containers/layouts/GridLayout.vue'
import RowLayout from '@/containers/layouts/RowLayout.vue'

import CountryMenu from '@/containers/menus/CountryMenu.vue'
import LegalMenu from '@/containers/menus/LegalMenu.vue'
import PrivateMenu from '@/containers/menus/PrivateMenu.vue'
import PublicMenu from '@/containers/menus/PublicMenu.vue'

import CenterPage from '@/containers/pages/CenterPage.vue'
import FullPage from '@/containers/pages/FullPage.vue'

import TabItem from '@/containers/tabs/TabItem.vue'
import TabsList from '@/containers/tabs/TabsList.vue'

import AppFooter from '@/containers/AppFooter.vue'
import AppHeader from '@/containers/AppHeader.vue'
import HeroArea from '@/containers/HeroArea.vue'

export default {
  'card-item': CardItem,
  'cards-list': CardsList,

  'data-form': DataForm,
  'data-table': DataTable,

  'column-layout': ColumnLayout,
  'grid-layout': GridLayout,
  'row-layout': RowLayout,

  'country-menu': CountryMenu,
  'legal-menu': LegalMenu,
  'private-menu': PrivateMenu,
  'public-menu': PublicMenu,

  'center-page': CenterPage,
  'full-page': FullPage,

  'tab-item': TabItem,
  'tabs-list': TabsList,

  'app-footer': AppFooter,
  'app-header': AppHeader,
  'hero-area': HeroArea,
}
