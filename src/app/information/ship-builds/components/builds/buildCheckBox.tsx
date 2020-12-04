import { FormControlLabel, Checkbox } from '@material-ui/core';
import { ChangeEvent } from 'react';

interface IBuildCheckBoxProps {
  label: string;
  name: string;
  checked: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>, checked: boolean) => void;
}
export const BuildCheckBox = (props: IBuildCheckBoxProps) => {
  const { label, name, checked, onChange } = props;
  return (
    <FormControlLabel
      label={label}
      control={<Checkbox name={name} checked={checked} onChange={onChange} />}
    />
  );
};
