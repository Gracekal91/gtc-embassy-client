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
    const [visaEntry, setVisaEntry] = useState('');
    // @ts-ignore
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
                values.visaType === 'transit' &&  <Transit values={values} handleChange={handleChange} />
            }

            {
                values.visaType === 'single' &&  <Single values={values} handleChange={handleChange}/>
            }

            {
                values.visaType === 'double' &&  <Double />
            }

            {
                values.visaType === 'multiple' &&  <Multiple />
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
                    value={values.LastVisaNumber}
                    onChange={handleChange('LastVisaNumber')}
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
                name="LastVisaDuration"
                label="Last visa duration"
                variant="outlined"
                fullWidth
                value={values.LastVisaDuration}
                onChange={handleChange('LastVisaDuration')}
                size='small'
            />

            <h5>Host or Sponsor Details</h5>
            <div className="group-input">
                <TextField
                    name="hostNames"
                    label="Host / sponsor full name"
                    id="hostNames"
                    variant="outlined"
                    fullWidth
                    size='small'
                    value={values.hostNames}
                    onChange={handleChange('hostNames')}
                />

                <TextField
                    name="hostNumber"
                    label="Cellphone No"
                    id="hostNumber"
                    variant="outlined"
                    fullWidth
                    size='small'
                    value={values.hostNumber}
                    onChange={handleChange('hostNumber')}
                />
            </div>
            <TextField
                name="hostAddress"
                label="sponsor's address"
                id="hostAddress"
                variant="outlined"
                fullWidth
                size='small'
                value={values.hostAddress}
                onChange={handleChange('hostAddress')}
            />
        </div>
    );
}

