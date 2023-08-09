import React from "react";
import styled from 'styled-components';
import {Backdrop} from "./Backdrop";
// Import the CSS file for styling
interface SpinnerWrapperProps {
    spinnerColor?: string; // Define the type for spinnerColor
    positionTop?: string | number;
}


const SpinnerWrapper = styled.div<SpinnerWrapperProps>`
  .lds-spinner div:after {
    background-color: ${props => props.spinnerColor || 'white'};
  }
  .dwa-spinner{
    top: ${props => props.positionTop || '30%'}
  }
`;

// @ts-ignore
const Loader = ({spinnerColor, positionTop}) => {

    return (
        <SpinnerWrapper spinnerColor={spinnerColor} positionTop={positionTop} className='loader-wrapper'>
        <div className='dwa-spinner'>
            <div className="lds-spinner">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
        </SpinnerWrapper>
    );
};

export default Loader;