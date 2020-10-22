import axios from 'axios';

class TasteAPI {
    static async GetAll() {
        let res = await axios.get(`${process.env.REACT_APP_API_PATH}/api/v1/tastes/all`);
        return res;
    }
}

export default TasteAPI;
