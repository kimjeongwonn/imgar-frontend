import { useSuggestQuery } from '@/redux/api/v3';
import React, { ReactElement, useEffect, useState } from 'react';
import { SearchBar, SuggestList } from '..';
import { SearchContainer } from './Search.styled';

export default function Search(): ReactElement {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [searchQueryOption, setSearchQueryOption] = useState<'all' | 'tag' | 'user'>('all');
  const [focus, setFocus] = useState<boolean>(false);

  useEffect(() => {
    if (searchQuery.match(/^#/)) {
      setSearchQueryOption('tag');
    } else if (searchQuery.match(/^@/)) {
      setSearchQueryOption('user');
    } else {
      setSearchQueryOption('all');
    }
  }, [searchQuery]);

  const { data } = useSuggestQuery(searchQuery.replace(/^[@#]/, ''), { skip: !searchQuery && !focus });

  return (
    <SearchContainer>
      <SearchBar placeholder="Images, #tags, @users oh my!" onQueryChange={setSearchQuery} setFocus={setFocus} />
      {!!searchQuery && focus && !!(data?.posts?.length || data?.users?.length || data?.tags?.length) && (
        <SuggestList
          keyword={searchQuery.replace(/^[@#]/, '')}
          posts={searchQueryOption === 'all' ? data?.posts : []}
          tags={searchQueryOption !== 'user' ? data?.tags : []}
          users={searchQueryOption !== 'tag' ? data?.users : []}
        />
      )}
    </SearchContainer>
  );
}