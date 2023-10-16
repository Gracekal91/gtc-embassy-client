import React from 'react'
import {DatePicker, LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterDateFns} from "@mui/x-date-pickers/AdapterDateFns";
import {Field} from "formik";
import {TextField} from "@mui/material";

interface transit{
    values: any;
    handleChange: any;
}

const Transit: React.FC<transit> = ({values, handleChange}) => {
    return (
        <>
        <h5 style={{marginBottom: '0.2rem'}}>Aller</h5>
    <div className="group-input" style={{marginBottom: '0'}}>
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
    <h5 style={{marginBottom: '0.2rem'}}>Retour</h5>
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
        name="father"
        label="Visa number"
        variant="outlined"
        fullWidth
        value={values.father}
        onChange={handleChange('father')}
        size='small'
    />

        </>
    )
}

export default Transit
