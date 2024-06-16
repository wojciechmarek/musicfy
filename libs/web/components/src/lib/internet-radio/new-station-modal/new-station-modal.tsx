import { RadioStation } from '@musicfy/web/utils/models';
import {
  AddButton,
  Asterisk,
  ButtonsRow,
  CancelButton,
  FormContent,
  Header,
  Input,
  InputLabel,
  InputRow,
} from './new-station-modal.styled';
import { SubmitHandler, useForm } from 'react-hook-form';

type Props = {
  onCancelClick: () => void;
  onAddClick: (station: RadioStation) => void;
};

export const NewStationModal = (props: Props) => {
  const { onAddClick, onCancelClick } = props;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RadioStation>();

  const handleOnSubmit: SubmitHandler<RadioStation> = (data) => {
    const newStation: RadioStation = {
      ...data,
      cover:
        data.cover !== ''
          ? data.cover
          : `https://api.dicebear.com/9.x/initials/svg?seed=${data.title}`,
      id: Date.now(),
    };

    onAddClick(newStation);
  };

  return (
    <FormContent onSubmit={handleSubmit(handleOnSubmit)}>
      <Header>Add a new radio station</Header>
      <InputRow>
        <InputLabel>
          Name<Asterisk>*</Asterisk>
        </InputLabel>
        <Input
          {...register('title', { required: true })}
          isError={!!errors.title}
        />
      </InputRow>
      <InputRow>
        <InputLabel>
          Stream URL<Asterisk>*</Asterisk>
        </InputLabel>
        <Input
          {...register('url', { required: true })}
          isError={!!errors.url}
        />
      </InputRow>
      <InputRow>
        <InputLabel>Description</InputLabel>
        <Input {...register('description')} />
      </InputRow>
      <InputRow>
        <InputLabel>Cover image URL</InputLabel>
        <Input {...register('cover')} />
      </InputRow>
      <ButtonsRow>
        <CancelButton onClick={onCancelClick}>Cancel</CancelButton>
        <AddButton type="submit" value="Add" />
      </ButtonsRow>
    </FormContent>
  );
};
