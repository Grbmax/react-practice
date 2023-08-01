import { count } from 'console';
import React, { useState } from 'react';

const test = () => {
    const [counter, setCounter] = useState(0);

    const books = [
        { title: 'The Catcher in the Rye', author: 'J.D. Salinger' },
        { title: 'To Kill a Mockingbird', author: 'Harper Lee' },
        { title: '1984', author: 'George Orwell' },
        { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
        { title: 'Animal Farm', author: 'George Orwell' }
    ];

    const gbA = (arr: any[], author: string | number) => {
        return arr.reduce((acc, curr) => {
            const key = curr[author]
            if (!acc[key]) {
                acc[key] = [];
            }
            acc[key].push(curr)
            return acc;
        }, {})
    }

    // console.log(gbA(books, 'author'))



    const num = [1, 2, 3, 4]
    const test = (arr: any[]) => {
        arr.reduce((acc, curr) => {
            console.log(acc + curr);
            return acc + curr;
        }, 0);
    };

    const arr = ["wake up", "brush", "exercise"]


    const handleDelete = (id: number) => {
        console.log("Item Deleted")
    }

    return (
        <div className='flex items-center justify-center'>
            <ul>
                {
                    arr.map((a, id) =>
                        <div className='flex flex-row space-x-2' key={id}>
                            <li>{a}</li>
                            <button onClick={() => handleDelete(id)} className='border-2 border-black'>Delete Item</button>
                        </div>
                    )
                }
            </ul>
        </div>
    );
}
export default test;