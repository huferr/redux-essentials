import React from 'react';
import { useSelector } from 'react-redux';
import styles from './Section1.module.css';
import { selectValue } from '../../features/boolean/booleanSlice';

export const Section01 = () => {

  const bool = useSelector(selectValue)

  return (
    <section className={styles.section}> 
      <span>{String(bool)}</span>
    </section>
  );
}