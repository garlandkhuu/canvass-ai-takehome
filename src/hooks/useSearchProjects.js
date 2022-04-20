import { useState, useEffect } from "react";

import { projects } from "../data";

/**
 * Searches and filters projects with a given search query
 * @param {string} query 
 * @returns a filtered list of projects matching query
 */
const useSearchProjects = (query) => {
  const [results, setResults] = useState(projects);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    // Filter projects with given query (non case sensitive)
    const filteredResults = projects.filter(
      (project) => project.name.toLowerCase().includes(query.toLowerCase())
    );
    setResults(filteredResults);
    setLoading(false);
  }, [query]);

  return { results, loading };
}

export default useSearchProjects;
