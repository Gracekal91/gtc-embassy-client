import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Field } from 'formik';
import {useState} from "react";


interface Country{
    handleChange: any
    values: any
}

export const CitySelect: React.FC<Country> = ({handleChange, values}) => {
    const [cityOfBirth, setCityOfBirth]: any = useState(null);
    let selectedCountry: any;

    if(localStorage.getItem('country')){
        const countryObj: any = localStorage.getItem('country');
        selectedCountry = JSON.parse(countryObj)
    }
    // @ts-ignore
    return (
        <Field name='city_of_birth'>
            {({field, form}: {field: any, form: any}) => (
                <Autocomplete id="city_of_birth"
                    {...field}
                              selected={field.value}
                    onChange={(event, value) => {
                        // @ts-ignore
                        form.setFieldValue(field.name, value)
                    }}
                    sx={{ width: '100%' }}
                    size="small"
                    // @ts-ignore
                    options = {selectedCountry ? selectedCountry.cities : ['select country first']}
                    autoHighlight
                    getOptionLabel={(option: any) => option}
                    renderOption={(props: any, option: any) => (
                        <Box component="li" sx={{fontSize: '.65rem', margin:'0' }} {...props}>
                            {/*@ts-ignore*/}
                            {option}
                        </Box>
                    )}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            label="Choose a city"
                            inputProps={{
                                ...params.inputProps,
                                autoComplete: 'new-password', // disable autocomplete and autofill
                            }}
                        />
                    )}
                />
            )}
        </Field>
    );
}
