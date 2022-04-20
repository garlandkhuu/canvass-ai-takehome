import React, { useState, useCallback } from "react";
import styled, { css } from "styled-components";

import { ReactComponent as CloseIcon } from '../assets/close-icon.svg';

const TagInput = () => {
  const [inputValue, setInputValue] = useState("");
  const [tags, setTags] = useState([]);
  const [inputFocused, setInputFocused] = useState(false);

  //Used to allow the wrapper bar to be highlighted when the inner input is focused
  const onInputFocus = useCallback(() => setInputFocused(true), [setInputFocused]);
  const onInputBlur = useCallback(() => setInputFocused(false), [setInputFocused]);

  const onInputChange = (e) => setInputValue(e.target.value);

  const onInputKeydown = useCallback((e) => {
    if (e.key === "Enter" && inputValue) {
      //Input new tag and give an unique id by incrementing on the id of the last element
      setTags((prev) => {
        const nextId = prev.length > 0 ? prev[prev.length - 1].id + 1 : 0;
        return [...prev, {id: nextId, text: inputValue}];
      });
      //reset input when enter is pressed
      setInputValue("");
    }
  }, [inputValue, setInputValue]);

  const deleteTag = (id) => {
    setTags((prev) => prev.filter((tag) => tag.id !== id));
  };
  
  return (
    <BarWrapper $focused={inputFocused}>
      {tags.map((tag) => (
        <TagPill key={`tag-${tag.id}`}>
          <div>{tag.text}</div>
          <DeleteTagButton onClick={() => deleteTag(tag.id)}>
            <CloseIcon />
          </DeleteTagButton>
        </TagPill>
      ))}
      <InputBar
        value={inputValue}
        onFocus={onInputFocus}
        onBlur={onInputBlur}
        onChange={onInputChange}
        onKeyDown={onInputKeydown}
        $area="tags"
        placeholder="Input tag and press enter"/>
    </BarWrapper>
  );
}

const TagPill = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  max-height: 18px;
  padding: 3px 7px;
  background: ${({ theme }) => theme.colors.blue};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 30px;
  font-size: 14px;

  & > div {
    white-space: nowrap;
  }
`;

const DeleteTagButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  outline: none;
  border: none;
  cursor: pointer;
  padding: 0;

  & > svg {
    height: 10px;
    width: 10px;
    margin-left: 8px;
    path, g {
      stroke: ${({ theme }) => theme.colors.white};
      fill: ${({ theme }) => theme.colors.white};
    }
  }
`;

const BarWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 6px 0 2px 0;
  margin: 10px 20px;
  border: ${({ theme }) => `1px solid ${theme.colors.black}`};
  border-radius: 2px;
  max-height: 26px;

  overflow-x: scroll;
  overflow-y: hidden;

  ${({ $focused }) => $focused && css`
    outline: ${({ theme }) => `${theme.colors.black} 1px solid`};
  `}

  ::-webkit-scrollbar {
    height: 4px;
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.white};
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.grey2};
    border-radius: 10px;
  }

  ${TagPill} {
    margin: 0 5px;
  }
`;

const InputBar = styled.input`
  grid-area: ${({ $area }) => $area};
  border: none;
  width: 100%;
  height: 100%;

  &:focus {
    border: none;
    outline: none;
  }
`;

export default TagInput;
