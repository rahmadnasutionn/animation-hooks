export const usageEventListener =
`"use client";

import { useState } from "react";
import useEventListener from "~/lib/hooks/use-event-listener";

export default function Component() {
  const [isScroll, setIsScroll] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 20) {
      setIsScroll(true);
    } else {
      setIsScroll(false);
    }
  };

  // example with window based event
  useEventListener('scroll', handleScroll)

  return (
    <header className={isScroll ? 'bg-white shadow-md' : 'bg-transparent'}>
      // your navbar link here
    </header>
  )
};`

export const useIntersectionObserver = `
import { useIntersectionObserver } from '~/lib/hooks';
import { useState } from 'react';
import 

export default function Component() {
  const [ref, entry] = useIntersectionObserver({ onAppearOnly: true });

  return (
    <div 
      ref={ref}
    >
      <div
        className={entry?.isIntersection ? 'bg-red' : 'bg-green'}
      >
        <span>
          {entry?.isIntersecting ? 'Full visible' : 'Obscured'}
        </span>
      </div>
    </div>
  );
};`

export const useCopyToClipboard = `
import { useCopyToClipboard } from '~/lib/hooks'

export default function Component({ title, description }: any) {
  const [value, copy] = useCopyToClipboard()

  return (
    <>
      <h1>Click to copy:</h1>
      <div style={{ display: 'flex' }}>
        <button onClick={() => copy('Hello World!')}>Hello World!</button>
        <button onClick={() => copy(title)}>{title}</button>
        <button onClick={() => copy(description)}>{description}</button>
      </div>
      <p>Copied value: {value ? 'Copied' : 'Copy'}</p>
    </>
  )
}`

export const useOnclickOutside = `
import { useRef } from 'react'

import { useOnClickOutside } from '~/lib/hooks'

export default function Component() {
  const ref = useRef(null)

  const handleClickOutside = () => {
    // Your custom logic here
    console.log('clicked outside')
  }

  const handleClickInside = () => {
    // Your custom logic here
    console.log('clicked inside')
  }

  useOnClickOutside(ref, handleClickOutside)

  return (
    <button
      ref={ref}
      onClick={handleClickInside}
      style={{ width: 200, height: 200, background: 'cyan' }}
    />
  )
}`

export const useImageOnLoad = `
import { CSSProperties } from 'react'

import { useImageOnLoad } from '~/lib/hooks';

export default function Component() {
  const { handleImageOnLoad, css } = useImageOnLoad()

  const style: { [key: string]: CSSProperties } = {
    wrap: {
      position: 'relative',
      width: 400,
      height: 400,
      margin: 'auto',
    },
    image: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
    },
  }

  return (
    <div style={style.wrap}>
      {/* Small image load fast */}
      <img
        style={{ ...style.image, ...(css.thumbnail as CSSProperties) }}
        src="https://via.placeholder.com/150"
        alt="thumbnail"
      />
      {/* Full size image */}
      <img
        onLoad={handleImageOnLoad}
        style={{ ...style.image, ...(css.fullSize as CSSProperties) }}
        src="https://via.placeholder.com/600"
        alt="fullImage"
      />
    </div>
  )
}`;

export const useWindowScroll = `
import { useWindowScroll } from '~/lib/hooks';

export default function Component() {
  const [position, scrollTo] = useWindowScroll();

  return (
    <div>
      {position.y > 100 && (
        <button onClick={() => scrollTo({ y: 0 })}>
          Scroll to Top
        </button>
      )}
    </div>
  )
}`


export const useDebounce = `
import { useDebounce } from '~/lib/hoos'
import { useState } from 'react';

export default function Component() {
  const [value, setValue] = useState('');

  const debouncedValue = useDebounce<string>(value, 500);

  const handleChange = (event: any) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    const fetch = async () => {
      // do fetch here
    }
  }, [devouncedValue]);

  return (
    <div>
      <p>Value real time: {value}</p>
      <p>Debounce value: {debouncedValue}</p>

      <input type='text' value={value} onChange={handleChange} />
    </div>
  )
}`;

export const useDocumentTitle = `
  import { useDocumentTitle } from '~/lib/hooks';

  export default function Component() {
    useDocumentTitle('Example');

    return (
      //
    )
  }`;