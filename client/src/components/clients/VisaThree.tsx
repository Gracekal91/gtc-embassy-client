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

export const VisaThree: React.FC<Step1FormProps> = ({values, handleChange}) => {

    // @ts-ignore
    return (
        <div>
            <h2>Step 2</h2>
            <div className="group-input">
                <TextField
                    name="profession"
                    label="Profession"
                    id="profession"
                    variant="outlined"
                    fullWidth
                    size='small'
                    value={values.profession}
                    onChange={handleChange('profession')}
                />
                <TextField
                    name="residence"
                    label="Principal Residence"
                    variant="outlined"
                    fullWidth
                    value={values.residence}
                    onChange={handleChange('residence')}
                    size='small'
                />
            </div>
            <div className="group-input">
                <TextField
                    name="phoneNumber"
                    label="Phone Number"
                    variant="outlined"
                    fullWidth
                    value={values.phoneNumber}
                    onChange={handleChange('phoneNumber')}
                    size='small'
                />
                <TextField
                    name="otherResidence"
                    label="Other residence"
                    variant="outlined"
                    fullWidth
                    value={values.otherResidence}
                    onChange={handleChange('otherResidence')}
                    size='small'
                />
            </div>
                <TextField
                    name="email"
                    label="Email address"
                    variant="outlined"
                    fullWidth
                    value={values.email}
                    onChange={handleChange('email')}
                    size='small'
                />
            <TextField
                name="citizenshipAtBirth"
                label="Nationality at Birth"
                variant="outlined"
                fullWidth
                value={values.citizenshipAtBirth}
                onChange={handleChange('citizenshipAtBirth')}
                size='small'
            />
            {/*<div className="group-input" style={{marginBottom: '.5rem'}}>*/}
            {/*    <TextField*/}
            {/*        name="citizenship"*/}
            {/*        label="Citizenship"*/}
            {/*        variant="outlined"*/}
            {/*        fullWidth*/}
            {/*        value={values.citizenship}*/}
            {/*        onChange={handleChange('citizenship')}*/}
            {/*        size='small'*/}
            {/*    />*/}

            {/*    <LocalizationProvider dateAdapter={AdapterDateFns}>*/}
            {/*        <Field name='dateOfBirth'>*/}
            {/*            {({field, form}: {field: any, form: any}) => (*/}
            {/*                <DatePicker*/}
            {/*                    id='dateOfBirth'*/}
            {/*                    {...field}*/}
            {/*                    selected={field.value}*/}
            {/*                    onChange={(dateOfBirth) => form.setFieldValue(field.name, dateOfBirth)}*/}
            {/*                />*/}
            {/*            )}*/}
            {/*        </Field>*/}
            {/*    </LocalizationProvider>*/}
            {/*</div>*/}

            <div className="group-input">
                <TextField
                    name="father"
                    label="Father's name"
                    variant="outlined"
                    fullWidth
                    value={values.father}
                    onChange={handleChange('father')}
                    size='small'
                />
                <TextField
                    name="fatherCitizenship"
                    label="Father's Nationality"
                    variant="outlined"
                    fullWidth
                    value={values.fatherCitizenship}
                    onChange={handleChange('fatherCitizenship')}
                    size='small'
                />
            </div>
            <div className="group-input">
                <TextField
                    name="mother"
                    label="Mother's name"
                    variant="outlined"
                    fullWidth
                    value={values.mother}
                    onChange={handleChange('mother')}
                    size='small'
                />
                <TextField
                    name="motherCitizenship"
                    label="Mother's Nationality"
                    variant="outlined"
                    fullWidth
                    value={values.motherCitizenship}
                    onChange={handleChange('motherCitizenship')}
                    size='small'
                />
            </div>
            <TextField
                name="travellingDocumentNumber"
                label="Travel Doc. Number"
                variant="outlined"
                fullWidth
                value={values.travellingDocumentNumber}
                onChange={handleChange('travellingDocumentNumber')}
                size='small'
            />
            <div className="group-input">
                <TextField
                    name="mother"
                    label="Mother's name"
                    variant="outlined"
                    fullWidth
                    value={values.mother}
                    onChange={handleChange('mother')}
                    size='small'
                />
                <TextField
                    name="motherCitizenship"
                    label="Mother's Nationality"
                    variant="outlined"
                    fullWidth
                    value={values.motherCitizenship}
                    onChange={handleChange('motherCitizenship')}
                    size='small'
                />
            </div>
            <div className="group-input">
                <TextField
                    name="mother"
                    label="Mother's name"
                    variant="outlined"
                    fullWidth
                    value={values.mother}
                    onChange={handleChange('mother')}
                    size='small'
                />
                <TextField
                    name="motherCitizenship"
                    label="Mother's Nationality"
                    variant="outlined"
                    fullWidth
                    value={values.motherCitizenship}
                    onChange={handleChange('motherCitizenship')}
                    size='small'
                />
            </div>
            <Divider sx={{marginTop: '.5rem', marginBottom: '.5rem'}}/>

            <FormLabel id="demo-row-radio-buttons-group-label"
                       sx={{marginLeft: '.2rem', marginTop: '.5rem'}}>Type of Passport</FormLabel>
            <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                sx={{
                    '& .MuiSvgIcon-root': {
                        fontSize: 20,
                    },
                }}
                value={values.passportType}
                onChange={handleChange('passportType')}
            >
                <FormControlLabel value="ordinary" control={<Radio/>} label="Ordinary"/>
                <FormControlLabel value="diplomatic" control={<Radio/>} label="Diplomatic"/>
                <FormControlLabel value="service" control={<Radio/>} label="Service"/>
                <FormControlLabel value="other" control={<Radio/>} label="Other"/>
            </RadioGroup>
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

