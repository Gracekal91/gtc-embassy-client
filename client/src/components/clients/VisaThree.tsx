import React, {useState} from 'react';
import {TextField, Button, Divider} from '@mui/material';
import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import {DatePicker, LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterDateFns} from "@mui/x-date-pickers/AdapterDateFns";

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

export const VisaThree: React.FC<Step1FormProps> = ({ formData, handleChange }) => {
    const [state, setState] = useState<AppState>({ selectedDate: new Date() });
    return (
        <div>
            <h2>Step 3</h2>
            <form>
                <TextField
                    name="Profession"
                    label="Profession"
                    variant="outlined"
                    fullWidth
                    value={formData.field1}
                    onChange={handleChange}
                    size='small'
                />
                <TextField
                    name="Residence"
                    label="Principal Address"
                    variant="outlined"
                    fullWidth
                    value={formData.field1}
                    onChange={handleChange}
                    size='small'
                />
                <TextField
                    name="Residence"
                    label="Address in D.R.Congo"
                    variant="outlined"
                    fullWidth
                    value={formData.field1}
                    onChange={handleChange}
                    size='small'
                />
                <div className="group-input">
                    <TextField
                        name="Father's Name"
                        label="Father's Name"
                        variant="outlined"
                        fullWidth
                        value={formData.field1}
                        onChange={handleChange}
                        size='small'
                    />
                    <TextField
                        name="Father's Citizenship"
                        label="Father's Citizenship"
                        variant="outlined"
                        fullWidth
                        value={formData.field2}
                        onChange={handleChange}
                        size='small'
                    />
                </div>
                <div className="group-input">
                    <TextField
                        name="Mother's Name"
                        label="Mother's Name"
                        variant="outlined"
                        fullWidth
                        value={formData.field1}
                        onChange={handleChange}
                        size='small'
                    />
                    <TextField
                        name="Mother's Citizenship"
                        label="Mother's Citizenship"
                        variant="outlined"
                        fullWidth
                        value={formData.field2}
                        onChange={handleChange}
                        size='small'
                    />
                </div>
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
                        name="Phone Number"
                        label="Phone Number"
                        variant="outlined"
                        fullWidth
                        value={formData.field1}
                        onChange={handleChange}
                        size='small'
                    />
                    <TextField
                        name="Email Address"
                        label="Email Address"
                        variant="outlined"
                        fullWidth
                        value={formData.field2}
                        onChange={handleChange}
                        size='small'
                    />
                </div>
                <Divider sx={{marginTop: '.5rem', marginBottom: '.5rem'}}/>
                <FormLabel id="demo-row-radio-buttons-group-label" sx={{marginLeft: '.2rem', marginTop: '.5rem' }}>Type of Passport</FormLabel>
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
                    <FormControlLabel value="Ordinary" control={<Radio />} label="Ordinary" />
                    <FormControlLabel value="Diplomatic" control={<Radio />} label="Diplomatic" />
                    <FormControlLabel value="Service" control={<Radio />} label="Service" />
                    <FormControlLabel value="Other" control={<Radio />} label="Other" />
                </RadioGroup>
                <TextField
                    name="Travel Document's Number"
                    label="Travel Document's Number"
                    variant="outlined"
                    fullWidth
                    value={formData.field1}
                    onChange={handleChange}
                    size='small'
                />
                <div className="group-input">
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DatePicker
                            label="Valid from"
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

                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DatePicker
                            label="Valid until"
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

                <div className="group-input">
                    <TextField
                    name="Residence Permit Number"
                    label="Residence Permit Number"
                    variant="outlined"
                    fullWidth
                    value={formData.field1}
                    onChange={handleChange}
                    size='small'
                />

                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DatePicker
                            label="Valid until"
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
                <Divider sx={{marginTop: '.5rem', marginBottom: '.5rem'}}/>

                <FormLabel id="demo-row-radio-buttons-group-label" sx={{marginLeft: '.2rem', marginTop: '.5rem' }}>Purpose of Travel</FormLabel>
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

                    <FormControlLabel value="visit" control={<Radio />} label="Family visit" />
                    <FormControlLabel value="service" control={<Radio />} label="Service Mission" />
                    <FormControlLabel value="official" control={<Radio />} label="Official Mission" />
                    <FormControlLabel value="tourism" control={<Radio />} label="Tourism" />
                    <FormControlLabel value="business" control={<Radio />} label="Business" />

                    <FormControlLabel value="study" control={<Radio />} label="Study" />
                    <FormControlLabel value="scientific" control={<Radio />} label="Scientific/Culture/Sport" />
                    <FormControlLabel value="member" control={<Radio />} label="NGO Menber" />
                    <FormControlLabel value="journalist" control={<Radio />} label="Journalist" />
                    <FormControlLabel value="conference" control={<Radio />} label="Religious conference" />

                </RadioGroup>
                <TextField
                    name="Ticket Reference"
                    label="Ticket Reference"
                    variant="outlined"
                    fullWidth
                    value={formData.field2}
                    onChange={handleChange}
                    size='small'
                />
                <TextField
                    name="Ticket issued"
                    label="Ticket issued"
                    variant="outlined"
                    fullWidth
                    value={formData.field2}
                    onChange={handleChange}
                    size='small'
                />
                <TextField
                    name="Destination in D.R.Congo"
                    label="Destination in D.R.Congo"
                    variant="outlined"
                    fullWidth
                    value={formData.field2}
                    onChange={handleChange}
                    size='small'
                />
            </form>
        </div>
    );
}