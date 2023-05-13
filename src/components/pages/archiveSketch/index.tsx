import React from 'react';
import { ArchiveTemplate } from '@templates';
import { SketcSection } from '@organisms';

export function ArchiveSketchPage() {
  return (
    <ArchiveTemplate title="현장스케치" type="sketch">
      <SketcSection />
    </ArchiveTemplate>
  );
}
