export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    const task = true; //Here The eslint-disable-line no-unused-vars
    const task2 = false; // Here The eslint-disable-line no-unused-vars
  }

  return [task, task2];
}
