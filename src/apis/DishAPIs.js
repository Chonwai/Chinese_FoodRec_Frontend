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
        console.log(dishsRes);
        return dishsRes.data;
    }
}

export default DishAPIs;
