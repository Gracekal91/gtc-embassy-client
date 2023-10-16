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
                    name="maidenName"
                    label="Maiden Name"
                    variant="outlined"
                    fullWidth
                    value={values.maidenName}
                    onChange={handleChange('maidenName')}
                    size='small'
                />
            </div>
            <div className="group-input">
                <TextField
                    name="middleName"
                    label="Middle Name"
                    variant="outlined"
                    fullWidth
                    value={values.middleName}
                    onChange={handleChange('middleName')}
                    size='small'
                />
                <TextField
                    name="firstName"
                    label="First Names"
                    variant="outlined"
                    fullWidth
                    value={values.firstName}
                    onChange={handleChange('firstName')}
                    size='small'
                />
            </div>
            <div className="group-input">
                <TextField
                    name="placeOfBirth"
                    label="Place of Birth"
                    variant="outlined"
                    fullWidth
                    value={values.placeOfBirth}
                    onChange={handleChange('placeOfBirth')}
                    size='small'
                />
                <TextField
                    name="countryOfBirth"
                    label="Country of Birth"
                    variant="outlined"
                    fullWidth
                    value={values.countryOfBirth}
                    onChange={handleChange('countryOfBirth')}
                    size='small'
                />
            </div>
            <TextField
                name="citizenshipAtBirth"
                label="Nationality at Birth"
                variant="outlined"
                fullWidth
                value={values.citizenshipAtBirth}
                onChange={handleChange('citizenshipAtBirth')}
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
                <Field name='dateOfBirth'>
                    {({field, form}: {field: any, form: any}) => (
                        <DatePicker
                        id='dateOfBirth'
                        {...field}
                            selected={field.value}
                        onChange={(dateOfBirth) => form.setFieldValue(field.name, dateOfBirth)}
                        />
                    )}
                </Field>
                </LocalizationProvider>
            </div>

            <TextField
                sx={{marginBottom: '.5rem'}}
                name="spouseName"
                label="Spouse's name"
                variant="outlined"
                fullWidth
                value={values.spouseName}
                onChange={handleChange('spouseName')}
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
                value={values.maritalStatus}
                onChange={handleChange('maritalStatus')}
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

