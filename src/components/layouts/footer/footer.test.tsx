import { render } from "@testing-library/react";
import Footer from "./footer";


describe('<Footer />', () => {
  it('render text with link', () => {
    const { getByText } = render(
      <Footer />
    );

    const link = getByText('GitHub');
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', 'https://github.com/rahmadnasutionn/animation-hooks')
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noreferrer');
  })
});