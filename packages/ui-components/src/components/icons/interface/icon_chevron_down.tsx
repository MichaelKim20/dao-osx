import React from 'react';
import {IconType} from '..';

export const IconChevronDown: IconType = ({
  height = 16,
  width = 16,
  ...props
}) => {
  return (
    <svg
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 16 16"
      {...props}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M3.29243 5.30468C3.47973 5.11758 3.73374 5.01248 3.99858 5.01248C4.26342 5.01248 4.51743 5.11758 4.70473 5.30468L7.99376 8.59106L11.2828 5.30468C11.3749 5.20936 11.4851 5.13333 11.607 5.08102C11.7288 5.02872 11.8599 5.00119 11.9925 5.00004C12.1251 4.99889 12.2567 5.02414 12.3794 5.07432C12.5022 5.1245 12.6137 5.1986 12.7075 5.2923C12.8012 5.38601 12.8754 5.49744 12.9256 5.62009C12.9758 5.74274 13.0011 5.87415 13 6.00666C12.9988 6.13918 12.9713 6.27013 12.9189 6.39189C12.8666 6.51365 12.7905 6.62377 12.6951 6.71583L8.6999 10.7078C8.5126 10.8949 8.2586 11 7.99376 11C7.72891 11 7.47491 10.8949 7.28761 10.7078L3.29243 6.71583C3.10519 6.52868 3 6.27489 3 6.01026C3 5.74562 3.10519 5.49183 3.29243 5.30468Z"
        fill="currentColor"
      />
    </svg>
  );
};
