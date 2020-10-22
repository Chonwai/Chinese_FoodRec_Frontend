import axios from 'axios';

class DishAPIs {
    static async GetSpecifyDishesByFilter(data) {
        let dishsRes = await axios.get(`${process.env.REACT_APP_API_PATH}/api/v1/dishes`, {
            params: {
                ingredient: data.ingredient,
                chinese_cuisine: data.chinese_cuisine,
                taste: data.taste,
            },
        });
        return dishsRes.data.message;
    }
}

export default DishAPIs;
