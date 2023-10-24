import React, {useEffect, useState} from "react";
import {VisaOne} from "./VisaOne";
import {VisaTwo} from "./VisaTwo";
import embleme from "../../assests/images/embleme.png";
import {VisaThree} from "./VisaThree";
import {Button, ButtonGroup } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import BackupIcon from '@mui/icons-material/Backup';
import MyStepper from '../shared/MyStepper'
import { Formik, Field, Form, FormikHelpers } from 'formik';
import * as yup from 'yup';
import { VisaFour } from "./VisaFour";
import axios from 'axios'

//validation
const valideSchema = yup.object({
    name: yup
        .string()
        .email('Enter a valid email')
        .required('Name is required'),
    password: yup
        .string()
        .min(8, 'Password should be of minimum 8 characters length')
        .required('Password is required')
});


export const VisaForm = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [dataToSubmit, setDataToSubmit] = useState();

    const handleNextStep = () => {
        setCurrentStep(currentStep + 1);
    };

    const handlePrevStep = () => {
        setCurrentStep(currentStep - 1);
    };

    // useEffect(() => {
    //     const createVisa = async (dataToSubmit: any) => {
    //         try {
    //             const response = await axios.post('http://localhost:3500/api/v1/create_visa', dataToSubmit);
    //             // Handle the response here
    //             return response
    //         } catch (error) {
    //             // Handle any errors
    //         }
    //     }
    //
    // }, []);

    const submitMe =  async (values: any) => {
        console.log('VALUES', values);
        try {
            const response  = await axios.post('http://localhost:3500/api/v1/create_visa', values);
            console.log(response)
        } catch (error) {
            console.log('failed to submit data')
        }
    }


    // @ts-ignore
    return(
        <>
        <div style={{width: '100%', position: 'relative'}}>
            <div className="header-form">
                <div className="header-content">
                    <img src={embleme} alt=""/>
                    <h1>DRC Embassy in Pretoria</h1>
                </div>
            </div>
            <div className="form-container" style={{padding: '1rem'}}>

                <MyStepper myStep={currentStep}/>
                <Formik
                    initialValues={{
                        name: '',
                        maiden_name: '',
                        middle_name: '',
                        first_name: '',
                        place_of_birth: '',
                        country_of_birth: '',
                        citizenship_at_birth: '',
                        citizenship: '',
                        date_of_birth: '',
                        spouse_name: '',
                        gender: '',
                        marital_status: '',
                        profession: '',
                        residence_address: '',
                        other_residence: '',
                        email_address: '',
                        phone_number: '',
                        father_name: '',
                        father_citizenship: '',
                        mother_name: '',
                        mother_citizenship: '',
                        passport_type: '',
                        travel_document_number: '',
                        visa_type: '',
                        travel_document_issued_by: '',
                        residency_permit_number: '',
                        residency_permit_expiration: '',
                        purpose_of_travel: '',
                        destination_in_congo: '',
                        ticket_reference: '',
                        ticket_issued_by: '',
                        last_visa_number: '',
                        last_visa_duration: '',
                        last_visa_deliverance_date: '',
                        host_names: '',
                        host_number: '',
                        host_address: ''
                    }}

                    onSubmit={values => submitMe(values)}
                >
                    {({
                            values,
                            errors,
                            touched,
                            handleChange,
                            handleBlur,
                            handleSubmit,
                            isSubmitting,
                            /* and other goodies */
                        }) => (
                        <Form >
                            {currentStep === 1 && <VisaOne />}
                            {currentStep === 2 && <VisaTwo  handleChange={handleChange}  values={values}/>}
                            {currentStep === 3 && <VisaThree  handleChange={handleChange}  values={values}/>}
                            {currentStep === 4 && <VisaFour  handleChange={handleChange}  values={values}/>}

                            <Button startIcon={<ArrowBackIcon />} variant="outlined" size="small" onClick={handlePrevStep} disabled={currentStep === 1} style={{textTransform: 'capitalize', marginTop: '.5rem'}}>Prev</Button>
                            <Button endIcon={<ArrowForwardIcon />} variant="outlined" size="small" onClick={handleNextStep} disabled={currentStep === 4} style={{textTransform: 'capitalize', marginTop: '.5rem'}}>Next</Button>
                            {currentStep === 4 && <Button type='submit' variant="outlined" size="small" style={{textTransform: 'capitalize', marginTop: '.5rem'}} startIcon={<BackupIcon />}
                            >Submit</Button>}
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
        </>
    )
}