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
                    <Field name='trip_go_one'>
                        {({field, form}: {field: any, form: any}) => (
                            <DatePicker
                                id='trip_go_one'
                                {...field}
                                selected={field.value}
                                onChange={(trip_go_one) => form.setFieldValue(field.name, trip_go_one)}
                            />
                        )}
                    </Field>
                </LocalizationProvider>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <Field name='trip_back_two'>
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