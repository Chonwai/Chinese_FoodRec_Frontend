import React from 'react';
import './Index.css';
import InputBox from '../../components/InputBox/InputBox';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';

function Index() {
    return (
        <div className="Index h-screen w-screen">
            <div className="flex flex-col justify-center items-center h-full w-full">
                <h1 className="font-bold text-4xl">Chinese FoodRec</h1>
                <div className="flex justify-center items-center">
                    <InputBox label="Ingredients" helper="Please select the ingredient" />
                    <InputBox label="Tastes" helper="Please select the taste" />
                    <InputBox label="Cuisines" helper="Please select the cuisine" />
                    <Button
                        variant="contained"
                        color="default"
                        className="h-auto"
                        size="large"
                        startIcon={<SearchIcon />}
                    >
                        Search
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default Index;
