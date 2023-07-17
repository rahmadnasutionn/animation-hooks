import { act, renderHook } from '@testing-library/react';
import usecopyToClipboard from '../usecopy-to-clipboard';

describe('useCopyToClipboard', () => {
  const originalClipboard = { ...global.navigator.clipboard };
  const mockData = 'Testing copy';

  beforeEach(() => {
    const mockClipboard = {
      writeText: jest.fn(),
    };

    // @ts-ignore
    global.navigator.clipboard = mockClipboard;
  });

  afterEach(() => {
    jest.resetAllMocks();

    // @ts-ignore
    global.navigator.clipboard = originalClipboard;
  })

  test('Should use clipboard', () => {
    const { result } = renderHook(() => usecopyToClipboard());

    expect(result.current[0]).toBe(null);
    expect(typeof result.current[1]).toBe('function');
  })

  test('Should copy to the clipboard and the state', async () => {
    const { result } = renderHook(() => usecopyToClipboard());

    await act(async () => {
      await result.current[1](mockData);
    });

    expect(navigator.clipboard.writeText).toHaveBeenCalledTimes(1);
    expect(navigator.clipboard.writeText).toHaveBeenCalledWith(mockData);
    expect(result.current[0]).toBe(mockData);
  })
});