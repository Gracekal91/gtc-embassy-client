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

export const VisaForm = () => {
    const [formData, setFormData] = useState({
        // Initialize your form fields here
        name: '',
        maidenName: '',
        middleName: '',
        firstName: '',
        placeOfBirth: '',
        countryOfBirth: '',
        citizenshipAtBirth: '',
        citizenship: '',
        dateOfBirth: '',
        spouseName: '',
        gender: '',
        maritalStatus: '',
        // ...
    });

    const [currentStep, setCurrentStep] = useState(1);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement> | Date) => {
        if (typeof e === 'object' && 'target' in e) {
            // Handle input field changes
            const { name, value } = e.target;
            setFormData({ ...formData, [name]: value });
        } else {
            // Handle date picker changes
            // @ts-ignore
            setFormData({ ...formData, dateOfBirth: date });
        }
    };


    const handleNextStep = () => {
        setCurrentStep(currentStep + 1);
    };

    const handlePrevStep = () => {
        setCurrentStep(currentStep - 1);
    };

    const handleSubmit = () => {
        console.log('DATA', formData)
        //setFormData({} as typeof formData)
    };

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
                <form onSubmit={handleSubmit}>

                    {currentStep === 1 && <VisaOne />}
                    {currentStep === 2 && <VisaTwo formData={formData} handleChange={handleChange} />}

                        <Button startIcon={<ArrowBackIcon />} variant="outlined" size="small" onClick={handlePrevStep} disabled={currentStep === 1} style={{textTransform: 'capitalize', marginTop: '.5rem'}}>Prev</Button>
                        <Button endIcon={<ArrowForwardIcon />} variant="outlined" size="small" onClick={handleNextStep} disabled={currentStep === 4} style={{textTransform: 'capitalize', marginTop: '.5rem'}}>Next</Button>
                        {currentStep === 2 && <Button variant="outlined" size="small" style={{textTransform: 'capitalize', marginTop: '.5rem'}} startIcon={<BackupIcon />}
                        onClick={handleSubmit}
                        >Submit</Button>}
                </form>
            </div>
        </div>
        </>
    )
}