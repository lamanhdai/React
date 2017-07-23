import React from 'react';
import {withRouter} from 'react-router-dom';

import {Uid} from '../uid';
import {Header} from './header';

export const Home = () => (
  <Uid>
    {(uid) => (
      <HomePage uid={uid} />
    )}
  </Uid>
)

const HomePage = withRouter(({uid, push}) => (
  <main>
    <Header user={uid} />
  </main>
));