"use client";

import { useState } from 'react';

import SearchBar from '~/components/text-variants/search-bar';
import VariantList from '~/components/text-variants/variant-list';
import { generateZeros } from '~/lib/utils';

import { 
  FADE_DOWN_CODE, 
  FADE_UP_CODE, 
  MULTIDIRECTION_SLIDE_CODE, 
  STAGGERED_FADE_IN_CODE, 
  TYPING_EFFECT
} from '~/variants/code-snippets';
import { 
  FadeDownStagger, 
  FadeUpStagger, 
  MultiDirectionSlide, 
  StaggeredFadeIn, 
  TypingEffect
} from '~/variants/variant-preview';

function TextVariants() {
  const [keys, setKeys] = useState(generateZeros(20));
  const variants = [
    {
      name: 'Fade Down with Stagger',
      preview: <FadeDownStagger key={keys[0]} />,
      code: FADE_DOWN_CODE
    },
    {
      name: 'Fade Down with Stagger',
      preview: <FadeUpStagger key={keys[1]} />,
      code: FADE_UP_CODE
    },
    {
      name: 'Multi Direction Slide',
      preview: <MultiDirectionSlide key={keys[2]} />,
      code: MULTIDIRECTION_SLIDE_CODE
    },
    {
      name: "Staggered Fade In",
      preview: <StaggeredFadeIn key={keys[3]} />,
      code: STAGGERED_FADE_IN_CODE,
    },
    {
      name: 'Typing Effect',
      preview: <TypingEffect key={keys[4]} />,
      code: TYPING_EFFECT
    }
  ];

  function restartAnimation(index: number) {
    setKeys((prevKeys) => {
      const newKeys = [...prevKeys];
      newKeys[index] += 1;
      return newKeys;
    });
  }
  
  const [query, setQuery] = useState('');

  const filteredQuery = 
    query === ''
    ? variants
    : variants.filter((variant) => {
      return variant.name.toLowerCase().includes(query.toLowerCase().trim())
    })
  return (
      <div className="w-full">
        <div className="flex flex-col min-h-screen items-center py-2 space-y-12">
          <div className="mb-6 w-full">
            <SearchBar filteredQuery={filteredQuery} />
          </div>
          {filteredQuery.length > 0 ? (
            filteredQuery.map((variant, index) => (
              <VariantList
                key={variant.name}
                variant={variant} 
                index={index} 
                restartAnimation={restartAnimation} 
              />
            ))
          ) : (
            <p>No variants found</p>
          )}
        </div>
      </div>
  );
};

export default TextVariants;