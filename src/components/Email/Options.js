import React, { useState } from 'react';
import { Form, Row, Col } from 'react-bootstrap';

import { useOptions } from '../hooks/useOptions';
import { useStates } from '../hooks/useStates';

import { Editor } from './Editor';

export const Options = ({iOpt}) => {
  const { fillOptions, options } = useOptions();
  const { fillState, state } = useStates();

  const [activeIndex, setActiveIndex] = useState(null);
  const newOptions = {...options};

  const showContext = (index) => {
    setActiveIndex(activeIndex === index ? null : index);

    if (!newOptions.options.email.options[iOpt].values[index].checked) {
      newOptions.options.email.options[iOpt].values.map(item => item.checked = false);
      newOptions.options.email.options[iOpt].values[index].checked = true;
    } else {
      newOptions.options.email.options[iOpt].values.map(item => item.checked = false);
    }

    fillOptions(newOptions);
  };

  const handlerTitle = (index, event) => {
    newOptions.options.email.options[iOpt].values[index].title = event.target.value;
    state[newOptions.options.email.options[iOpt].values[index].options[0].name] = event.target.value
    fillState(state);
  };

  const {
    title,
    description,
    values
  } = options.options.email?.options[iOpt];

  return (
    <Row className="pt-2 justify-content-end">
      <Col sm={3}>
        <Form.Label className="mb-0">{title}</Form.Label>
        <p className="text-secondary">{description}</p>
      </Col>

      <Col sm={9} className="mt-3 ">
      {
        values.map((item, index) => {
          return (
            <div className="mb-3" key={index}>
              <div className="d-flex justify-content-between">
                <div className="form-check form-switch">
                  <input 
                    className="form-check-input" 
                    checked={item.checked || ''} 
                    onChange={() => showContext(index)} 
                    type="checkbox" 
                    id={index}
                  />
                  <label className="form-check-label" htmlFor={index}>{item.label}</label>
                </div>
                <label className="form-check-label text-primary" htmlFor={index}>Edit template</label>
              </div>

              <div className={activeIndex === index ? "d-block" : "d-none"} >
                <Col sm={9}>
                  <Form.Control 
                    size="lg" 
                    className="mt-3 mb-4" 
                    type="text" 
                    defaultValue={item.options[iOpt].value}
                    onChange={e => handlerTitle(index, e)}
                  />
                </Col>
                <Editor item={newOptions.options.email.options[iOpt].values[index].options[1]} index={index} />
              </div>
            </div>
          )
        })
      }
      </Col>
    </Row>
  )
}
