import { home_dataEN, home_dataRU } from "../Home/data";
import { ProjectItem } from "@/components/projects";
import { Grid, styled } from "@mui/material";
import {
  motion,
  useSpring,
  useTransform,
  useViewportScroll,
} from "framer-motion";
import {
  FC,
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { LanguageProps, ProjectItemProps } from "shared/types/home";

type Props = {};

const Root = styled(Grid)(({ theme }) => ({}));

export const ProjectsWrapper: FC<Props> = (props) => {
  const scrollRef = useRef(null);
  const ghostRef = useRef(null);
  const [scrollRange, setScrollRange] = useState(0);
  const [viewportW, setViewportW] = useState(0);

  useLayoutEffect(() => {
    // @ts-ignore
    scrollRef && setScrollRange(scrollRef!.current!.scrollWidth);
  }, [scrollRef]);

  const onResize = useCallback((entries: any) => {
    for (let entry of entries) {
      setViewportW(entry.contentRect.width);
    }
  }, []);

  useLayoutEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => onResize(entries));
    // @ts-ignore
    resizeObserver.observe(ghostRef!.current);
    return () => resizeObserver.disconnect();
  }, [onResize]);

  const { scrollYProgress } = useViewportScroll();
  const transform = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -scrollRange + viewportW]
  );
  const physics = { damping: 15, mass: 0.27, stiffness: 55 };
  const spring = useSpring(transform, physics);

  const [language, setLanguage] = useState<LanguageProps>("en");
  const [home_bodyData, setHome_bodyData] = useState(home_dataEN);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // @ts-ignore
      const LSLanguage: LanguageProps =
        window!.localStorage!.getItem("language_folio")!;
      setLanguage(LSLanguage);
    }
  }, []);

  useEffect(() => {
    switch (language) {
      case "en":
        setHome_bodyData(home_dataEN);
        break;
      case "ru":
        setHome_bodyData(home_dataRU);
        break;

      default:
        break;
    }
  }, [language]);

  const { project } = home_bodyData;

  return (
    <Root container>
      <div className="projects_wrapper">
        <div className="scroll-container">
          <motion.section
            ref={scrollRef}
            style={{ x: spring }}
            className="thumbnails-container"
          >
            <div className="thumbnails">
              {project.projects.map((item: ProjectItemProps, id: number) => (
                <ProjectItem
                  data={item}
                  id={id}
                  variant={id % 2 ? "green" : "purpule"}
                />
              ))}
            </div>
          </motion.section>
        </div>
        <div ref={ghostRef} style={{ height: scrollRange }} className="ghost" />
      </div>
    </Root>
  );
};
