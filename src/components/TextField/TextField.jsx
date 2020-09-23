import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: '25ch',
    },
}));

export default function LayoutTextFields(props) {
    const classes = useStyles();
    const handleChange = event => {
        if (props.callback) {
            props.callback(event.target.value);
        }
    };
    return (
        <div className={classes.root}>
            <div>
                <TextField
                    label={props.label}
                    id="margin-normal"
                    placeholder="例如: 蛋"
                    className={classes.textField}
                    helperText={props.helper}
                    margin="dense"
                    onChange={handleChange}
                />
            </div>
        </div>
    );
}
