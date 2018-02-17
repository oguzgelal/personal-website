module.exports = stage => {
  const c = [];
  for (let i = 0; i <= stage; i++) { c.push(`s${i}`) }
  if (stage === -1) { c.push('sm') }
  return c.join(' ');
}