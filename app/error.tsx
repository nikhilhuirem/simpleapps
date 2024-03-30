'use client';
import React from 'react';

interface Props {
    error: Error;
    reset: () => void;
}

export default function ErrorPage({ error, reset }: Props) {
  return (
    <div>
        An unexpected error has occured. Please try again later.
        <button className='btn' onClick={() => reset()}>Retry</button>
    </div>
  )
}
