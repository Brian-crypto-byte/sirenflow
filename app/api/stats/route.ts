import { NextResponse } from 'next/server';
import { modelsData, projectsData } from '@/lib/data';

export async function GET() {
  const totalBudget = projectsData.reduce((sum, p) => {
    const budget = parseFloat(p.budget.replace(/[$,]/g, ''));
    return sum + budget;
  }, 0);

  return NextResponse.json({
    modelsCount: modelsData.length,
    projectsCount: projectsData.length,
    totalBudget: `$${(totalBudget / 1000).toFixed(0)}K`,
  });
}
