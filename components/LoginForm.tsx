import { useState } from "react"
import { useRouter } from "next/router"

const LoginForm = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [loggedIn, setLoggedIn] = useState(false)
    const router = useRouter();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (username === 'admin' && password === 'admin') {
            setLoggedIn(true)
            router.push('/admin')
        } else {
            alert('Wrong username or password')
        }
    }

    const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value)
    }

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    }

    return (
        <div>
        <form className='flex flex-col space-y-2' onSubmit={handleSubmit}>
          <input 
            id="username"
            type='text' placeholder='Username' className='border-2 
            border-gray-400 text-center rounded-md'
            onChange={handleUsernameChange}/>
          <input
            id="password" 
            type='password' placeholder='Password' className='border-2
             border-gray-400 text-center rounded-md'
             onChange={handlePasswordChange}/>
          <button className='bg-blue-500 border-2 text-white rounded-md'>Login</button>
        </form>
        </div>
    )
}
export default LoginForm