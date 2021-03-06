import styled from "styled-components";

export const AboutContainer = styled.div`
  color: #fff;
  background: #001;
  height: 35rem;

  @media screen and (max-width: 768px) {
    padding: 100px 0;
    height: 55rem;
  }

  @media screen and (min-width: 300px) {
    @media screen and (max-width: 424px) {
      height: 60rem;
    }
  }
`;

export const AboutContent = styled.div`
  display: grid;
  z-index: 1;
  height: 45vh;
  width: 100%;
  max-width: 80vw;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`;

export const AboutInfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(1fr, 1fr);
  align-items: center;
  grid-template-areas: 'col1 col2';

  @media screen and (max-width: 768px) {
    grid-auto-columns: auto;
    grid-template-areas: none;
    grid-auto-flow: row;
  }
`;

export const AboutHeader = styled.h3`
  color: #fff;
  font-size: 64px;
  line-height: 20px;
  font-weight: 600;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 35px;

  @media screen and (max-width: 768px) {
    font-size: 48px;
    text-align: center;
  }

  @media screen and (min-width: 300px) {
    font-size: 36px;
  }
`;

export const Column1 = styled.div`
  grid-area: col1;

  @media screen and (max-width: 768px) {
    grid-area: unset;
  }
`;

export const Column2 = styled.div`
  padding: 80px 5px;
  grid-area: col2;

  @media screen and (max-width: 768px) {
    grid-area: unset;
  }
`;

export const SomeTech = styled.p`
  color: #fff;
  font-size: 24px;
  line-height: 5px;
  font-weight: 600;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 35px;
  text-align: center;
  padding-left: 90px;

  @media screen and (max-width: 768px) {
    padding-left: 0;
  }
`;

export const AboutP = styled.p`
  color: #fff;
  font-size: 12px;
  line-height: 20px;
  font-weight: 500;
  letter-spacing: 1.6px;
  padding: 20px 0;
  margin-bottom: 16px;
`;

export const AboutBtnWrapper = styled.div`
  display: flex;
  justify-content: flex-start;

  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`;

export const ImgColumn = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const TechIcon = styled.div`
  width: 25%;
  margin-left: 100px;
  height: 100%;
  padding: 10px;
  padding-top: 50px;
  text-align: center;

  .html5,
  .css3,
  .sass,
  .react,
  .bootstrap,
  .aws,
  .js,
  .node,
  .github,
  .docker {
    height: 25px;
    width: 30px;
  }

  .html5:hover {
    color: #e34c26;
  }

  .css3:hover {
    color: #264de4;
  }

  .sass:hover {
    color: #cc6699; 
  }

  .react:hover {
    color: #61DBFB;
  }

  .aws:hover {
    color: #ff9900;
  }

  .js:hover {
    color: #f0db4f;
  }

  .bootstrap:hover {
    color: #563d7c;
  }

  .node:hover {
    color: #3c873a;
  }

  .github:hover {
    color: #4078c0;
  }

  .docker:hover {
    color: #0db7ed;
  }

  @media only screen and (max-width: 900px) {
    margin-left: 0;
    margin: auto;
  }
`;