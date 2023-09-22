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
        field1: string;
        field2: string;
        // ... add other fields from your form data
    };
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}


interface AppState {
    selectedDate: Date;
}

const DatePickerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const VisaTwo: React.FC<Step1FormProps> = ({ formData, handleChange }) => {

    const [state, setState] = useState<AppState>({ selectedDate: new Date() });

    // @ts-ignore
    // @ts-ignore
    // @ts-ignore
    // @ts-ignore
    return (
        <div>
            <h2>Step 2</h2>
                <form>
                    <div className="group-input">
                        <TextField
                            name="Name"
                            label="Name"
                            variant="outlined"
                            fullWidth
                            value={formData.field1}
                            onChange={handleChange}
                            size='small'
                        />
                        <TextField
                            name="Maiden Name"
                            label="Maiden Name"
                            variant="outlined"
                            fullWidth
                            value={formData.field2}
                            onChange={handleChange}
                            size='small'
                        />
                    </div>
                    <div className="group-input">
                    <TextField
                        name="Middle Name"
                        label="Middle Name"
                        variant="outlined"
                        fullWidth
                        value={formData.field1}
                        onChange={handleChange}
                        size='small'
                    />
                    <TextField
                        name="First Names"
                        label="First Names"
                        variant="outlined"
                        fullWidth
                        value={formData.field2}
                        onChange={handleChange}
                        size='small'
                    />
                    </div>
                    <div className="group-input">
                    <TextField
                        name="Place of Birth"
                        label="Place of Birth"
                        variant="outlined"
                        fullWidth
                        value={formData.field1}
                        onChange={handleChange}
                        size='small'
                    />
                        <TextField
                            name="Country of Birth"
                            label="Country of Birth"
                            variant="outlined"
                            fullWidth
                            value={formData.field1}
                            onChange={handleChange}
                            size='small'
                        />
                    </div>
                    <TextField
                        name="Nationality at Birth"
                        label="Nationality at Birth"
                        variant="outlined"
                        fullWidth
                        value={formData.field2}
                        onChange={handleChange}
                        size='small'
                    />
                    <div className="group-input" style={{marginBottom: '.5rem'}}>
                    <TextField
                        name="Citizenship"
                        label="Citizenship"
                        variant="outlined"
                        fullWidth
                        value={formData.field1}
                        onChange={handleChange}
                        size='small'
                    />

                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DatePicker
                            label="Date of birth"
                            value={state.selectedDate}
                            onChange={(date: any) => setState({ ...state, selectedDate: date })}
                            // @ts-ignore
                            renderInput={(props) => (
                                <TextField
                                    {...props}
                                    name="field2"
                                    label="Field 2"
                                    variant="outlined"
                                    size="medium"
                                />
                            )}
                        />
                    </LocalizationProvider>
                    </div>


                    <TextField
                        sx={{ marginBottom: '.5rem'}}
                        name="Spouse name"
                        label="Spouse's name"
                        variant="outlined"
                        fullWidth
                        value={formData.field1}
                        onChange={handleChange}
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