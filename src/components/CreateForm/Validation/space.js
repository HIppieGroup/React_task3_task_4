export const validSpace = (input) => {
  if (input.replace(/\s/g,'') == '') {
    return false;
  }
  return true;
}