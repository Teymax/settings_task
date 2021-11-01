import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import { Tabs } from '../Tabs'

export const Settings = () => {
  return (
    <div className="mt-5">
      <Container>
        <Row>
          <Col>
            <h2>Settings</h2>
            <hr/>
          </Col>
        </Row>
          <Col>
            <Tabs />
          </Col>
      </Container>
    </div>
  )
}
