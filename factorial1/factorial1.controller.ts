import { BadRequestException, Controller, Get, Param } from '@nestjs/common';

@Controller('factorial1')
export class Factorial1Controller {

    @Get(':n')
    calculateFactorial(@Param('n') n: string): { result: number } {
        const numberN = parseInt(n, 10);
        if (isNaN(numberN) || numberN < 0) {
            throw new BadRequestException('Please provide a valid non-negative integer for n.');
        }
        const result = this.factorial(numberN);
        return { result };
    }

    private factorial(n: number): number {
        if (n === 0) return 1; // 0! is 1
        let result = 1;
        for (let i = 1; i <= n; i++) {
            result *= i;
        }
        return result;
    }
}
