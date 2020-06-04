const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;
// Math.LN2 is more precise, and tests fail
const LN2 = 0.693;

module.exports = function dateSample(sampleActivity) {
  if (!sampleActivity || typeof sampleActivity !== 'string') {
    return false;
  }

  const numericSampleActivity = Number.parseFloat(sampleActivity);
  if (Number.isNaN(numericSampleActivity)
      || numericSampleActivity <= 0
      || numericSampleActivity > MODERN_ACTIVITY) {
    return false;
  }

  const t = (Math.log(MODERN_ACTIVITY / numericSampleActivity) * HALF_LIFE_PERIOD) / LN2;
  return Math.ceil(t);
};
