import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Field } from 'formik';
import {useState} from "react";
import {countries} from '../../../data/countries'

interface Country{
    handleChange: any
    values: any
}

export const CountrySelect: React.FC<Country> = () => {

    const[country, setCountry]: any = useState(null);
    localStorage.setItem('country', JSON.stringify(country));

    // @ts-ignore
    return (
        <Field name='country_of_birth'>
            {({field, form}: {field: any,form: any }) => (
        <Autocomplete id="country_of_birth"
            {...field}
            selected={field?.value}
                      onChange={(event, value) => {
                          // @ts-ignore
                          form.setFieldValue(field.name, value)
                          //set country object
                              setCountry(value)
                      }
        }

            sx={{ width: '100%' }}
            size="small"
            options={countries}
            autoHighlight
            getOptionLabel={(option: any) => option?.label || ''}
            renderOption={(props, option) => (
                <Box component="li" sx={{ fontSize: '.65rem', '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                    <img
                        loading="lazy"
                        width="20"
                        // @ts-ignore
                        srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                        // @ts-ignore
                        src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                        alt=""
                    />
                    {/*@ts-ignore*/}
                    {option.label} ({option.code}) +{option.phone}
                </Box>
            )}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label="Choose a country"
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



