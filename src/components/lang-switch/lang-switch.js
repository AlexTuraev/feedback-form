import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

const LangSwitch = ({lang, changeLang}) => {
    const classes = useStyles();

    const handleChange = (event) => {
        changeLang(event.target.value);
    };

    return (
        <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-label">{lang === 'RU' ? 'Язык' : 'Language'}</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={lang}
                onChange={handleChange}
            >
                <MenuItem value={'RU'}>Русский</MenuItem>
                <MenuItem value={'EN'}>English</MenuItem>
            </Select>
        </FormControl>
    );
}

export default LangSwitch;