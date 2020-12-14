import { Typography } from '@material-ui/core';
import { SetStateAction, MouseEvent } from 'react';
import { EngToggleGroup } from '../engToggleGroup';
import { useQueryStyles } from './queryStyles';

export const QueryEngineering = (props: {
  engLevel: number | null;
  setEngLevel: React.Dispatch<SetStateAction<number | null>>;
}) => {
  const { engLevel, setEngLevel } = props;
  const classes = useQueryStyles();

  const handleEngLevelChange = (
    _: MouseEvent<HTMLElement>,
    newValue: number
  ) => {
    setEngLevel(newValue);
  };

  return (
    <div className={`${classes.querySection} ${classes.engineeringQuery}`}>
      <h3 className={classes.querySectionheader}>Ship Engineering Level</h3>
      <Typography className={classes.queryExplanationText}>
        Select Engineering level ranging from None to Max Engineering.
      </Typography>
      <EngToggleGroup
        engLevel={engLevel}
        handleEngLevelChange={handleEngLevelChange}
      />
    </div>
  );
};
