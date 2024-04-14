import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import { theme } from 'Styles';

const StyledLink = styled(Link)`
  color: ${theme.palette.secondary.dark};
  text-decoration: none;
  margin: 0.1rem;
  position: relative;
`;

export default StyledLink;
