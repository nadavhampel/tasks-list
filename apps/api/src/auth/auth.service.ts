import { Injectable } from '@nestjs/common';
import jwt from 'jsonwebtoken';

@Injectable()
export class AuthService {
  async login(username: string, password: string) {
    if (username === 'john' && password === 'Password1') {
      const token = jwt.sign(
        { username, role: 'user' },
        process.env.JWT_SECRET!,
        { expiresIn: '1h' },
      );

      return { token };
    }

    throw new Error('Invalid credentials');
  }

  async verify(token: string) {
    try {
      return jwt.verify(token, process.env.JWT_SECRET!);
    } catch {
      throw new Error('Invalid or expired token');
    }
  }
}
