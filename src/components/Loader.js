import styled, { keyframes } from 'styled-components';

const Loader = ({ size, loaderWidth, className, margin }) => (
  <Spinner
    className={className}
    size={size}
    loaderWidth={loaderWidth}
    margin={margin}
  />
);

const spinAnimation = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const Spinner = styled.div`
  width: ${({ size }) => (size ? `${size}px` : '100%')};
  height: ${({ size }) => (size ? `${size}px` : '100&%')};
  border: ${({ theme, loaderWidth }) =>
    `${loaderWidth ? `${loaderWidth}px` : '16px'} solid ${theme.colors.grey}`};
  border-top: ${({ theme, loaderWidth }) =>
    `${loaderWidth ? `${loaderWidth}px` : '16px'} solid ${theme.colors.grey2}`};
  border-radius: 50%;
  animation: ${spinAnimation} 2s linear infinite;
  margin: ${({ margin }) => margin || 0};
`;


export default Loader;
