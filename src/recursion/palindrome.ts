function palindrome(input: string): boolean {
  if (input.length == 1 || input.length == 0) return true;
  if (input[0] == input[input.length - 1])
    return palindrome(input.substring(1, input.length - 1));
  return false;
}

console.log(palindrome("racecar"));
