class utils {
    static generateResultList(data) {
        let temp = {
            name: null,
            regional_cuisine: null,
            taste: null,
            ingredients: null,
            description: null,
        };
        for (let i = 0; i < data.length; i++) {
            temp.name = data[i].name;
            temp.regional_cuisine = data[i].regional_cuisine;
            temp.taste = data[i].taste;
            temp.ingredients = data[i].ingredients;
            temp.description = data[i].description;
            data[i] = JSON.parse(JSON.stringify(temp));
        }
        return data;
    }
}

export default utils;
