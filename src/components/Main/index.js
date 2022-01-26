import React from 'react';

import { Options } from '../OptionsC'

import { useOptions } from '../hooks/useOptions'

export const Main = ({keyTabs}) => {

  const { options } = useOptions();

  return (
    <>
      {options.options[keyTabs].options.map((item, index) => 
        <Options 
          key={index}
          index={index}
          keyTabs={keyTabs}
        />
      )}
    </>
  )
}
