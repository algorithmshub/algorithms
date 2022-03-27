import React from 'react';
import { UnstyledOpenInCodeSandboxButton } from '@codesandbox/sandpack-react';
import { Tooltip } from '@nextui-org/react';
import { Box } from '@primitives';

export const CSBIcon = (): React.ReactElement => (
  <svg
    fill="none"
    height="24"
    width="24"
    viewBox="0 0 18 18"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M3.24284 5.11427L8.63639 2.17808C8.92945 2.01854 9.28432 2.02264 9.57361 2.18889L14.7726 5.17673C15.011 5.3137 15.1579 5.56762 15.1579 5.84251V12.1884C15.1579 12.4639 15.0103 12.7183 14.7711 12.8551L9.38463 15.9346C9.1466 16.0707 8.85406 16.0696 8.61711 15.9316L3.22361 12.7912C2.9874 12.6537 2.8421 12.4009 2.8421 12.1276V5.7887C2.8421 5.50747 2.99584 5.24873 3.24284 5.11427Z" />
    <path
      clipRule="evenodd"
      d="M8.99649 9.06298V15.1165C9.10189 15.1165 9.17115 15.0936 9.26577 15.0396L14.113 12.2698C14.3044 12.1601 14.3824 11.9902 14.3824 11.7696V6.15302C14.3824 6.04235 14.3591 5.97615 14.3053 5.88373L9.15154 8.79576C9.05567 8.85054 8.99649 8.95253 8.99649 9.06298ZM11.6894 12.539C11.6894 12.6929 11.6317 12.7698 11.497 12.8468L9.88129 13.7701C9.76591 13.847 9.61201 13.8086 9.61201 13.6546V9.53835C9.61201 9.42824 9.7089 9.28555 9.80434 9.2306L13.4975 7.11477C13.6001 7.05573 13.6898 7.15029 13.6898 7.26865V9.46146C13.6898 9.5751 13.6362 9.67725 13.5359 9.73074L11.8817 10.6155C11.7814 10.669 11.6894 10.7711 11.6894 10.8848V12.539Z"
      fill="var(--nextui-colors-codeCopyIconColor)"
      fillRule="evenodd"
    />
    <path
      clipRule="evenodd"
      d="M3.61069 11.7696V6.15297C3.61069 5.93209 3.72667 5.72398 3.91845 5.61439L8.61177 2.95996C8.71289 2.90638 8.88105 2.88303 8.99648 2.88303C9.11191 2.88303 9.28993 2.91161 9.38119 2.95997L14.036 5.61439C14.1281 5.66881 14.2533 5.79415 14.3053 5.88368L9.15033 8.8074C9.05447 8.86219 8.99648 8.96624 8.99648 9.07668V15.1165C8.89108 15.1165 8.78334 15.0936 8.68872 15.0395L3.95692 12.3082C3.76514 12.1985 3.61069 11.9904 3.61069 11.7696ZM4.30315 7.26859V9.46139C4.30315 9.61524 4.34162 9.6922 4.4955 9.76915L6.11123 10.6924C6.26511 10.7694 6.30358 10.8848 6.30358 11.0002V12.539C6.30358 12.6928 6.34205 12.7698 6.49593 12.8467L8.11167 13.77C8.26553 13.847 8.38096 13.8085 8.38096 13.6546V9.53835C8.38096 9.42292 8.34249 9.30749 8.18863 9.23059L4.57243 7.15319C4.45703 7.07625 4.30315 7.11472 4.30315 7.26859ZM10.6122 4.65264L9.18881 5.46051C9.07343 5.53745 8.91953 5.53745 8.80415 5.46051L7.38074 4.65264C7.28705 4.59968 7.16683 4.59995 7.07298 4.65264L5.30337 5.65286C5.14949 5.7298 5.14949 5.88368 5.30337 5.96062L8.84257 7.99953C8.9373 8.05375 9.05566 8.05375 9.15033 7.99953L12.6896 5.96062C12.805 5.88368 12.8435 5.7298 12.6896 5.65286L10.92 4.65264C10.8261 4.59995 10.7059 4.59968 10.6122 4.65264Z"
      fill="var(--nextui-colors-codeCopyIconColor)"
      fillRule="evenodd"
    />
  </svg>
);

const CodeSandboxButton = () => {
  return (
    <Tooltip
      hideArrow
      content="Open in CodeSandbox"
      triggerCss={{
        cursor: 'pointer',
        ml: '$2',
        '&:hover': {
          opacity: 0.8
        }
      }}
    >
      <Box as="span" title="Open in CodeSandbox">
        <UnstyledOpenInCodeSandboxButton
          style={{
            // reset button styles
            background: 'none',
            border: 'none',
            padding: 0,
            margin: 0,
            outline: 'none',
            cursor: 'pointer'
          }}
        >
          <CSBIcon />
        </UnstyledOpenInCodeSandboxButton>
      </Box>
    </Tooltip>
  );
};

export default CodeSandboxButton;
