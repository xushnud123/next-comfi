"use client";
import React, { useEffect, useRef, useState } from "react";
import cx from "classnames";

import { Minus, Plus } from "../icons";

import cls from "./accordion.module.scss";

function Accordion({ title, contents, className = "" }) {
  const [active, setActive] = useState(false);
  const content = useRef(null);
  const [height, setHeight] = useState("0px");

  useEffect(() => {
    // console.log('Height for ', title, ': ', height);
  }, [height]);

  function toggleAccordion() {
    setActive(!active);
    setHeight(active ? "0px" : `${content.current.scrollHeight}px`);
  }

  return (
    <div className={cx(cls.accordion__section, cls[`${className}`])}>
      <div
        className={cx(cls.accordion, active && cls.active)}
        onClick={toggleAccordion}>
        <p className={cls.accordion__title}>{title}</p>
        <span className={cls.icon}>{active ? <Minus /> : <Plus />}</span>
      </div>
      <div
        ref={content}
        style={{ maxHeight: `${height}` }}
        className={cls.accordion__content}>
        <div
          className={cls.accordion__text}
          dangerouslySetInnerHTML={{ __html: contents }}
        />
      </div>
    </div>
  );
}

export default Accordion;
