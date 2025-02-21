import { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

export default function ExpenseInput({ onSubmit }) {
  const [income, setIncome] = useState('');
  const [expenses, setExpenses] = useState('');
  const [goal, setGoal] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { income, expenses, goal };
    onSubmit(data);  // Passing data back to the parent (Dashboard)
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Col md={6}>
          <Form.Group controlId="income">
            <Form.Label>Income</Form.Label>
            <Form.Control
              type="number"
              value={income}
              onChange={(e) => setIncome(e.target.value)}
              placeholder="Enter your income"
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group controlId="expenses">
            <Form.Label>Expenses</Form.Label>
            <Form.Control
              type="number"
              value={expenses}
              onChange={(e) => setExpenses(e.target.value)}
              placeholder="Enter your expenses"
            />
          </Form.Group>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col md={12}>
          <Form.Group controlId="goal">
            <Form.Label>Goal</Form.Label>
            <Form.Control
              type="text"
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
              placeholder="Enter your financial goal"
            />
          </Form.Group>
        </Col>
      </Row>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
