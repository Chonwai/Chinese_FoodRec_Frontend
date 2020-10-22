import axios from 'axios';

class CuisineAPI {
    static async GetAll() {
        let res = await axios.get(`${process.env.REACT_APP_API_PATH}/api/v1/chinese/cuisines/all`);
        return res;
    }
}

export default CuisineAPI;
