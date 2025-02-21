export function analyzeFinancialData(data) {
  let recommendations = [];

  if (data.expenses > data.income) {
    recommendations.push('Consider reducing unnecessary expenses.');
  }

  if (data.goal && data.expenses > 0) {
    recommendations.push(`Try saving 20% of your income for the goal: ${data.goal}`);
  }

  return recommendations;
}
