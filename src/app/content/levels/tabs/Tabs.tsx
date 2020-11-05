import React, { FunctionComponent, ReactElement, useState } from 'react';
import styles from './tabs.module.scss';

interface TabsProps {
  children?: ReactElement<{ label: string }>[];
}

const Tabs: FunctionComponent<TabsProps> = ({ children }) => {
  const [activeTab, setActiveTab] = useState(children[0].props.label);
  const tabTitles = children.map((child) => asTabTitle(child.props.label, activeTab, setActiveTab));

  return (
    <>
      <div className={styles.tabs}>{tabTitles}</div>
      {children.find((child) => child.props.label === activeTab)}
    </>
  );
};

const asTabTitle = (label: string, activeTabLabel: string, setActiveTab: (label: string) => void): JSX.Element => {
  const tabTitleClasses = getTabTitleClasses(label, activeTabLabel);

  return (
    <div key={label} className={tabTitleClasses} onClick={() => setActiveTab(label)}>
      {label}
    </div>
  );
};

const getTabTitleClasses = (label: string, activeTabLabel: string): string => {
  const isActive = label === activeTabLabel;
  return `${styles.tab} ${isActive ? styles.active : ''}`;
};

export default Tabs;
