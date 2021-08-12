import axios from "axios";

export const fetchUsers = async () => {

    const result = await axios({
        method:'GET',
        url:'https://reqres.in/api/users?page=1'
    });

    return result;
}