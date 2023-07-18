import { render } from "@testing-library/react";
import { FADE_DOWN_CODE } from "~/variants/code-snippets";
import { FadeDownStagger } from "~/variants/variant-preview";
import VariantList from "./variant-list";

const randomVariants: VariansType = {
  name: 'Fade Down with Stagger',
  preview: '',
  code: FADE_DOWN_CODE
}

describe('<VariantList />', () => {
  test('has all fields', () => {
    const { getByText } = render(<VariantList variant={randomVariants} />)

    expect(getByText('Fade Down with Stagger')).toBeInTheDocument();
  })
});