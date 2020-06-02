const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  if (!sampleActivity || typeof sampleActivity !== 'string') {
    return false;
  }

  const numericSampleActivity = Number(sampleActivity);
  if (Number.isNaN(numericSampleActivity)
      || numericSampleActivity <= 0
      || numericSampleActivity > 15) {
    return false;
  }

  const t = (Math.log(MODERN_ACTIVITY / numericSampleActivity) * HALF_LIFE_PERIOD) / 0.693;
  return Math.ceil(t);
};
