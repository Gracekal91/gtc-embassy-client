import React, {useState} from 'react';
import {TextField, Button, Divider, FormControl, InputLabel, Select, MenuItem} from '@mui/material';

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
            <h2>Step 3</h2>
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
                name="citizenshipAtBirth"
                label="Travelling Document. Nbr"
                variant="outlined"
                fullWidth
                value={values.citizenshipAtBirth}
                onChange={handleChange('citizenshipAtBirth')}
                size='small'
            />
            <div className="group-input" style={{marginBottom: '.5rem'}}>
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
                name="mother"
                label="Issued by"
                variant="outlined"
                fullWidth
                value={values.mother}
                onChange={handleChange('mother')}
                size='small'
            />
            <div className="group-input">
                <TextField
                    name="mother"
                    label="Residence permit number"
                    variant="outlined"
                    fullWidth
                    value={values.mother}
                    onChange={handleChange('mother')}
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
            <Divider sx={{marginTop: '.5rem', marginBottom: '.5rem'}}/>
            <Select
                label="Purpose of travel"
                fullWidth
                size='small'
                value={values.passportType}
                onChange={handleChange('passportType')}
                displayEmpty
                inputProps={{ 'aria-label': 'Purpose of travel' }}
                sx={{
                    marginBottom: '.5rem'
                }}
            >
                <MenuItem value="" disabled>
                    Select Purpose
                </MenuItem>
                <MenuItem value="ordinary">Family visit</MenuItem>
                <MenuItem value="diplomatic">Service mission</MenuItem>
                <MenuItem value="service">Official mission</MenuItem>
                <MenuItem value="other">Tourism</MenuItem>
                <MenuItem value="ordinary">Business</MenuItem>
                <MenuItem value="diplomatic">Study</MenuItem>
                <MenuItem value="service">Scientific - Cultural - Sport</MenuItem>
                <MenuItem value="other">NGO Member</MenuItem>
                <MenuItem value="service">Journalist</MenuItem>
                <MenuItem value="other">Conference - Religious</MenuItem>
            </Select>
            <TextField
                name="motherCitizenship"
                label="Destination in D.R.Congo"
                variant="outlined"
                fullWidth
                value={values.motherCitizenship}
                onChange={handleChange('motherCitizenship')}
                size='small'
            />
            <div className="group-input">
                <TextField
                    name="mother"
                    label="Ticket reference"
                    variant="outlined"
                    fullWidth
                    value={values.mother}
                    onChange={handleChange('mother')}
                    size='small'
                />
                <TextField
                    name="motherCitizenship"
                    label="Ticket issued by"
                    variant="outlined"
                    fullWidth
                    value={values.motherCitizenship}
                    onChange={handleChange('motherCitizenship')}
                    size='small'
                />
            </div>
        </div>
    );
}

