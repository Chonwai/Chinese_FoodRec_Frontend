import axios from 'axios';

class DishAPIs {
    static async GetSpecifyDishesByFilter(data) {
        let dishsRes = await axios.get(`http://localhost:3000/api/dishes`, {
            params: {
                ingredient: data.ingredient,
                chinese_cuisine: data.chinese_cuisine,
                taste: data.taste,
            },
        });
        return dishsRes.data.dishes;
    }
}

export default DishAPIs;
