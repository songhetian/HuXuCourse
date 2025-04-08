'use client'; // 必须标记为客户端组件
import useSWR from "swr";
export async function fetchData(id) {
    const res = await fetch(`https://dummyjson.com/users/${id}`);
    const data = await res.json();
    return data;
}

export const fetcher = (...args) => fetch(...args).then((res) => res.json())


const UserProfile = () => {
    const { data, error, isLoading } = useSWR('https://dummyjson.com/users/2', fetcher);

    if (error) return <div>Failed to load</div>;
    if (isLoading) return <div>Loading...</div>;

    return <div>Hello, {data.lastName}!</div>;
}

export default UserProfile;