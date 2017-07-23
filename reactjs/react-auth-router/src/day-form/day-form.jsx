import React from 'react'

import {Uid} from '../uid';
import {Header} from './header';

export const DayForm = () => (
  <Uid>
    {(uid) => (
      <div>
        <Header />
      </div>
    )}
  </Uid>
)