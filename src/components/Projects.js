import React, { useState } from "react";
import styled from "styled-components/macro";

import Project from "./Project";
import TagInput from "./TagInput";
import Loader from "./Loader";
import debounce from "../utils/debounce";
import useSearchProjects from "../hooks/useSearchProjects";

export default function Projects() {
  const [query, setQuery] = useState('');
  const { results, loading } = useSearchProjects(query);

  //Debounce the event handler to not fire for every single key stroke
  const onSearchChange = (e) => debounce(() => {
    setQuery(e.target.value);
  }, 250);

  return (
    <Wrapper $area="content">
      <Title $area="title">Projects</Title>
      <Search
        $area="search"
        placeholder="Start typing to search..."
        onChange={onSearchChange}
      />
      <TagInput />
      <ProjectsList $area="projects">
        {loading ? (
          <LoaderWrapper>
            <Loader />
          </LoaderWrapper>
        ) : results.map((project) => (
          <Project key={project.id} projectData={project} />)
        )}
      </ProjectsList>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  grid-area: ${({ $area }) => $area};
  display: grid;
  grid-template-areas:
    "title"
    "search"
    "tags"
    "projects";
  grid-template-rows: 70px 30px 60px auto;
  max-width: 1400px;
`;

const Title = styled.h1`
  grid-area: ${({ $area }) => $area};
`;

const Search = styled.input`
  grid-area: ${({ $area }) => $area};
  margin: 0 20px;
  height: 26px;
`;

const ProjectsList = styled.article`
  grid-area: ${({ $area }) => $area};
  margin-top: 15px;
  padding-right: 45px;
`;

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;