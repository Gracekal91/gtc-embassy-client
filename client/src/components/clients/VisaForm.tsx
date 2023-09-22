import React, {useState} from "react";
import {VisaOne} from "./VisaOne";
import {VisaTwo} from "./VisaTwo";
import embleme from "../../assests/images/embleme.png";
import {VisaThree} from "./VisaThree";

export const VisaForm = () => {

    const [formData, setFormData] = useState({
        // Initialize your form fields here
        field1: '',
        field2: '',
        // ...
    });

    const [currentStep, setCurrentStep] = useState(1);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleNextStep = () => {
        setCurrentStep(currentStep + 1);
    };

    const handlePrevStep = () => {
        setCurrentStep(currentStep - 1);
    };

    const handleSubmit = () => {
        // Handle form submission here
    };

    return(
        <>
        <div style={{width: '100%', position: 'relative'}}>
            <div className="header-form">
                <div className="header-content">
                    <img src={embleme} alt=""/>
                    <h1>DRC Embassy in Pretoria</h1>
                </div>
            </div>
            <div className="form-container">
                <form onSubmit={handleSubmit}>
                    {currentStep === 1 && <VisaOne />}
                    {currentStep === 2 && <VisaTwo formData={formData} handleChange={handleChange} />}
                    {currentStep === 3 && <VisaThree formData={formData} handleChange={handleChange} />}

                    <button type="button" onClick={handlePrevStep} disabled={currentStep === 1}>Previous</button>
                    <button type="button" onClick={handleNextStep} disabled={currentStep === 3}>Next</button>
                    {currentStep === 3 && <button type="submit">Submit</button>}
                </form>
            </div>
        </div>
        </>
    )
}