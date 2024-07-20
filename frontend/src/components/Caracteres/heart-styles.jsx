import styled, { keyframes } from 'styled-components'

const heartBeat = keyframes`
  0%, 20%, 40%, 60%, 80%, 100% {
    transform: scale(1);
  }
  10%, 30%, 50%, 70%, 90% {
    transform: scale(1.1); 
  }
`

const Svg = styled.svg`
  width: 25px;
  height: 25px;
  cursor: pointer;
  transition: transform 0.2s, fill 0.2s;
  fill: ${({ liked }) => liked ? 'red' : 'none'};
  stroke: ${({ liked }) => liked ? 'red' : 'currentColor'};
  position: absolute;
  right: 10%;
  top: 20%;
  z-index: 1;
  filter: drop-shadow(0px 4px 6px rgba(0, 0, 0, 0.1)); /* Adiciona uma sombra suave */

  &:hover {
    fill: red;
    stroke: red;
    filter: drop-shadow(0px 6px 8px rgba(0, 0, 0, 0.2)); /* Aumenta a sombra ao passar o mouse */
  }

  &:active {
    animation: ${heartBeat} 1s; 
  }
`

// eslint-disable-next-line react/prop-types
const HeartIcon = ({ liked, onClick }) => (
  <Svg
    onClick={onClick}
    liked={liked}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-heart"
  >
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
  </Svg>
)

export default HeartIcon
