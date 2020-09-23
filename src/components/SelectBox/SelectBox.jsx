import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import './SelectBox.css';

const useStyles = makeStyles(theme => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

export default function CustomizedSelects(props) {
    const classes = useStyles();
    const [val, setVal] = React.useState('');
    const items = [];
    const handleChange = event => {
        setVal(event.target.value);
        if (props.callback) {
            props.callback(event.target.value);
        }
    };
    if (props.items != null) {
        for (const item of props.items) {
            items.push(
                <MenuItem key={item.id} value={item.name}>
                    {item.name}
                </MenuItem>
            );
        }
    }
    return (
        <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-helper-label">{props.label}</InputLabel>
            <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={val}
                onChange={handleChange}
            >
                {items}
            </Select>
            <FormHelperText>{props.helper}</FormHelperText>
        </FormControl>
    );
}
