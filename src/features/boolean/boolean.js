import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './boolean.module.css';
import { selectValue, turnToFalse, turnToTrue } from './booleanSlice';

export function Boolean() {

    const bool = useSelector(selectValue);
    const dispatch = useDispatch();
console.log(bool)
  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="truee"
          onClick={() => dispatch(turnToTrue())}
        >
          true
        </button>
        <button
          className={styles.button}
          aria-label="falsee"
          onClick={() => dispatch(turnToFalse())}
        >
          false
        </button>
        <span>{String(bool)}</span>
      </div>      
    </div>
  );
}