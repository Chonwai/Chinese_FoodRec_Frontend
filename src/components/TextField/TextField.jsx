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

    return (
        <div className={classes.root}>
            <div>
                <TextField
                    label={props.label}
                    id="margin-normal"
                    defaultValue="Default Value"
                    className={classes.textField}
                    helperText={props.helper}
                    margin="normal"
                />
            </div>
        </div>
    );
}
