import { useState } from 'react';
import Style from './search.module.css';
import searchIcon from '../../../../../../assets/icon/menu/search-regular-240.png';

export default function Search() {
  const [change, handleChange] = useState(false);
  return (
    <div className={change ? Style.search_active : Style.search} >
      <input type="text" placeholder="Minecraft, Call Of Duty, battlefield" typeof='checkbox' id='search'/>
      <img className={Style.search_icon} src={searchIcon} alt='search' onClick={() => handleChange(!change)}/>
    </div>
  );
}