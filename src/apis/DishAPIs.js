import axios from 'axios';

class DishAPIs {
    static async GetSpecifyDishesByFilter(data) {
        let dishsRes = await axios.get(`http://127.0.0.1:8001/api/v1/dishes`, {
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
