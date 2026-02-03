import { NextResponse } from 'next/server';
import { users } from '../../../mocks/users';

export async function GET() {
  return NextResponse.json(users);
}
