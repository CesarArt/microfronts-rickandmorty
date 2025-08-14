import { useEffect, useState } from "react"

const useStorageToken = () => {
  const [userToken, setUserToken] = useState<string | null>()
  const [loadToken, setLoadToken] = useState(false)

  useEffect(() => {
    loadUserToken()
  }, [])

  const addUserToken = (token: string) => {
    localStorage.setItem("user_token", token)
    setUserToken(token)
    return true
  }
  const removeUserToken = () => {
    localStorage.removeItem("user_token")
    setUserToken(null)
    return true
  }

  const loadUserToken = () => {
    try {
      setLoadToken(true)
      const storedUser = localStorage.getItem("user_token")
      if (storedUser) {
        setUserToken(storedUser)
      } else {
        setUserToken(null)
      }
    } catch (error) {
      console.error("Error loading user token from localStorage:", error)
      setLoadToken(false)
    }
  }
  return { userToken,loadToken, addUserToken, removeUserToken, loadUserToken }
}
export default useStorageToken
