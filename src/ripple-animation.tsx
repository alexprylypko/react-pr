import React from "react";
import styled from "styled-components";

import { useMediaQuery, useTheme } from "@material-ui/core";

import getAnimationData from "./animationData";

const Lottie = require("react-lottie-light").default;

const RippleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

type Props = {
  className?: string;
};

const RippleAnimation: React.FC<Props> = ({ className }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("xs"));
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: getAnimationData(theme.palette.primary.main),
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <RippleWrapper className={className}>
      <Lottie
        options={defaultOptions}
        height={isSmallScreen ? 110 : 150}
        width={isSmallScreen ? 150 : 200}
      />
    </RippleWrapper>
  );
};

export default RippleAnimation;
