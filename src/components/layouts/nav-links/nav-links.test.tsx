import { render, screen } from "@testing-library/react"
import NavLinks from "./nav-links"



describe('<NavLinks />', () => {
  it('renders full text nav', () => {
    const { container, debug } = render(
      <NavLinks />
    );

    expect(container).toHaveTextContent('Usage');
    expect(container).toHaveTextContent('Text Variants');
    expect(container).toHaveTextContent('Hooks');

  });

  it('renders links text nav', () => {
    const { getByText } = render(
      <NavLinks />
    );

    const link = getByText('Usage');
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/usage');
    
    const textVariantsLink = getByText('Text Variants');
    expect(textVariantsLink).toBeInTheDocument();
    expect(textVariantsLink).toHaveAttribute('href', '/text-variants');

    const hooksLink = getByText('Hooks');
    expect(hooksLink).toBeInTheDocument();
    expect(hooksLink).toHaveAttribute('href', '/hooks');
  })
})