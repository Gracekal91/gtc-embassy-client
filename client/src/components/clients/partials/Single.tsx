import React from "react";
import {DatePicker, LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterDateFns} from "@mui/x-date-pickers/AdapterDateFns";
import {Field} from "formik";

interface single{
    values: any
    handleChange: any
}
export const Single: React.FC<single> = ({values, handleChange}) => {
    return(
        <>
            <h5 style={{marginBottom: '0.2rem'}}>Single Entry</h5>
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
        </>
    )
}