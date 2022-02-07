import React from 'react';
import { BrowseContainer } from '../containers/browse';
import { useContent } from '../hooks';
import { selectionFilter } from '../utils';

export default function Browse() {
  const { series } = useContent('series');
  const { films } = useContent('films');
  const { theatre } = useContent('theatre');
  const slides = selectionFilter({ series, films, theatre });

  return <BrowseContainer slides={slides} />;
}
