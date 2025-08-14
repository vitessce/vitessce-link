import React from 'react';
import clsx from 'clsx';

import styles from './ExampleList.module.css';

interface configAttrsType {
	string: string [];
}

interface configsProp {

}

const configAttrs = {
  'clarence-1': ['imaging', 'spatial'],
  'clarence-2': ['imaging', 'spatial', ''],
  'mclaughin-2025': ['imaging', 'spatial'],
};

const examples = [
  { key : "clarence-1",
    name : "Clarence et al., 2025 - 1",
    description: "Large scale 3D CyCIF of thick tissue sections preserves intact cells, enabling accurate analysis of cell states, interactions, and spatially restricted signaling that thin sections miss.",
    link: "https://vitessce.io/#?dataset=sorger-2024-4"
  }, 
  { key : "clarence-2",
    name: "Clarence et al., 2025 - 2",
    description: "Detailed view of a blood vessel and cells in 3D CyCIF reveals intact cellular structures, interactions, and spatial organization within preserved tissue.",
    link: "https://vitessce.io/#?dataset=sorger-2024-2"
  },
  { key : "mclaughin-2025",
    name: "McLaughlin et al. 2025",
    description: "3D mapping of human nephrons reveals glomerular communities connected by extensive nerve networks, coordinating kidney function and changing with development and disease.",
    link: "https://vitessce.io/#?dataset=jain-2024"
}]

function cleanAttr(attrVal:string) {
  if (attrVal.match(/^\d/)) {
    // eslint-disable-next-line no-param-reassign
    attrVal = `_${attrVal}`;
  }
  return attrVal.toLowerCase().replace('-', '');
}

export const ExampleList: React.FC<configsProp> = () => {
  const  small = false;
  // const demos = examples.map(key => ([key, examples[key]]));
  console.log(examples)
  return (
    <>
      <p className={clsx(styles.demoDescription, { [styles.demoDescriptionSmall]: small })}>
        The demos compiled here showcase the core features of VitessceLink.
      </p>
      <div className={clsx(styles.demoGridContainer, { [styles.demoGridContainerSmall]: small })}>
        {examples.map(( example) => (
          <div key={example.key} className={styles.demoGridItem}>
            <a href={example.link} className={styles.demoGridItemLink}>{example.name}</a>
            <p className={styles.demoGridItemDescription}>{example.description}</p>
            {configAttrs[example.key] ? configAttrs[example.key].map(attrVal => (
              <span key={`${example.key}-${attrVal}`} className={clsx(styles.demoGridItemPill, styles[cleanAttr(attrVal)])}>
                {attrVal}
              </span>
            )) : null}
          </div>
        ))}
      </div>
    </>
  );
}
