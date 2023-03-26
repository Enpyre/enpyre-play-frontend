import React, { useState } from 'react';

import {
  TabContent,
  TabContentItem,
  TabHeaderButton,
  TabHeaderContainer,
  TabHeaderContent,
  TabHeaderItem,
} from './styles';

type TabProps = {
  id: string;
  headers: {
    label: string;
    id: string;
  }[];
  contents: {
    id: string;
    content: React.ReactNode;
  }[];
};

export const Tab: React.FC<TabProps> = ({ id, headers, contents }) => {
  const [activeTab, setActiveTab] = useState(headers[0]);

  return (
    <TabHeaderContainer>
      <TabHeaderContent data-tabs-toggle={`#${id}`} role="tablist">
        {headers.map((header) => (
          <TabHeaderItem
            role="presentation"
            key={header.id}
            last={header.id === headers[headers.length - 1].id}>
            <TabHeaderButton
              id={header.id}
              data-tabs-target={`#${header.id}`}
              type="button"
              role="tab"
              aria-controls={header.id}
              aria-selected={activeTab.id === header.id}
              onClick={() => setActiveTab(header)}
              active={activeTab.id === header.id}
              tabIndex={activeTab.id === header.id ? 0 : -1}>
              {header.label}
            </TabHeaderButton>
          </TabHeaderItem>
        ))}
      </TabHeaderContent>
      <TabContent id={id}>
        {contents.map((content) => (
          <TabContentItem
            id={content.id}
            role="tabpanel"
            aria-labelledby={content.id}
            aria-hidden={activeTab.id !== content.id}
            active={activeTab.id === content.id}
            key={content.id}>
            {content.content}
          </TabContentItem>
        ))}
      </TabContent>
    </TabHeaderContainer>
  );
};
