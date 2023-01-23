import { useState } from "react"
import { logUser, regUser, getLogin, logOut } from '../../../features'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from "react"
import { TodoContainer } from '../'
import { Signup, Login } from "../../view"

export const User = () => {
  const userLog = useSelector((state) => state.user)

  const [register, setRegister] = useState(false)
  const [user, setUser] = useState({
    username: '',
    password: '',
    name: '',
    surname: ''
  })

  const dispatch = useDispatch()

  const submitLogin = () => {
    dispatch(logUser(user))
  }

  const submitSigIn = () => {
    dispatch(regUser(user))
  }
  const closeSession = () => {
    setUser('')
    dispatch(logOut())
  }

  useEffect(() => {
    dispatch(getLogin())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const props = { user, setUser, setRegister, submitLogin, register, submitSigIn }

  return (
    <div>
      {userLog.loading && <div className="loadingApp">Loading...</div>}
      {!userLog.loading && !userLog.user.length ? !register ? <Login props={props}/> : <Signup props={props}/> :null}
      {!userLog.loading && userLog.user.length ? <TodoContainer user={userLog} closeSession={closeSession} /> : null}

    </div>
  )
}
