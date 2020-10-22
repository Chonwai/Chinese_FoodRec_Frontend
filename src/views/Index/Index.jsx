import React from 'react';
import './Index.css';
import SelectBox from '../../components/SelectBox/SelectBox';
import TextField from '../../components/TextField/TextField';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import DishAPI from '../../apis/DishAPIs';
import ResultDialog from '../../components/ResultDialog/ResultDialog';
import utils from '../../utils/utils';
import TasteAPI from '../../apis/TasteAPI';
import CuisineAPI from '../../apis/CuisineAPI';

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
        let cuisinesRes = await CuisineAPI.GetAll();
        let tastesRes = await TasteAPI.GetAll();
        this.setState({
            cuisines: cuisinesRes.data.message,
            tastes: tastesRes.data.message,
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
        res = await utils.generateResultList(res.data.message);
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
                            items={this.state.cuisines}
                            callback={this.cuisineCallback}
                        />
                        <SelectBox
                            label="Tastes"
                            helper="Please select the taste"
                            items={this.state.tastes}
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
