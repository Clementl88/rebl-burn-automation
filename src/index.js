// Main entry point - shows the automation flow
const BurnEngine = require('./burn-engine');

// Simulate ZORA webhook handler
async function handleZoraWebhook(saleEvent) {
    console.log('🚀 Auto-burn triggered by ZORA sale');
    
    const engine = new BurnEngine();
    const result = await engine.executeBurn(saleEvent);
    
    console.log('✅ Burn simulation complete:', result);
    return result;
}

// Export for testing
module.exports = { handleZoraWebhook, BurnEngine };
