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
            <h5 style={{marginBottom: '0.2rem'}}>Aller - Retour</h5>
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
                            id='transit_back'
                            {...field}
                            selected={field.value}
                            onChange={(trip_back_one) => form.setFieldValue(field.name, trip_back_one)}
                    />
                )}
            </Field>
        </LocalizationProvider>
    </div>
        </>
    )
}

export default Transit
