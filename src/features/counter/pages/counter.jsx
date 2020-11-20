import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCount } from '../countSlice';
import { useTranslation } from 'react-i18next';


const Counter = (props) => {
  const { t, i18n } = useTranslation();
  console.log(t);
  // let [count, setCount] = useState(0);
  const dispatch = useDispatch();
  const count = useSelector(state => state.count);
  const handleClick = () => {
    dispatch(addCount(1))
  }
  return (
      <>
        <h1>Count component</h1>
        <h2>
        {t('Welcome to React')} 
        </h2>
        <p> { count } </p>
        <button
        onClick={handleClick}
        >
            Click here!
        </button>
      </>
  )
}

export { Counter };