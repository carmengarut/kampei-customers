import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useHistory, useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import MenuSection from '../components/MenuSection'
import Modal from '../components/Modal'

import { hideModal } from '../reducers/modalReducer'

import successIcon from '../public/success-icon.svg'

import '../css/menu.css'
import { itemInit } from '../reducers/itemReducer'

export default function Menu () {
  const { id } = useParams()
  const history = useHistory()
  const { t } = useTranslation('global')
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(itemInit(id))
  }, [])

  return (
    <div className='m-container'>

      <div className='m-button-container'>
        <button onClick={() => history.push('/edit-menu')} className='m-edit-button-top'>{t('menu.edit_menu')}</button>
      </div>
      <div className='m-box'>
        <div>{t('menu.menu_details')}</div>
        <br />
        <MenuSection category='blendedDrinks' />
        <MenuSection category='softDrinks' />
      </div>
      <div className='m-button-container'>
        <button onClick={() => history.push('/edit-menu')} className='m-edit-button-bottom'>{t('menu.edit_menu')}</button>
      </div>

      <Modal
        action={() => {
          dispatch(hideModal())
        }}
        displayCancelButton='none'
        buttonName={t('menu.accept')}
      >
        <img
          alt=''
          src={successIcon}
          width='100'
          height='100'
        />
        <h6>{t('menu.menu_created')}</h6>
        {t('menu.successfully_created')}
      </Modal>
    </div>
  )
}
