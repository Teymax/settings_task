import React, { useState } from 'react';
import { Form, Row, Col } from 'react-bootstrap';

import { useOptions } from '../hooks/useOptions'
import { Editor } from './Editor'

export const Email = () => {
  const { fillOptions, options } = useOptions();
  const [activeIndex, setActiveIndex] = useState(null);
  const newOptions = {...options};

  const showContext = (index) => {
    setActiveIndex(activeIndex === index ? null : index);

    if (!newOptions.email.options[0].value[index].checked) {
      newOptions.email.options[0].value.map(item => item.checked = false);
      newOptions.email.options[0].value[index].checked = true
    } else {
      newOptions.email.options[0].value.map(item => item.checked = false)
    }

    fillOptions(newOptions);
  };

  const handlerTitle = (index, event) => {
    newOptions.email.options[0].value[index].title = event.target.value;
    fillOptions(newOptions);
  };
 
  return (
    <Row className="pt-2 justify-content-end">
      <Col sm={3}>
        <Form.Label className="mb-0">{options.email?.options[0].title}</Form.Label>
        <p className="text-secondary">{options.email?.options[0].description}</p>
      </Col>

      <Col sm={9} className="mt-3 ">
      {
        options.email?.options[0].value.map((item, index) => {
          return (
            <div className="mb-3" key={index}>
              <div className="d-flex justify-content-between">
                <div className="form-check form-switch">
                  <input 
                    className="form-check-input" 
                    checked={item.checked} 
                    onClick={() => showContext(index)} 
                    onChange={()=>{}}
                    type="checkbox" 
                    id={index}
                  />
                  <label className="form-check-label" htmlFor={index}>{item.name}</label>
                </div>
                <label className="form-check-label text-primary" htmlFor={index}>Edit template</label>
              </div>

              <div className={activeIndex === index ? "d-block" : "d-none"} >
                <Col sm={9}>
                  <Form.Control 
                    size="lg" 
                    className="mt-3 mb-4" 
                    type="text" 
                    defaultValue={item.title}
                    onChange={e => handlerTitle(index, e)}
                  />
                </Col>
                <Editor item={item} index={index}/>
              </div>
            </div>
          )
        })
      }
      </Col>
    </Row>
  )
}