import React from 'react';
import { Options } from './Options'

import { useOptions } from '../hooks/useOptions';

export const Email = () => {
  const { options } = useOptions();
  return (
    <>
      {
        options.options.email?.options.map((item, index) => 
          <Options 
            key={index}   
            iOpt={index}   
          />
        )
      }
    </>
  )
}