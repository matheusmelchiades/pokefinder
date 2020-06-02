import styled, { keyframes } from 'styled-components';

import { fadeIn, fadeOut } from '../../../styles/animations';

export const Container = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1;

  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
  overflow-x: hidden;
  overflow-y: hidden;

  display: flex;
  flex-direction: column-reverse;
  padding: 0px 3px;

  visibility: ${({ open }) => (open ? 'visible' : 'hidden')};
  animation: ${({ open }) => (open ? fadeIn : fadeOut)} 1s linear;
  transition: visibility 1s linear;
`;

export const Content = styled.div`
  position: relative;

  height: 75%;
  max-height: 75%;
  width: 100%;
  padding: 20px;
  border: 1px solid #888;
  border-radius: 5px;
  background-color: #fefefe;

  visibility: ${({ open }) => (open ? 'visible' : 'hidden')};
  animation: ${({ open }) => (open ? ContentFadeIn : ContentFadeOut)} 1s linear;
  transition: visibility 1s linear;
`;

/**
 * ANIMATIONS
 */

// CONTENT
const ContentFadeIn = keyframes`
    from {
        opacity: 0;
        height: 0%;
    }

    to {
        opacity: 1;
        height: 75%;
    }
`;

const ContentFadeOut = keyframes`
    from {
        opacity: 1;
        height: 75%;
    }

    to {
        opacity: 0;
        height: 0%;
    }
`;
