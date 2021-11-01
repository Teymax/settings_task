import React, { useState } from 'react';
import { Form, Row, Col } from 'react-bootstrap';

import { useOptions } from '../hooks/useOptions'
import { Editor } from './Editor'

export const Email = () => {
  const { options } = useOptions();
  const [activeIndex, setActiveIndex] = useState(null);

  const showContext = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
 
  return (
    <Row className="pt-2 justify-content-end">
      <Col sm={3}>
        <Form.Label className="mb-0">{options.email.options[0].title}</Form.Label>
        <p className="text-secondary">{options.email.options[0].description}</p>
      </Col>

      <Col sm={9} className="mt-3 ">
      {
        options.email.options[0].value.map((item, index) => {
          return (
            <div className="mb-3" key={index}>
              <div className="d-flex justify-content-between">
                <div className="form-check form-switch">
                  <input className="form-check-input" onClick={() => showContext(index)} type="checkbox" id={item}/>
                  {/* <input className={activeIndex === index ? "form-check-input:checked" : "form-check-input"}  onClick={() => showContext(index)} type="checkbox" id={item}/> */}
                  <label className="form-check-label" htmlFor={item}>{item.name}</label>
                </div>
                <label className="form-check-label text-primary" htmlFor={item}>Edit template</label>
              </div>

              <div className={activeIndex === index ? "d-block" : "d-none"} >
                <Col sm={9}>
                  <Form.Control size="lg" className="mt-3 mb-4" type="text" defaultValue={item.title} />
                </Col>
                <Editor item={item}/>
              </div>
            </div>
          )
        })
      }
      </Col>
    </Row>
  )
}
