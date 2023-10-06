import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const steps = ['infos', 'identification', 'more', 'other'];

export default function HorizontalLinearStepper({myStep}: any) {
    const [activeStep, setActiveStep] = React.useState(0);

    return (
        <Box sx={{ width: '100%' }}>
            <Stepper activeStep={myStep - 1}>
                {steps.map((label, index) => {
                    const stepProps: { completed?: boolean } = {};
                    const labelProps: {
                        optional?: React.ReactNode;
                    } = {};
                    return (
                        <Step key={label} {...stepProps}>
                            <StepLabel {...labelProps}><p style={{fontSize: '.6rem'}}>{label}</p></StepLabel>
                        </Step>
                    );
                })}
            </Stepper>
        </Box>
    );
}