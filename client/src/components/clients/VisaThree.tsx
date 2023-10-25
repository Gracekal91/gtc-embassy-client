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
                    name="residence_address"
                    label="Principal Residence"
                    variant="outlined"
                    fullWidth
                    value={values.residence_address}
                    onChange={handleChange('residence_address')}
                    size='small'
                />
            </div>
            <div className="group-input">
                <TextField
                    name="phone_number"
                    label="Phone Number"
                    variant="outlined"
                    fullWidth
                    value={values.phone_number}
                    onChange={handleChange('phone_number')}
                    size='small'
                />
                <TextField
                    name="other_residence"
                    label="Other residence"
                    variant="outlined"
                    fullWidth
                    value={values.other_residence}
                    onChange={handleChange('other_residence')}
                    size='small'
                />
            </div>
                <TextField
                    name="email_address"
                    label="Email address"
                    variant="outlined"
                    fullWidth
                    value={values.email_address}
                    onChange={handleChange('email_address')}
                    size='small'
                />

            <div className="group-input">
                <TextField
                    name="father_name"
                    label="Father's name"
                    variant="outlined"
                    fullWidth
                    value={values.father_name}
                    onChange={handleChange('father_name')}
                    size='small'
                />
                <TextField
                    name="father_citizenship"
                    label="Father's Nationality"
                    variant="outlined"
                    fullWidth
                    value={values.father_citizenship}
                    onChange={handleChange('father_citizenship')}
                    size='small'
                />
            </div>

            <div className="group-input">
                <TextField
                    name="mother_name"
                    label="Mother's name"
                    variant="outlined"
                    fullWidth
                    value={values.mother_name}
                    onChange={handleChange('mother_name')}
                    size='small'
                />
                <TextField
                    name="mother_citizenship"
                    label="Mother's Nationality"
                    variant="outlined"
                    fullWidth
                    value={values.mother_citizenship}
                    onChange={handleChange('mother_citizenship')}
                    size='small'
                />
            </div>
            <TextField
                name="travel_document_number"
                label="Travelling Document. Nbr"
                variant="outlined"
                fullWidth
                value={values.travel_document_number}
                onChange={handleChange('travel_document_number')}
                size='small'
            />
            {/*<div className="group-input" style={{marginBottom: '.5rem'}}>*/}
            {/*    <LocalizationProvider dateAdapter={AdapterDateFns}>*/}
            {/*                <Field name='dateOfBirth'>*/}
            {/*                    {({field, form}: {field: any, form: any}) => (*/}
            {/*                        <DatePicker*/}
            {/*                            id='dateOfBirth'*/}
            {/*                            {...field}*/}
            {/*                            selected={field.value}*/}
            {/*                            onChange={(dateOfBirth) => form.setFieldValue(field.name, dateOfBirth)}*/}
            {/*                        />*/}
            {/*                    )}*/}
            {/*                </Field>*/}
            {/*            </LocalizationProvider>*/}
            {/*        <LocalizationProvider dateAdapter={AdapterDateFns}>*/}
            {/*                    <Field name='dateOfBirth'>*/}
            {/*                        {({field, form}: {field: any, form: any}) => (*/}
            {/*                            <DatePicker*/}
            {/*                                id='dateOfBirth'*/}
            {/*                                {...field}*/}
            {/*                                selected={field.value}*/}
            {/*                                onChange={(dateOfBirth) => form.setFieldValue(field.name, dateOfBirth)}*/}
            {/*                            />*/}
            {/*                        )}*/}
            {/*                    </Field>*/}
            {/*        </LocalizationProvider>*/}
            {/*</div>*/}
            <TextField
                name="TdIssuedBy"
                label="Issued by"
                variant="outlined"
                fullWidth
                value={values.TdIssuedBy}
                onChange={handleChange('TdIssuedBy')}
                size='small'
            />
            <div className="group-input">
                <TextField
                    name="residency_permit_number"
                    label="Residency permit number"
                    variant="outlined"
                    fullWidth
                    value={values.residency_permit_number}
                    onChange={handleChange('residency_permit_number')}
                    size='small'
                />
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <Field name='residency_permit_expiration'>
                        {({field, form}: {field: any, form: any}) => (
                            <DatePicker
                                id='residency_permit_expiration'
                                {...field}
                                selected={field.value}
                                onChange={(residency_permit_expiration) => form.setFieldValue(field.name, residency_permit_expiration)}
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
                value={values.purpose_of_travel}
                onChange={handleChange('purpose_of_travel')}
                displayEmpty
                inputProps={{ 'aria-label': 'Purpose of travel' }}
                sx={{
                    marginBottom: '.5rem'
                }}
            >
                <MenuItem value="" disabled>
                    Select Purpose of travel
                </MenuItem>
                <MenuItem value="visit family">Family visit</MenuItem>
                <MenuItem value="service mission">Service mission</MenuItem>
                <MenuItem value="official mission">Official mission</MenuItem>
                <MenuItem value="Tourism">Tourism</MenuItem>
                <MenuItem value="business">Business</MenuItem>
                <MenuItem value="study">Study</MenuItem>
                <MenuItem value="scientific/culture/sport">Scientific - Cultural - Sport</MenuItem>
                <MenuItem value="ngo">NGO Member</MenuItem>
                <MenuItem value="Journalist">Journalist</MenuItem>
                <MenuItem value="conference">Conference - Religious</MenuItem>
            </Select>
            <TextField
                name="destination_in_congo"
                label="Destination in D.R.Congo"
                variant="outlined"
                fullWidth
                value={values.destination_in_congo}
                onChange={handleChange('destination_in_congo')}
                size='small'
            />
            <div className="group-input">
                <TextField
                    name="ticketReference"
                    label="Ticket reference"
                    variant="outlined"
                    fullWidth
                    value={values.ticket_reference}
                    onChange={handleChange('ticket_reference')}
                    size='small'
                />
                <TextField
                    name="ticket_issued_by"
                    label="Ticket issued by"
                    variant="outlined"
                    fullWidth
                    value={values.ticket_issued_by}
                    onChange={handleChange('ticket_issued_by')}
                    size='small'
                />
            </div>
        </div>
    );
}

