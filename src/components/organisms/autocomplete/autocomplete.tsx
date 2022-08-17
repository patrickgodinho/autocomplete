import './autocomplete.styles.css';
import { Input } from '../../atoms/input';
import { Suggestions } from '../../molecules/suggestions';
import React, { useState } from 'react';
import { CountriesService } from '../../../services/countries';
import { useDebounce } from '../../../libs/debounce/debounce';
import { Loader } from '../../atoms/loader';

function Autocomplete() {
  const [suggestions, setSuggestions] = useState([]);
  const [value, setValue] = useState('');
  const [isSelected, setIsSelected] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (!value) setSuggestions([]);
    setValue(value);
    setIsSelected(false);
  };

  const onSelect = (value: string) => () => {
    setIsSelected(true);
    setValue(value);
    setSuggestions([]);
  };

  const refreshSuggestions = async () => {
    if (isSelected) return;
    setIsLoading(true);
    const countries = await CountriesService.getByName(value);
    setSuggestions(countries.map((country: any) => ({ text: country.name, onSelect: onSelect(country.name) })));
    setIsLoading(false);
  };

  useDebounce(value, refreshSuggestions, 400);

  return (
    <div className="autocomplete-container">
      <Input onChange={onChange} value={value} autoFocus placeholder="Search for countries..." />
      <Suggestions suggestions={suggestions} highlight={value} />
      {isLoading && <Loader />}
    </div>
  );
}

export default Autocomplete;
