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
                label="Purpose of travel"
                fullWidth
                size='small'
                value={values.visaType}
                onChange={handleChange('visaType')}
                displayEmpty
                inputProps={{ 'aria-label': 'Purpose of travel' }}
                sx={{
                    marginBottom: '.5rem'
                }}
            >
                <MenuItem value="" disabled>
                    Select Purpose
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

        </div>
    );
}

