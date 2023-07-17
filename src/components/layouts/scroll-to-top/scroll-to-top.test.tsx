import {
  fireEvent,
  render,
  waitFor 
} from "@testing-library/react";
import ScrollToTop from ".";

describe('ScrollToTop', () => {
  it('should be not visible initialy', () => {
    const { queryByRole } = render(<ScrollToTop />);
    const button = queryByRole('button');
    expect(button).not.toBeInTheDocument();
  })

  it('should be visible when scroll down', () => {
    const { queryByRole } = render(<ScrollToTop />);
    const button = queryByRole('button');

    expect(button).not.toBeInTheDocument();

    window.scrollY = 100;
    fireEvent.scroll(window);

    setTimeout(() => {
      waitFor(() => {
        expect(button).toBeInTheDocument();
      })
    }, 500);
  });

  it('should scroll to top when clicked', () => {
    const { queryByRole } = render(<ScrollToTop />);
    const button = queryByRole('button');

    window.scrollY = 100;
    fireEvent.click(window);

    if (button) {
      fireEvent.click(window);
    }

    setTimeout(() => {
      waitFor(() => {
        expect(window.screenY).toBe(0);
      })
    }, 500);

  })
})