import { renderHook } from "@testing-library/react";
import { useDebounce } from "../use-debounce";

describe('useDebounce', () => {
  afterEach(() => {
    jest.useRealTimers();
  });

  const value = 'test value';

  const {
    result: { current: debouncedValue }
  } = renderHook(() => useDebounce(value));

  expect(value).toBe(debouncedValue);

  test('should debounce with default debounce 500ms', () => {
    mockSetTimeout();
    renderHook(() => useDebounce('value'));

    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenCalledWith(expect.any(Function), 500);
  });

  test('should debounce with default debounce 500ms', () => {
    mockSetTimeout();
    renderHook(() => useDebounce('test'));

    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenCalledWith(expect.any(Function), 500);
  });

  test('should debounce with given debounce', () => {
    mockSetTimeout();
    renderHook(() => useDebounce('test', 1000));

    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenCalledWith(expect.any(Function), 1000);
  });

  test('should call cleartimeout on unmount', () => {
    mockClearTimeout();
    const { unmount } = renderHook(() => useDebounce('test'));
    unmount();

    expect(clearTimeout).toHaveBeenCalledTimes(1);
  });
});

function mockSetTimeout() {
  jest.useFakeTimers();
  jest.spyOn(global, 'setTimeout');
};

function mockClearTimeout() {
  jest.useFakeTimers();
  jest.spyOn(global, 'clearTimeout');
}