import React, { useState, useEffect, useCallback } from 'react';
import { ProgramMoviesTemplate } from '@templates';

export function OpeningMoviesPage() {
  return <ProgramMoviesTemplate title="개막작" id={10} />;
}
