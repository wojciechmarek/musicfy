import { useState } from 'react';
import {
  EntryInput,
  EntryInputAndSave,
  EntrySave,
  EntryText,
} from './value-editor.styled';

type Props = {
  value: string;
  onValueChanged: (value: string) => void;
};

export const ValueEditor = (props: Props) => {
  const { value, onValueChanged } = props;

  const [isInEdit, setIsInEdit] = useState(false);
  const [fieldValue, setFieldValue] = useState(value);

  const handleOnButtonClick = () => {
    if (isInEdit) {
      onValueChanged?.(fieldValue);
    } else {
      setFieldValue(value);
    }

    setIsInEdit(!isInEdit);
  };

  return (
    <EntryInputAndSave>
      {isInEdit ? (
        <EntryInput
          onChange={(e) => setFieldValue(e.target.value)}
          value={fieldValue}
        />
      ) : (
        <EntryText>{fieldValue}</EntryText>
      )}
      <EntrySave onClick={handleOnButtonClick}>
        {isInEdit ? 'Save' : 'Edit'}
      </EntrySave>
    </EntryInputAndSave>
  );
};
