import {theme} from "../../utils/theme";
import {Box} from "@mui/material";

const ProgressCircle = ({ progress = "0.75", size = "40" }) => {
    // @ts-ignore
    const angle = progress * 360;
    return (
        <Box
            sx={{
                background: `radial-gradient(${theme.primo['primo400']} 55%, transparent 56%),
            conic-gradient(transparent 0deg ${angle}deg, ${theme.primo['primo500']} ${angle}deg 360deg),
            ${theme.green['green500']}`,
                borderRadius: "50%",
                width: `${size}px`,
                height: `${size}px`,
            }}
        />
    );
};

export default ProgressCircle;