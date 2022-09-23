import React, { useEffect } from 'react'
import { useLocation } from 'react-router';

type Props = {
  children: React.ReactElement
}

export default function ScrollToTop({ children }: Props) {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);


  return <>{children}</>
}