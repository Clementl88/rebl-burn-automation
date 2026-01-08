const { BurnEngine } = require('../src/burn-engine');

describe('Auto-Burn System Verification', () => {
    test('10% calculation is correct', () => {
        const engine = new BurnEngine();
        
        // Test various amounts
        expect(engine.calculateBurnAmount(100)).toBe(10);
        expect(engine.calculateBurnAmount(50)).toBe(5);
        expect(engine.calculateBurnAmount(0.01)).toBeCloseTo(0.001);
    });
    
    test('Full burn flow executes', async () => {
        const engine = new BurnEngine();
        const testSale = { amount: 150, txHash: '0xTEST123' };
        
        const result = await engine.executeBurn(testSale);
        
        expect(result.success).toBe(true);
        expect(result.burnAmount).toBe(15); // 10% of 150
        expect(result.burnAddress).toBeDefined();
    });
    
    test('Burn address is correct', () => {
        const engine = new BurnEngine();
        expect(engine.burnAddress).toMatch(/^REBLburn/);
    });
});
