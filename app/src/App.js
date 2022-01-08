import { BrowserRouter } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { userSet } from './reducers/userReducer'
import Header from './components/Header'
import RouterApp from './RouterApp'
import HeaderWeb from './components/HeaderWeb'

const App = () => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedUser')
    if (loggedUserJSON) {
      const userToSet = JSON.parse(loggedUserJSON)
      dispatch(userSet(userToSet))
    }
  }, [])

  return (
    <BrowserRouter>
      {
        user.email
          ? <Header />
          : <HeaderWeb />
      }
      <RouterApp />
    </BrowserRouter>
  )
}

export default App
