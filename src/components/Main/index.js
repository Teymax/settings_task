import React from 'react';

import { Options } from '../Options'

import { useOptions } from '../hooks/useOptions'

export const Main = () => {

  const { options } = useOptions();

  return (
    <>
      {options.options.main.options.map((item, index) => 
        <Options 
          key={index}
          index={index}
          isMain={true}
        />
      )}
    </>
  )
}
