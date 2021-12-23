import { useEffect } from 'react';
import { useSearchParams, useLocation, useNavigate } from 'react-router-dom'


const Me = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const [searchParams, setSearchParams] = useSearchParams()

  useEffect(() => {
    const redirectToHomePage = searchParams.get('redirectToHome')
    if (redirectToHomePage === 'yes') {
      navigate('/')
    }
    console.log(location)
    console.log('Value of redirect:' + searchParams.get('redirect'))
  }, [])
  return (
    <div>
      You are Naseel      
      </div>
  )
}

export default Me
