"use client";
import { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import ExpenseInput from './ExpenseInput';
import Recommendation from './Recommendation';
import Charts from './charts';

export default function Dashboard() {
  const [financialData, setFinancialData] = useState(null);

  const handleSubmitData = (data) => {
    setFinancialData(data);
  };

  return (
    <Container fluid="md" className="mt-5">
      <Row className="justify-content-center">
        <Col md={8} className="text-center">
          <h1 className="mb-4">Personal Finance Tracker</h1>
        </Col>
      </Row>
      
      <Row className="justify-content-center">
        <Col md={8}>
          {/* Expense Input Form */}
          <ExpenseInput onSubmit={handleSubmitData} />
        </Col>
      </Row>

      {financialData && (
        <>
          {/* Charts Section */}
          <Row className="justify-content-center mt-4">
            <Col md={8}>
              <Charts data={financialData} />
            </Col>
          </Row>

          {/* Recommendations Section */}
          <Row className="justify-content-center mt-4">
            <Col md={8}>
              <Recommendation financialData={financialData} />
            </Col>
          </Row>
        </>
      )}
    </Container>
  );
}
