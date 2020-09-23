import React from 'react';
import './Index.css';
import SelectBox from '../../components/SelectBox/SelectBox';
import TextField from '../../components/TextField/TextField';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import axios from 'axios';

class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cuisines: [],
            tastes: [],
            cuisineOption: null,
            tasteOption: null,
            ingredientOption: null,
        };
        this.cuisineCallback = this.cuisineCallback.bind(this);
        this.tasteCallback = this.tasteCallback.bind(this);
        this.ingredientCallback = this.ingredientCallback.bind(this);
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
    search(event) {
        console.log(this.state);
    }
    render() {
        return (
            <div className="Index h-screen w-screen">
                <div className="flex flex-col justify-center items-center h-full w-full">
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
                </div>
            </div>
        );
    }
}

export default Index;
