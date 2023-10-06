import React, {useState} from 'react';
import {TextField, Button, Divider} from '@mui/material';
import { DatePickerProps } from '@mui/lab';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import {AdapterDateFns} from "@mui/x-date-pickers/AdapterDateFns";
import { DatePicker } from '@mui/x-date-pickers';
import { LocalizationProvider } from '@mui/x-date-pickers';
import styled from "styled-components";


interface Step1FormProps {
    formData: {
        name: string;
        maidenName: any;
        middleName: string;
        firstName: string;
        placeOfBirth: string;
        countryOfBirth: string;
        citizenshipAtBirth: string;
        citizenship: string;
        dateOfBirth: any;
        spouseName: string;
        gender: string;
        maritalStatus: string;
        // ... add other fields from your form data
    };
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const DatePickerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const VisaTwo: React.FC<Step1FormProps> = ({ formData, handleChange }) => {

    const [state, setState] = useState({ selectedDate: new Date() });

    return (
        <div>
            <h2>Step 2</h2>
                <form>
                    <div className="group-input">
                        <TextField
                            name="name"
                            label="Name"
                            variant="outlined"
                            fullWidth
                            onChange={(e: any) => {handleChange(e)}}
                            value={formData.name}
                            size='small'
                        />
                        <TextField
                            name="maidenName"
                            label="Maiden Name"
                            variant="outlined"
                            fullWidth
                            value={formData.maidenName}
                            onChange={(e: any) => {handleChange(e)}}
                            size='small'
                        />
                    </div>
                    <div className="group-input">
                    <TextField
                        name="middleName"
                        label="Middle Name"
                        variant="outlined"
                        fullWidth
                        value={formData.middleName}
                        onChange={(e: any) => {handleChange(e)}}
                        size='small'
                    />
                    <TextField
                        name="firstName"
                        label="First Names"
                        variant="outlined"
                        fullWidth
                        value={formData.firstName}
                        onChange={(e: any) => {handleChange(e)}}
                        size='small'
                    />
                    </div>
                    <div className="group-input">
                    <TextField
                        name="placeOfBirth"
                        label="Place of Birth"
                        variant="outlined"
                        fullWidth
                        value={formData.placeOfBirth}
                        onChange={(e: any) => {handleChange(e)}}
                        size='small'
                    />
                        <TextField
                            name="countryOfBirth"
                            label="Country of Birth"
                            variant="outlined"
                            fullWidth
                            value={formData.countryOfBirth}
                            onChange={(e: any) => {handleChange(e)}}
                            size='small'
                        />
                    </div>
                    <TextField
                        name="citizenshipAtBirth"
                        label="Nationality at Birth"
                        variant="outlined"
                        fullWidth
                        value={formData.citizenshipAtBirth}
                        onChange={(e: any) => {handleChange(e)}}
                        size='small'
                    />
                    <div className="group-input" style={{marginBottom: '.5rem'}}>
                    <TextField
                        name="citizenship"
                        label="Citizenship"
                        variant="outlined"
                        fullWidth
                        value={formData.citizenship}
                        onChange={(e: any) => {handleChange(e)}}
                        size='small'
                    />

                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DatePicker
                            label="Date of birth"
                            value={state.selectedDate}

                            // @ts-ignore
                            renderInput={(props) => (
                                <TextField
                                    sx={{fontSize: '.5rem'}}
                                    {...props}
                                    name="dateOfBirth"
                                    label="date of birth"
                                    variant="outlined"
                                    size="medium"
                                    value={state.selectedDate}
                                    onChange={(date: any) => setState({ ...state, selectedDate: date })}
                                />
                            )}
                        />
                    </LocalizationProvider>
                    </div>


                    <TextField
                        sx={{ marginBottom: '.5rem'}}
                        name="spouseName"
                        label="Spouse's name"
                        variant="outlined"
                        fullWidth
                        value={formData.spouseName}
                        onChange={(e: any) => {handleChange(e)}}
                        size='small'
                    />

                    <Divider sx={{marginTop: '.5rem', marginBottom: '.5rem'}}/>
                        <FormLabel id="demo-row-radio-buttons-group-label" sx={{marginLeft: '.2rem', marginTop: '.5rem' }}>Gender</FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                            sx={{
                                '& .MuiSvgIcon-root': {
                                    fontSize: 20,
                                },
                            }}
                            value={formData.gender} // Set the value prop to the selected gender
                            onChange={(e: any) => {handleChange(e)}}
                        >
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                        </RadioGroup>
                    <Divider sx={{marginTop: '.5rem', marginBottom: '.5rem'}}/>
                    <FormLabel id="demo-row-radio-buttons-group-label" sx={{marginLeft: '.2rem', marginTop: '.5rem' }}>Marital Status</FormLabel>
                    <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                        sx={{
                            '& .MuiSvgIcon-root': {
                                fontSize: 20,
                            },
                        }}

                        value={formData.maritalStatus} // Set the value prop to the selected gender
                        onChange={(e: any) => {handleChange(e)}}
                    >
                        <FormControlLabel value="single" control={<Radio />} label="Single" />
                        <FormControlLabel value="married" control={<Radio />} label="Married" />
                        <FormControlLabel value="divorced" control={<Radio />} label="Divorced" />
                        <FormControlLabel value="widow" control={<Radio />} label="Widow" />
                        <FormControlLabel value="other" control={<Radio />} label="Other" />
                    </RadioGroup>
            </form>
        </div>
    );
}