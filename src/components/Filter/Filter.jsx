import { Input } from './Filter.styled';
import { useDispatch } from 'react-redux';
import { changeFilter } from 'redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  const onChangeFilter = evt =>
    dispatch(changeFilter(evt.currentTarget.value.toLocaleLowerCase()));

  return (
    <Input>
      <label htmlFor="filterInput">Find contact by name</label>
      <input
        id="filterInput"
        type="text"
        name="filter"
        onChange={onChangeFilter}
      />
    </Input>
  );
};
