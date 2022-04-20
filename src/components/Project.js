import React from "react";
import styled, { css } from "styled-components";

import parseDate from "../utils/parseDate";

const Project = ({ projectData }) => {
  const {
    name,
    createdByUser,
    createdDate,
    template,
    target,
  } = projectData;

  return (
    <Wrapper>
      <Contents>
        <Row $justify="space-between" $margin="0 0 20px 0">
          <Typography $fontSize={18} $fontWeight="bold">
            {name}
          </Typography>
          <Typography $fontSize={18} $color="blue">
            {template}
          </Typography>
        </Row>
        <Row $margin="0 0 20px 0">
          <Typography>
            Target: {target}
          </Typography>
        </Row>
        <Row $justify="end" $padding="15px 0" $hasTopBorder>
          <Typography color="grey2">
            CREATED: {createdByUser} · {parseDate(createdDate)}
          </Typography>
        </Row>
      </Contents>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: ${({ theme }) => theme.colors.white };
  padding: 20px;
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid ${({ theme }) => theme.colors.black };
  padding: 15px 20px;
  width: 100%;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: ${({ $justify }) => $justify || "start"};
  margin: ${({ $margin }) => $margin || 0};
  padding: ${({ $padding }) => $padding || 0};

  ${({ theme, $hasTopBorder }) => $hasTopBorder && css`
    border-top: 2px solid ${theme.colors.grey};
  `}
`;

const Typography = styled.p`
  margin: ${({ $margin }) => $margin || 0};
  font-size: ${({ $fontSize }) => `${$fontSize || 16}px`};
  color: ${({ theme, $color }) => theme.colors[$color] || "black"};
  font-weight: ${({  $fontWeight }) => $fontWeight || "normal"};
`;

export default Project;
