import styled, { keyframes } from 'styled-components';

const starBeat = keyframes`
  0%, 20%, 40%, 60%, 80%, 100% {
    transform: scale(1);
  }
  10%, 30%, 50%, 70%, 90% {
    transform: scale(1.1); 
  }
`;

const SvgStar = styled.svg`
  width: 24px;
  height: 24px;
  cursor: pointer;
  transition: transform 0.2s, fill 0.2s, background-color 0.2s, stroke 0.2s;
  background: ${({ active }) => active === 'true' ? '#D2D2CF' : '#D2D2CF'}; 
  border-radius: 50%; 
  stroke: ${({ active }) => active === 'true' ? 'none' : 'currentColor'}; 
  fill: ${({ active }) => active === 'true' ? 'yellow' : 'none'}; 
  margin: 0 2px;
  padding: 2px;

  &:hover {
    stroke: yellow; 
  }

  &:active {
    animation: ${starBeat} 1s; 
  }
`;

// eslint-disable-next-line react/prop-types
const StarRating = ({ rating, onRate }) => {
    const handleStarClick = (index) => {
        if (rating === index + 1) {
            onRate(0);
        } else {
            onRate(index + 1);
        }
    };

    return (
        <div>
            {[...Array(5)].map((_, index) => (
                <SvgStar
                    key={index}
                    onClick={() => handleStarClick(index)}
                    active={(index < rating).toString()} 
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </SvgStar>
            ))}
        </div>
    );
};

export default StarRating;
