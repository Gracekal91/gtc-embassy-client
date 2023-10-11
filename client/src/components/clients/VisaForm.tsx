import React, {useState} from "react";
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

interface Values {
    name: string;
    maidenName: string;
    middleName: string;
    firstName: string;
    placeOfBirth: any;
    countryOfBirth: string;
    citizenshipAtBirth: string;
    citizenship: string;
    dateOfBirth: any;
    spouseName: string;
    gender: any;
    maritalStatus: any;
    profession: string
    residence: string
    otherResidence: string
    phoneNumber: any
    father: any
    fatherCitizenship: any
    mother: any
    motherCitizenship: any
    passportType: any
    travellingDocumentNumber: any
}

export const VisaForm = () => {
    const [currentStep, setCurrentStep] = useState(1);

    const handleNextStep = () => {
        setCurrentStep(currentStep + 1);
    };

    const handlePrevStep = () => {
        setCurrentStep(currentStep - 1);
    };

    const submitMe = (values: any) => {
        console.log('VALUES', values)
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
                        maidenName: '',
                        middleName: '',
                        firstName: '',
                        placeOfBirth: '',
                        countryOfBirth: '',
                        citizenshipAtBirth: '',
                        citizenship: '',
                        dateOfBirth: null,
                        spouseName: '',
                        gender: '',
                        maritalStatus: ''
                    }}
                    //validationSchema={valideSchema} TODO
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
                            {currentStep === 4 && <VisaTwo  handleChange={handleChange}  values={values}/>}

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