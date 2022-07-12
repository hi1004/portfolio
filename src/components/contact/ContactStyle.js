import { Box, Button } from '@mui/material';
import styled from 'styled-components';
import TextField from '@mui/material/TextField';
import { Container } from '../../styles/CommonSyle';

export const ContactSection = styled.section`
  height: calc(100vh - 90px);
`;
export const ContactContainer = styled(Container)`
  width: 58%;
  display: grid;
  grid-template-columns: 35% 58%;
  gap: 12%;

  ${props => props.theme.device.desktop} {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  ${props => props.theme.device.tablet} {
    width: ${props => props.theme.containerWidthSize.sm};
  }
`;
export const ContactOptions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  h5 {
    font-size: 0.9rem;
    color: ${props => props.theme.colors.text};
  }
`;
export const Option = styled.article`
  background-color: ${props => props.theme.colors.bgVariant};
  padding: 1.2rem;
  border-radius: 1.2rem;
  text-align: center;
  border: 1px solid transparent;
  transition: var(--transition);

  &:hover {
    background: transparent;
    border-color: ${props => props.theme.colors.primaryVariant};
  }
`;
export const IconBox = styled.div`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

export const SendButton = styled.a`
  margin-top: 0.7rem;
  display: inline-block;
  font-size: 0.8rem;
`;

/* FORM */
export const Form = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

export const UserInput = styled(TextField)`
  .MuiInputBase-formControl {
    padding: 0;
    border: 1px solid ${props => props.theme.colors.primaryVariant};
    border-radius: 0.5rem;
  }
  input {
    padding: 1.5rem;
    resize: none;
    color: ${props => props.theme.colors.text};
  }
`;

export const MessageInput = styled(TextField)`
  .MuiInputBase-formControl {
    padding: 0;
    border: 1px solid ${props => props.theme.colors.primaryVariant};
    border-radius: 0.5rem;
  }
  textarea {
    padding: 1.5rem;
    resize: none;
    color: ${props => props.theme.colors.text};
  }
`;

export const SubmitButton = styled(Button)`
  width: max-content;
  ${props => props.theme.device.tablet} {
    margin: 0 auto;
  }
`;
