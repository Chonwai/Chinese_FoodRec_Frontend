import React from 'react';
import './Index.css';
import SelectBox from '../../components/SelectBox/SelectBox';
import TextField from '../../components/TextField/TextField';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import DishAPI from '../../apis/DishAPIs';
import ResultDialog from '../../components/ResultDialog/ResultDialog';
import utils from '../../utils/utils';

class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cuisines: [],
            tastes: [],
            dishes: [],
            cuisineOption: '',
            tasteOption: '',
            ingredientOption: '',
            isShowResult: false,
        };
        this.cuisineCallback = this.cuisineCallback.bind(this);
        this.tasteCallback = this.tasteCallback.bind(this);
        this.ingredientCallback = this.ingredientCallback.bind(this);
        this.isShowResultCallback = this.isShowResultCallback.bind(this);
        this.search = this.search.bind(this);
    }
    async componentDidMount() {
        let cuisinesRes = await axios.get('http://localhost:3000/api/chinese/cuisines/all');
        let tastesRes = await axios.get('http://localhost:3000/api/tastes/all');
        this.setState({
            cuisines: cuisinesRes.data,
            tastes: tastesRes.data,
        });
    }
    cuisineCallback(cuisineOption) {
        this.setState({
            cuisineOption: cuisineOption,
        });
    }
    tasteCallback(tasteOption) {
        this.setState({
            tasteOption: tasteOption,
        });
    }
    ingredientCallback(ingredientOption) {
        this.setState({
            ingredientOption: ingredientOption,
        });
    }
    isShowResultCallback(isShowResult) {
        this.setState({
            isShowResult: isShowResult,
        });
    }
    async search(event) {
        const formData = {
            ingredient: this.state.ingredientOption,
            chinese_cuisine: this.state.cuisineOption,
            taste: this.state.tasteOption,
        };
        let res = await DishAPI.GetSpecifyDishesByFilter(formData);
        res = await utils.generateResultList(res);
        this.setState({
            dishes: res,
            isShowResult: true,
        });
    }
    render() {
        return (
            <div className="Index h-screen w-screen p-4">
                <div className="filter-container flex flex-col justify-center items-center h-full w-full">
                    <h1 className="font-bold text-4xl">Chinese FoodRec</h1>
                    <div className="flex justify-center items-center">
                        <SelectBox
                            label="Cuisines"
                            helper="Please select the cuisine"
                            items={this.state.cuisines.cuisines}
                            callback={this.cuisineCallback}
                        />
                        <SelectBox
                            label="Tastes"
                            helper="Please select the taste"
                            items={this.state.tastes.tastes}
                            callback={this.tasteCallback}
                        />
                        <TextField
                            label="Ingredients"
                            helper="Please type the ingredient"
                            callback={this.ingredientCallback}
                        />
                        <Button
                            variant="contained"
                            color="default"
                            className="h-auto"
                            size="large"
                            startIcon={<SearchIcon />}
                            onClick={this.search}
                        >
                            Search
                        </Button>
                    </div>
                    <ResultDialog
                        isShow={this.state.isShowResult}
                        data={this.state.dishes}
                        callback={this.isShowResultCallback}
                    ></ResultDialog>
                </div>
            </div>
        );
    }
}

export default Index;
