# 🔥 RebelInuX Auto-Burn System

**Live automatic 10% burn of ZORA sales to benefit $REBL holders.**

## 🚀 Live Status
- **Last Burn:** [Timestamp]
- **Total Burned:** X,XXX $REBL
- **System Status:** ✅ Operational

## 📊 Transparency Dashboard
Live burn tracker: [https://rebelinux.fun/transparency](https://rebelinux.fun/transparency)

## 🛠️ How It Works
1. **ZORA Sale Event** → Webhook trigger
2. **AWS Lambda** processes 10% of sale value
3. **Jupiter Swap** converts to $REBL
4. **Automatic Burn** to dead wallet

## 🔗 Verification Proofs
- **Test Transaction:** [0x...](link)
- **Burn Address:** `REBLburnxxxxxxxxxxxxxxxxxxxxxx`
- **AWS Lambda Logs:** [Screenshot]

## 🧪 Running Locally
```bash
git clone https://github.com/yourusername/auto-burn
cd auto-burn
npm install
cp .env.example .env
# Add your API keys
npm run test-flow
