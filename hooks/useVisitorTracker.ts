"use client";
import Visitor from "@/func/analytics";
import { useEffect, useRef, useState } from "react"; 

const useVisitorTracker = (url: string, page: string) => {
  const isTracked = useRef(false);
  const [hasTracked, setHasTracked] = useState(false); 

  useEffect(() => {
    if (!isTracked.current && !hasTracked) {
      const trackVisitor = async () => {
        await Visitor(url, page);
        isTracked.current = true;
        setHasTracked(true); 
      };

      trackVisitor();
    }
  }, [url, page, hasTracked]); 
};

export default useVisitorTracker;
