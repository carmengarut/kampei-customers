import { Route, Switch, Redirect } from 'react-router-dom'

import LoginForm from './components/LoginForm'
import RegistrationForm from './components/RegistrationForm'
import OrderForm from './components/OrderForm'
import Profile from './Profile'
import { useSelector } from 'react-redux'
import Users from './Users'
import LandingPage from './LandingPage'
import ItemDetails from './components/ItemDetails'
import Menu from './Menu'
import ItemForm from './components/ItemForm'

export default function RouterApp () {
  const user = useSelector(state => state.user)

  return (

    <Switch>
      <Route path='/items/:id'>
        <ItemDetails />
      </Route>

      <Route path='/profile'>
        <Profile />
      </Route>

      <Route path='/menu'>
        <Menu />
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
        <Menu />
      </Route>
    </Switch>
  )
}
