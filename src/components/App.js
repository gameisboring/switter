import { useState } from 'react'
import AppRouter from 'components/Router'
import { authService } from 'fbase'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser)
  return (
    <>
      <AppRouter isLoggedIn={isLoggedIn} />
      <footer>
        <p>&copy; CopyRight Switter {new Date().getFullYear()}</p>
      </footer>
    </>
  )
}

export default App
