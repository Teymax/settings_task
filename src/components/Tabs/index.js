import React from 'react';
import { Tab, Row, Col, Nav } from 'react-bootstrap';

import { Main } from '../Main';
import { Email } from '../Email';

import { useOptions } from '../hooks/useOptions'

export const Tabs = () => {

  const { options } = useOptions();

  return (
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row>
        <Col sm={2}>
          <Nav variant="tabs" className="flex-column mt-5">
            <Col md={8}>
              <Nav.Item  className="m-2 text-grey">
                <Nav.Link eventKey="first">{options.main?.name}</Nav.Link>
              </Nav.Item>
            </Col>
            <Col md={8}>
              <Nav.Item className="m-2 text-grey">
                <Nav.Link eventKey="second">{options.email?.name}</Nav.Link>
              </Nav.Item>
            </Col>
          </Nav>
        </Col>
        <Col sm={10}>
          <Tab.Content className="mt-5">
            <Tab.Pane eventKey="first">
              <Main />
            </Tab.Pane>
            <Tab.Pane eventKey="second">
              <Email />
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  )
}
