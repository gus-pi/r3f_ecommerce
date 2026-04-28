import { Box, IconButton, List, ListItem, ListItemText, Typography } from '@mui/material';
import Constants from '../constants';
import '../shoes.scss';
import { useState } from 'react';

const ColorPicker = () => {
    // const [selectedColorIdx, setSelectedColorIdx] = useRecoilState(selectedColorState);
    //   const [ selectedMeshName ] = useRecoilState(selectedMeshState);
    const [selected, setSelected] = useState(0);
    const padding = 16;
    const btnWidth = 30;
    const width = Constants.COLOR_ARR.length * (btnWidth + padding * 2);

    const colorClick = (color: any, idx: number) => {
        console.log('colorClick color : ', color);
        console.log('colorClick idx : ', idx);
        setSelected(idx);
        // setSelectedColorIdx(idx);
    };
    return (
        <Box className={'color-wrap'}>
            <Box className={'color-inner-wrap'} style={{ width: width }}>
                <Typography className="current-part">
                    {/* {selectedMeshName} */}
                    {Constants.COLOR_ARR[selected].name}
                </Typography>
                <List className={'list-wrap'}>
                    {Constants.COLOR_ARR.map((color, idx) => (
                        <ListItem className="color-item" key={'color-' + idx}>
                            <IconButton
                                onClick={(e) => colorClick(color, idx)}
                                className={selected === idx ? 'color-btn selected' : 'color-btn'}
                                style={{ backgroundColor: color.color }}
                            ></IconButton>
                            {selected === idx ? (
                                <ListItemText className="color-name" primary={color.name} />
                            ) : (
                                <></>
                            )}
                        </ListItem>
                    ))}
                </List>
            </Box>
        </Box>
    );
};
export default ColorPicker;
