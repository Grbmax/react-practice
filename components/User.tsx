import userData from "@components/pages/api/userData";
import { userInfo } from "os";
import { useEffect, useState, useRef } from "react";


interface UserInfo {
    name: {
        first: string;
        last: string;
        title: string;
    };

    picture: {
        thumbnail: string;
    }
}

const getUserName = (userInfo: UserInfo) => {
    const { name: { first, last, title } } = userInfo;
    return `${title}. ${first} ${last}`
}

const User = () => {
    // const [userJSON, setUserJSON] = useState("");
    const [nextPage, setNextPage] = useState(1)
    const [userInfos, setUserInfos] = useState<any>([])
    const dataFetched = useRef(false);

    const fetchData = async () => {
        const data = await userData(nextPage);
        console.log(data)
        if (data !== undefined) {
            // setUserJSON(JSON.stringify(data, null) || "No User Data Found");
            const newUserInfos = [
                ...userInfos,
                ...data.results,
            ]
            setUserInfos(newUserInfos)
            setNextPage(data.info.page + 1);
        }
    };

    useEffect(() => {
        if (dataFetched.current) return;
        dataFetched.current = (true)
        fetchData();
    }, [])

    return (
        <div className="space-y-3 mt-3">
            <button
                onClick={() => fetchData()}
                className="border-2 rounded-2xl border-violet-700 px-5
            bg-violet-700 text-white" >
                Fetch Another User
            </button>
            {
                (!dataFetched.current) ? (
                    <pre className="w-screen break-words whitespace-pre-wrap">
                        Loading...
                    </pre>
                ) : (
                    <>
                        {
                            userInfos.map((userInfo: UserInfo, idx: number) => (
                                <div className="flex flex-col items-center 
                                rounded-2xl space-y-1 border-violet-700 p-3
                                border-2"
                                    key={idx}>
                                    <img src={userInfo.picture.thumbnail}></img>
                                    <p>{getUserName(userInfo)}</p>
                                </div>
                            ))
                        }
                    </>
                )
            }
        </div>
    )
}

export default User;