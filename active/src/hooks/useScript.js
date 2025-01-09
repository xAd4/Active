import { useEffect } from "react";

export const useScript = (src) => {
  useEffect(() => {
    console.log(`Loading script: ${src}`);
    const script = document.createElement("script");
    script.src = src;
    script.async = true;
    document.body.appendChild(script);

    return () => {
      console.log(`Removing script: ${src}`);
      document.body.removeChild(script);
    };
  }, [src]);
};
