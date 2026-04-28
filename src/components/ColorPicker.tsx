import { Box, IconButton, List, ListItem, ListItemText, Typography } from '@mui/material';
import Constants from '../constants';
import '../shoes.scss';
import { selectedColorState, selectedMeshState } from '../atoms/Atoms';
import { useAtom } from 'jotai';

const ColorPicker = () => {
    const [selectedColorIndex, setSelectedColorIndex] = useAtom(selectedColorState);
    const [selectedMeshName] = useAtom(selectedMeshState);
    const padding = 16;
    const btnWidth = 30;
    const width = Constants.COLOR_ARR.length * (btnWidth + padding * 2);

    const colorClick = (color: any, index: number) => {
        console.log('colorClick color : ', color);
        console.log('colorClick index : ', index);

        setSelectedColorIndex(index);
    };
    return (
        <Box className={'color-wrap'}>
            <Box className={'color-inner-wrap'} style={{ width: width }}>
                <Typography className="current-part">
                    {selectedMeshName !== '' ? selectedMeshName : 'Select a part to color it'}
                    {/* {Constants.COLOR_ARR[selectedColorIndex].name} */}
                </Typography>
                <List className={'list-wrap'}>
                    {Constants.COLOR_ARR.map((color, index) => (
                        <ListItem className="color-item" key={'color-' + index}>
                            <IconButton
                                onClick={(e) => colorClick(color, index)}
                                className={
                                    selectedColorIndex === index
                                        ? 'color-btn selected'
                                        : 'color-btn'
                                }
                                style={{ backgroundColor: color.color }}
                            ></IconButton>
                            {selectedColorIndex === index ? (
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
