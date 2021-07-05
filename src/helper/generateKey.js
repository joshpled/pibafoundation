let date = Date.now();
export default function generateKey(params) {
  return `${params}_${date}`;
}
