import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import Modal from './Modal'
import SectionTitle from './SectionTitle'

import { showModal } from '../reducers/modalReducer'
import { businessesInit } from '../reducers/businessesReducer'
import { addNewItem } from '../reducers/itemReducer'

import useForm from '../hooks/useForm'

import inviteUserIcon from '../public/invite-user-icon.svg'

import '../css/itemForm.css'

export default function ItemForm () {
  const businesses = useSelector(state => state.businesses)

  const { handleChange, values, errors } = useForm()

  const dispatch = useDispatch()
  const history = useHistory()
  const { t } = useTranslation('global')

  useEffect(() => {
    dispatch(businessesInit())
  }, [])

  const handleSubmit = async (event) => {
    event.preventDefault()

    const isBusiness = businesses.some(business => business.email === values.email)

    if (isBusiness) {
      const itemObject = {
        title: values.title,
        content: values.content,
        memberEmail: values.email
      }

      dispatch(addNewItem(itemObject))

      history.push('/items')
    } else {
      dispatch(showModal())
    }
  }

  return (
    <div className='DealsFormContainer'>
      <SectionTitle>
        {t('create_contract_page.contracts')}
      </SectionTitle>
      <div className='DealsFormCard'>
        <div>{t('create_contract_page.title')}</div>
        <form onSubmit={handleSubmit} className='DealsFormForm'>
          <div className='DealsFormFieldGroup'>
            <label>{t('create_contract_page.contract_title')}</label>
            <input
              className='DealsFormField'
              type='text'
              name='title'
              placeholder={t('create_contract_page.contract_title_placeholder')}
              onChange={handleChange}
              required
            />
            {errors.title && <span>{errors.title}</span>}
          </div>

          <div className='DealsFormFieldGroup'>
            <label>{t('create_contract_page.content')}</label>
            <textarea
              className='DealsFormTextarea'
              name='content'
              placeholder={t('create_contract_page.content_placeholder')}
              onChange={handleChange}
              required
            />
            {errors.content && <span>{errors.content}</span>}
          </div>

          <div className='DealsFormFieldGroup'>
            <label>{t('create_contract_page.email')}</label>
            <input
              className='DealsFormField'
              type='email'
              name='email'
              placeholder={t('create_contract_page.email_placeholder')}
              onChange={handleChange}
              required
            />
            {errors.email && <span>{errors.email}</span>}
          </div>

          <button type='submit' className='DealsFormSaveButton'>
            {t('create_contract_page.save')}
          </button>
        </form>
      </div>
      <Modal buttonName={t('create_contract_page.invite_user')} cancelButtonName={t('create_contract_page.cancel')}>
        <img
          alt=''
          src={inviteUserIcon}
          width='100'
          height='100'
        />
        <h6>{t('create_contract_page.dont_have_account')}</h6>
        {values.email} {t('create_contract_page.want_to_send_invitation')}
      </Modal>
    </div>
  )
}
