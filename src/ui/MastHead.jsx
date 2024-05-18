import { useRef, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import Hero from "./Hero";

import { Navbar as NavEn } from "../fragments/en";
import { Navbar as NavPt } from "../fragments/pt";
import { Hero as HeroContentEn } from "../fragments/en";
import { Hero as HeroContentPt } from "../fragments/pt";
import { getHeaderHeight } from "../features/view/viewFeatures.slice";

const MastHead = () => {
  const ref = useRef(null);
  const { isEnglish } = useSelector((state) => state.viewSettings);
  const dispatch = useDispatch();
  const [headerHeight, setHeaderHeight] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [className, setClassName] = useState("");
  useEffect(() => {
    const height = ref.current.clientHeight;
    dispatch(getHeaderHeight(ref.current.clientHeight));
    setHeaderHeight(height);
  }, [dispatch]);
  useEffect(() => {
    const handleScroll = () => {
      const pos = window.scrollY;
      setScrollY(pos);
      setClassName(
        scrollY > headerHeight
          ? "!bg-von-darkGray/50 dark:!bg-von-lightGray/50 !backdrop-blur-sm"
          : "",
      );
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [headerHeight, scrollY]);

  return (
    <header ref={ref}>
      {isEnglish ? (
        <NavEn className={className} />
      ) : (
        <NavPt className={className} />
      )}
      <Hero>{isEnglish ? <HeroContentEn /> : <HeroContentPt />}</Hero>
    </header>
  );
};

export default MastHead;
