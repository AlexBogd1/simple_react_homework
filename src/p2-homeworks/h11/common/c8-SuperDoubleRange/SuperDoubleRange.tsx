import React, {ChangeEvent} from "react";
import {makeStyles, Typography,Slider} from "@material-ui/core";


type SuperDoubleRangePropsType = {
    onChangeRange?: (value: [number, number]) => void
    value?: [number, number]
    // min, max, step, disable, ...
}

const useStyles = makeStyles({
    root: {
        width: 300,
    },
});



const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value,
        // min, max, step, disable, ...
    }
) => {
    const classes = useStyles();
    const handleChange = (event: ChangeEvent<{}>, newValue: number | number[]) => {
        onChangeRange && onChangeRange(newValue as [number,number]);
    };


    return (
        <div className={classes.root} >
            <Typography id="range-slider" gutterBottom>
                Prise range
            </Typography>
            <Slider
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"

            />
        </div>
    );
}

export default SuperDoubleRange;
