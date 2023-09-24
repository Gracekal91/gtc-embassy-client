import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
    AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

const MyAccordion = styled((props: AccordionProps) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&:before': {
        display: 'none',
    },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
        {...props}
    />
))(({ theme }) => ({
    backgroundColor:
        theme.palette.mode === 'dark'
            ? 'rgba(255, 255, 255, .05)'
            : 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function CustomizedAccordions() {
    const [expanded, setExpanded] = React.useState<string | false>('panel1');

    const handleChange =
        (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
            setExpanded(newExpanded ? panel : false);
        };

    return (
        <div >
            <MyAccordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} style={{borderRadius: '.5rem'}}>
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                    <Typography>Business Visa</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <ul style={{margin: 0, padding: '.5rem'}}>
                            <li>A Notarized letter of invitation from the host in D.R.Congo </li>
                            <li>A letter from the applicant's employer with details of your business contact</li>
                        </ul>
                    </Typography>
                </AccordionDetails>
            </MyAccordion>
            <MyAccordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                    <Typography>Visit Visa</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <ul style={{margin: 0, padding: '.5rem'}}>
                            <li>A Notarized letter of invitation from the host in D.R.Congo with full address / or confirmed booking Hotel </li>
                            <li>A letter from the applicant's employer confirming that He / She will return to employment after the termination of the the visit in the D.R. Congo</li>
                        </ul>
                    </Typography>
                </AccordionDetails>
            </MyAccordion>
            <MyAccordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                    <Typography>Tourism Visa </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <ul style={{margin: 0, padding: '.5rem'}}>
                            <li>Details of your intended tour itinerary </li>
                        </ul>
                    </Typography>
                </AccordionDetails>
            </MyAccordion>
            <MyAccordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
                    <Typography>Official / Diplomatic Visa </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <ul style={{margin: 0, padding: '.5rem'}}>
                            <li>A verbal note </li>
                        </ul>
                    </Typography>
                </AccordionDetails>
            </MyAccordion>
        </div>
    );
}


