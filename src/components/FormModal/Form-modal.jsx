import { useState } from 'react'
import Form from '../Form/Form'

export const FormModal = () => {
  const [modalType, setModalType] = useState('login')
  let form

  if (modalType === 'registration') {
    return (
      <Form
        title="Регистрация"
        input={{ email: 'Email', password: 'Пароль' }}
        button={{ submit: 'Зарегистроваться', redirect: 'Войти' }}
        infoText={
          'Регистрируясь на сайте, вы соглашаетесь с нашими Правилами и Политикой конфиденциальности и соглашаетесь на информационную рассылку.'
        }
        formType="registration"
        changeType={setModalType}
        redirect={'login'}
      />
    )
  }
  if (modalType === 'login') {
    return (
      <Form
        title="Вход"
        input={{ email: 'Email', password: 'Пароль' }}
        button={{ submit: 'Войти', redirect: 'Регистрация' }}
        infoText={'Восстановить пароль'}
        formType="login"
        changeType={setModalType}
        redirect={'registration'}
      />
    )
  }
  if (modalType === 'reset') {
    return (
      <Form
        title="Восстановление пароля"
        input={{ email: 'Email' }}
        button={{ submit: 'Отправить' }}
        infoText={'Срок действия временного пароля 24 ч.'}
        formType="reset"
        infoTextHeader="Для получения временного пароля необходимо ввести email, указанный при регистрации."
        changeType={setModalType}
      />
    )
  }
  return <></>
}
