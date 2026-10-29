import {describe, expect, it} from 'vitest';
import {hasil} from './engine.js';

describe('hasil', () => {
    it('should return the correct result for addition', () => {
        expect(hasil(10, 5, '+')).toBe(15);
    });

    it('should return the correct result for subtraction', () => {
        expect(hasil(10,5,'-')).toBe(5);
    });

    it('should return the correct result for multiplication', () => {
        expect(hasil(10,5,'*')).toBe(50);
    });

    it('should return the correct result for division', () => {
        expect(hasil(10,5,'/')).toBe(2);
    });

    it('should throw an error for division by zero', () => {
        expect(() => hasil(10, 0, '/')).toThrowError('Division by zero is not allowed.');
    });

    it('should return an the correct result for negative numbers when multiplied with positive numbers', () => {
        expect(hasil(-10, 5, '*')).toBe(-50);
    })
});
g