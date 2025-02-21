import { Card, ListGroup } from 'react-bootstrap';

export default function Recommendation({ financialData }) {
  const { income, expenses, goal } = financialData;
  const recommendations = [
    `Consider reducing expenses by 10% to save more.`,
    `Invest at least 20% of your income for retirement.`,
    `Track your spending regularly to stay on target for your goal: ${goal}`,
  ];

  return (
    <Card>
      <Card.Header>Financial Recommendations</Card.Header>
      <ListGroup variant="flush">
        {recommendations.map((rec, index) => (
          <ListGroup.Item key={index}>{rec}</ListGroup.Item>
        ))}
      </ListGroup>
    </Card>
  );
}
