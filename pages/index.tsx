import { Inter } from 'next/font/google'
import Counter from '@components/components/Counter'
import User from '@components/components/User'
import LoginForm from '@components/components/LoginForm'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const books = [
    { title: 'The Catcher in the Rye', author: 'J.D. Salinger' },
    { title: 'To Kill a Mockingbird', author: 'Harper Lee' },
    { title: '1984', author: 'George Orwell' },
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
    { title: 'Animal Farm', author: 'George Orwell' }
  ];

  const groupedByAuthor = (arr: any[], book: string | number) => {
    return arr.reduce((acc, curr) => {
      const key = curr[book];
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(curr);
      return acc;
    }, {});
  }


const getPositiveNumbers = (arr: number[]) => {
  console.log(arr.filter((num) => num > 0)) 
}
getPositiveNumbers([1, -2, 3, 0, -4, 5]); // should return [1, 3, 5]
getPositiveNumbers([-1, -2, -3]); // should return []
getPositiveNumbers([]); // should return []

  return (
    <>
      
      <div className='flex text-center mt-5 space-y-2 flex-col items-center h-max'>
        
        <div>
        <LoginForm/>
        </div>
        
        <div className='space-y-2 p-12'>
        <Counter />
        </div>

        <div>
        <User/>
        </div>
      </div>
    </>
  )
}
