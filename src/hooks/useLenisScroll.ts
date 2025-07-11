// // hooks/useLenisScroll.ts
// import { useEffect } from "react";
// import Lenis from "@studio-freight/lenis";

// export const useLenisScroll = () => {
//   useEffect(() => {
//   const lenis = new Lenis({
//     duration:0.1, // longer duration = smoother scroll
//     easing: (t: number) => t, // linear easing is smoothest (or try custom below)
//     smoothWheel: true,
//     // optional: for mobile touch
//   });

//   const raf = (time: number) => {
//     lenis.raf(time);
//     requestAnimationFrame(raf);
//   };

//   requestAnimationFrame(raf);

//   return () => lenis.destroy();
// }, []);

// };
