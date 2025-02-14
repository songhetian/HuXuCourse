import {use} from "react";
import axios from "axios";


// async  function getPerson() {
//     const data =  await axios.get("https://jsonplaceholder.typicode.com/posts/1");
//     return await data.data;
// }

const getPerson = async (id = 1) => {
    const data = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
    return await  data.data;
}
const personPromise = getPerson();
function FetchTodo() {
    const data = use(personPromise);
    return (
        <div>
            {data.body}
        </div>
    );
}

export default FetchTodo;