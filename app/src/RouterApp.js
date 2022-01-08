import { Route, Switch, Redirect } from 'react-router-dom'

import LoginForm from './components/LoginForm'
import RegistrationForm from './components/RegistrationForm'
import OrderForm from './components/OrderForm'
import Profile from './Profile'
import { useSelector } from 'react-redux'
import Users from './Users'
import LandingPage from './LandingPage'
import ItemForm from './components/ItemForm'
import Menu from './components/Menu'

export default function RouterApp () {
  const user = useSelector(state => state.user)

  return (

    <Switch>
      <Route path='/menu/:id'>
        <Menu />
      </Route>

      <Route path='/profile'>
        <Profile />
      </Route>

      <Route path='/users'>
        <Users />
      </Route>

      <Route path='/create-item'>
        <ItemForm />
      </Route>

      <Route path='/landing'>
        <LandingPage />
      </Route>

      <Route path='/order/:id'>
        <OrderForm />
      </Route>

      <Route
        path='/login' render={() => {
          return user.email ? <Redirect to='/' /> : <LoginForm />
        }}
      />

      <Route
        path='/register' render={() => {
          return user.email ? <Redirect to='/' /> : <RegistrationForm />
        }}
      />

      <Route path='/'>
        <LandingPage />
      </Route>
    </Switch>
  )
}
