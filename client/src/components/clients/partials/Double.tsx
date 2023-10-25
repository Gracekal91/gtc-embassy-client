import {DatePicker, LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterDateFns} from "@mui/x-date-pickers/AdapterDateFns";
import {Field} from "formik";
import React from "react";

export const Double = () => {
    return(
        <>
            <h5 style={{marginBottom: '0.2rem'}}>Double Entry</h5>
            <div className="group-input" style={{marginBottom: '.5rem'}}>
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
                    <Field name='trip_back_one'>
                        {({field, form}: {field: any, form: any}) => (
                            <DatePicker
                                id='trip_back_one'
                                {...field}
                                selected={field.value}
                                onChange={(trip_back_one) => form.setFieldValue(field.name, trip_back_one)}
                            />
                        )}
                    </Field>
                </LocalizationProvider>
            </div>

            <div className="group-input" style={{marginBottom: '0'}}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <Field name='trip_go_two'>
                        {({field, form}: {field: any, form: any}) => (
                            <DatePicker
                                id='trip_go_two'
                                {...field}
                                selected={field.value}
                                onChange={(trip_go_two) => form.setFieldValue(field.name, trip_go_two)}
                            />
                        )}
                    </Field>
                </LocalizationProvider>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <Field name='trip_back_two'>
                        {({field, form}: {field: any, form: any}) => (
                            <DatePicker
                                id='trip_back_two'
                                {...field}
                                selected={field.value}
                                onChange={(trip_back_two) => form.setFieldValue(field.name, trip_back_two)}
                            />
                        )}
                    </Field>
                </LocalizationProvider>
            </div>
        </>
    )
}