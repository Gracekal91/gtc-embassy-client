import React, {useState} from 'react';
import {TextField, Button, Divider, Select, MenuItem} from '@mui/material';
import Transit from './partials/Transit';
import { Single } from './partials/Single';
import { Double } from './partials/Double';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';

import styled from "styled-components";
import {DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { Field } from 'formik';
import { Multiple } from './partials/Multiple';



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

export const VisaFour: React.FC<Step1FormProps> = ({values, handleChange}) => {

    return (
        <div>
            <h5>Step 4 - ACCESS TO THE CONGOLESE TERRITORY</h5>
            <Select
                label="Visa Type"
                fullWidth
                size='small'
                value={values.visa_type}
                onChange={handleChange('visa_type')}
                displayEmpty
                inputProps={{ 'aria-label': 'Visa type' }}
                sx={{
                    marginBottom: '.5rem'
                }}
            >
                <MenuItem value="" disabled>
                    Select visa type
                </MenuItem>
                <MenuItem value="transit">Transit</MenuItem>
                <MenuItem value="single">Single access point</MenuItem>
                <MenuItem value="double">Double access point</MenuItem>
                <MenuItem value="multiple">Multiple</MenuItem>
            </Select>

            {
                values.visa_type === 'transit' &&  <Transit values={values} handleChange={handleChange} />
            }

            {
                values.visa_type === 'single' &&  <Single values={values} handleChange={handleChange}/>
            }

            {
                values.visa_type === 'double' &&  <Double />
            }

            {
                values.visa_type === 'multiple' &&  <Multiple />
            }

            <h5>Last visa obtained in D.R.Congo</h5>
            <div className="group-input">
                <TextField
                    name="LastVisaNumber"
                    label="Last Visa No"
                    id="lastVisaNumber"
                    variant="outlined"
                    fullWidth
                    size='small'
                    value={values.last_visa_number}
                    onChange={handleChange('last_visa_number')}
                />
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <Field name='LastVisaDeliveranceDate'>
                        {({field, form}: {field: any, form: any}) => (
                            <DatePicker
                                id='LastVisaDeliveranceDate'
                                {...field}
                                selected={field.value}
                                onChange={(LastVisaDeliveranceDate) => form.setFieldValue(field.name, LastVisaDeliveranceDate)}
                            />
                        )}
                    </Field>
                </LocalizationProvider>
            </div>
            <TextField
                name="last_visa_duration"
                label="Last visa duration"
                variant="outlined"
                fullWidth
                value={values.last_visa_duration}
                onChange={handleChange('last_visa_duration')}
                size='small'
            />

            <h5>Host or Sponsor Details</h5>
            <div className="group-input">
                <TextField
                    name="host_names"
                    label="Host / sponsor full name"
                    id="hostNames"
                    variant="outlined"
                    fullWidth
                    size='small'
                    value={values.host_names}
                    onChange={handleChange('host_names')}
                />

                <TextField
                    name="host_number"
                    label="Cellphone No"
                    id="hostNumber"
                    variant="outlined"
                    fullWidth
                    size='small'
                    value={values.host_number}
                    onChange={handleChange('host_number')}
                />
            </div>
            <TextField
                name="host_address"
                label="sponsor's address"
                id="host_address"
                variant="outlined"
                fullWidth
                size='small'
                value={values.host_address}
                onChange={handleChange('host_address')}
            />
        </div>
    );
}

