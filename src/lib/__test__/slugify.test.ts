import { slugify } from "../utils";


describe('slugify', () => {
  it('should return a valid string', () => {
    const inputString = 'This is a Test String';
    const expectedString = 'this-is-a-test-string';
    const result = slugify(inputString);

    expect(result).toBe(expectedString);
  });

  it('should handle special characters property', () => {
    const inputString = 'This string with @$#%^/ Special Characters';
    const expectedString = 'this-string-with-special-characters';
    const result = slugify(inputString);

    expect(result).toBe(expectedString);
  });

  it('should handle multiple spaces and dashes', () => {
    const inputString = '     This is string with spaces ---- and dashes   ';
    const expectedString = 'this-is-string-with-spaces-and-dashes';
    const result = slugify(inputString);

    expect(result).toBe(expectedString);
  });
});