import { Inter } from 'next/font/google'
import Counter from '@components/components/Counter'
import User from '@components/components/User'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <div className='flex text-center mt-5 space-y-2 flex-col justify-center items-center h-max'>
        <Counter />
        <div>
        <User/>
        </div>
      </div>
    </>
  )
}
