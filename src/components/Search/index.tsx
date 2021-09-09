import React, {
  useState, useContext, useEffect, useRef,
} from 'react';
import Classnames from 'classnames';
import Context from 'context';
import { CoordinateType } from 'types';
import s from './index.module.css';

type SuggestedType = CoordinateType & {isActive?: boolean}

export const Search: React.FC = () => {
  const [input, setInput] = useState({ value: '', setByUser: false });
  const [suggested, setSuggested] = useState<SuggestedType[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputEl = useRef<HTMLInputElement>(null);

  const { handleSearch, coordinatesData } = useContext(Context);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput({ value: e.target.value, setByUser: true });
  };
  const handleClick: React.MouseEventHandler<HTMLButtonElement> = () => {
    handleSearch(input.value);
    setSuggested([]);
    setInput({ value: '', setByUser: false });
  };
  const handleClickSuggested = (itemName: string) => {
    setInput({ value: itemName, setByUser: false });
    setSuggested([]);
    inputEl?.current?.focus();
  };
  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch!!(input.value);
      setSuggested([]);
      setInput({ value: '', setByUser: false });
    } else if (e.key === 'ArrowUp') {
      if (selectedIndex === null || selectedIndex === 0) {
        setSelectedIndex(suggested.length - 1);
      } else {
        setSelectedIndex(selectedIndex - 1);
      }
    } else if (e.key === 'ArrowDown') {
      if (selectedIndex === null || selectedIndex === suggested.length - 1) {
        setSelectedIndex(0);
      } else {
        setSelectedIndex(selectedIndex + 1);
      }
    }
  };

  useEffect(() => {
    if (typeof coordinatesData !== 'undefined' && input.setByUser) {
      const filtered = coordinatesData.filter(
        (obj) => obj.name.toLowerCase().startsWith(input.value.toLowerCase()),
      );
      filtered.map((item: any) => {
        item.isActive = false;
        return item;
      });
      setSuggested(filtered.slice(0, 5));
    }
  }, [input, coordinatesData]);

  useEffect(() => {
    if (suggested.length > 0) {
      setInput({ value: suggested[selectedIndex].name, setByUser: false });
    }
  }, [selectedIndex]);
  return (
    <div className={s.root}>
      {/* Search */}
      <div
        className={Classnames([s.wrapper], { [s.border]: suggested.length > 0 })}
      >
        <div className={s.icon} />

        <input
          className={s.search}
          placeholder="Enter a city"
          onKeyDown={handleKey}
          onChange={(e) => handleChange(e)}
          type="text"
          value={input.value}
          ref={inputEl}
        />
        <button
          onClick={handleClick}
          type="button"
          className={s.searchButton}
        >
          <i className="bi bi-search" />

        </button>
      </div>
      {/* Suggest */}
      <div className={s.suggestRoot}>
        {suggested.map((item: SuggestedType, index) => input.value
          && (
          <div
            aria-hidden="true"
            onClick={() => handleClickSuggested(item.name)}
            className={Classnames([s.block],
              { [s.active]: index === selectedIndex })}
            key={item.population}
          >
            {item.name}
          </div>
          ))}
      </div>
    </div>

  );
};
