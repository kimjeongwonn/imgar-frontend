import Loading from '@/components/Loading/Loading';
import useResize from '@/hooks/useResize';
import useThrottle from '@/hooks/useThrottle';
import { useTypedDispatch } from '@/redux';
import { displayResize, displayScroll } from '@/redux/slices/displayReducer';
import React, { lazy, ReactElement, Suspense, useEffect } from 'react';
import { Route, Switch, Redirect, useLocation } from 'react-router-dom';

export default function App(): ReactElement {
  const { pathname } = useLocation();

  const Home = lazy(() => import('@/pages/Home/Home'));
  const Gallery = lazy(() => import('@/pages/Gallery/Gallery'));
  const Profile = lazy(() => import('@/pages/Profile/Profile'));
  const SearchResult = lazy(() => import('@/pages/SearchResult/SearchResult'));
  const TagDetail = lazy(() => import('@/pages/TagDetail/TagDetail'));

  useResize();

  return (
    <Suspense fallback={<Loading modal />}>
      <Switch>
        <Redirect exact from="/:url*(/+)/" to={pathname.slice(0, -1)} />
        <Route path="/" exact component={Home} />
        <Route path="/gallery/:id" exact component={Gallery} />
        <Route path="/user/:username" component={Profile} />
        <Route path="/t/:tagname" exact component={TagDetail} />
        <Route path="/search" component={SearchResult} />
        <Route path="/" component={Home} />
      </Switch>
      {/* <Footer /> */}
    </Suspense>
  );
}
