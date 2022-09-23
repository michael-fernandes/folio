import React, { useEffect } from 'react'
import { useLocation } from 'react-router';

type Props = {
  children: React.ReactElement
}

function scrollToHash() {

  /* Obtain hash from current location (and trim off leading #) */
  const id = window.location.hash.substr(1);

  if (id) {
    /* Find matching element by id */
    const anchor = document.getElementById(id);

    if (anchor) {
      /* Scroll to that element if present */
      anchor.scrollIntoView();
    }
  }
}

export default function ScrollToTop({ children }: Props) {
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === '/') scrollToHash();
    else {
      window.scrollTo(0, 0);
    }
  }, [location]);


  return <>{children}</>
}