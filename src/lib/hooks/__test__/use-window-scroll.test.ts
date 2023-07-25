import { renderHook } from "@testing-library/react";
import useWindowScroll from "../use-window-scroll";


describe('useWindowScroll', () => {
  it('should return initial scroll position and scrollTo function', () => {
    const { result } = renderHook(() => useWindowScroll());

    const [ position, scrollTo ] = result.current;

    expect(position.x).toBe(0);
    expect(position.y).toBe(0);

    expect(typeof scrollTo).toBe('function');
  })
});