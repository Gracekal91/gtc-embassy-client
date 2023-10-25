import React, {useState} from 'react';
import {TextField, Button, Divider} from '@mui/material';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';

import {AdapterDateFns} from "@mui/x-date-pickers/AdapterDateFns";
import { DatePicker } from '@mui/x-date-pickers';
import { LocalizationProvider } from '@mui/x-date-pickers';
import styled from "styled-components";
import { Field } from 'formik';
import {CountrySelect} from "./partials/CountrySelect";


interface Step1FormProps {
    values: any;
    handleChange: any;
}

const DatePickerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const VisaTwo: React.FC<Step1FormProps> = ({values, handleChange}) => {

    const [state, setState] = useState({selectedDate: new Date()});

    // @ts-ignore
    return (
        <div>
            <h2>Step 2</h2>
            <div className="group-input">
                <TextField
                    name="name"
                    label="Name"
                    id="name"
                    variant="outlined"
                    fullWidth
                    size='small'
                    value={values.name}
                    onChange={handleChange('name')}
                />
                    <TextField
                        name="maiden_name"
                        label="Maiden name"
                        id="maiden_name"
                        variant="outlined"
                        fullWidth
                        size='small'
                        value={values.maiden_name}
                        onChange={handleChange('maiden_name')}
                    />
            </div>
            <div className="group-input">
                <TextField
                    name="middle_name"
                    label="Middle Name"
                    variant="outlined"
                    fullWidth
                    value={values.middle_name}
                    onChange={handleChange('middle_name')}
                    size='small'
                />
                <TextField
                    name="first_name"
                    label="First Name"
                    variant="outlined"
                    fullWidth
                    value={values.first_name}
                    onChange={handleChange('first_name')}
                    size='small'
                />
            </div>
            <div className="group-input">
                {/*<TextField*/}
                {/*    name="country_of_birth"*/}
                {/*    label="Country of birth"*/}
                {/*    variant="outlined"*/}
                {/*    fullWidth*/}
                {/*    value={values.country_of_birth}*/}
                {/*    onChange={handleChange('country_of_birth')}*/}
                {/*    size='small'*/}
                {/*/>*/}
                <CountrySelect handleChange={handleChange} values={values}/>
                <TextField
                    name="place_of_birth"
                    label="Place of Birth"
                    variant="outlined"
                    fullWidth
                    value={values.place_of_birth}
                    onChange={handleChange('place_of_birth')}
                    size='small'
                />
            </div>
            <TextField
                name="citizenship_at_birth"
                label="Nationality at Birth"
                variant="outlined"
                fullWidth
                value={values.citizenship_at_birth}
                onChange={handleChange('citizenship_at_birth')}
                size='small'
            />
            <div className="group-input" style={{marginBottom: '.5rem'}}>
                <TextField
                    name="citizenship"
                    label="Citizenship"
                    variant="outlined"
                    fullWidth
                    value={values.citizenship}
                    onChange={handleChange('citizenship')}
                    size='small'
                />

                <LocalizationProvider dateAdapter={AdapterDateFns}>
                <Field name='date_of_birth'>
                    {({field, form}: {field: any, form: any}) => (
                        <DatePicker
                        id='dateOfBirth'
                        {...field}
                            selected={field.value}
                        onChange={(date_of_birth) => form.setFieldValue(field.name, date_of_birth)}
                        />
                    )}
                </Field>
                </LocalizationProvider>
            </div>

            <TextField
                sx={{marginBottom: '.5rem'}}
                name="spouse_name"
                label="Spouse's name"
                variant="outlined"
                fullWidth
                value={values.spouse_name}
                onChange={handleChange('spouse_name')}
                size='small'
            />

            <Divider sx={{marginTop: '.5rem', marginBottom: '.5rem'}}/>
            <FormLabel id="demo-row-radio-buttons-group-label"
                       sx={{marginLeft: '.2rem', marginTop: '.5rem'}}>Gender</FormLabel>
            <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                sx={{
                    '& .MuiSvgIcon-root': {
                        fontSize: 20,
                    },
                }}
                value={values.gender}
                onChange={handleChange('gender')}
            >
                <FormControlLabel value="female" control={<Radio/>} label="Female"/>
                <FormControlLabel value="male" control={<Radio/>} label="Male"/>
            </RadioGroup>
            <Divider sx={{marginTop: '.5rem', marginBottom: '.5rem'}}/>
            <FormLabel id="demo-row-radio-buttons-group-label" sx={{marginLeft: '.2rem', marginTop: '.5rem'}}>Marital
                Status</FormLabel>
            <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                sx={{
                    '& .MuiSvgIcon-root': {
                        fontSize: 20,
                    },
                }}
                value={values.marital_status}
                onChange={handleChange('marital_status')}
            >
                <FormControlLabel value="single" control={<Radio/>} label="Single"/>
                <FormControlLabel value="married" control={<Radio/>} label="Married"/>
                <FormControlLabel value="divorced" control={<Radio/>} label="Divorced"/>
                <FormControlLabel value="widow" control={<Radio/>} label="Widow"/>
                <FormControlLabel value="other" control={<Radio/>} label="Other"/>
            </RadioGroup>
        </div>
    );
}

