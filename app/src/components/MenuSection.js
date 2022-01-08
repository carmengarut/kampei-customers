import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'

import ItemsList from './ItemsList'
import Toggable from './Toggable'

export default function MenuSection ({ category }) {
  const items = useSelector(state => state.items)
  const { t } = useTranslation('global')

  const sectionItems = items.filter(item => item.category === category)

  return (
    <>
      {
        (sectionItems.length > 0)
          ? (
            <Toggable buttonLabel={t('menu_section.' + category)}>

              <ItemsList items={sectionItems} />

            </Toggable>)
          : ''
        }
    </>
  )
}
