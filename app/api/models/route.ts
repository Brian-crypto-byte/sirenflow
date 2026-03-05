import { NextResponse } from 'next/server';
import { modelsData } from '@/lib/data';

export async function GET() {
  return NextResponse.json(modelsData);
}
