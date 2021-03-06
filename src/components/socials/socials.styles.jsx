import styled from "styled-components";

export const SocialIcons = styled.div`
  /* position: absolute; */
  position: -webkit-sticky;
  position: sticky;
  top: 35%;
  z-index: 10;
  width: 50px;

  @media only screen and (max-width: 768px) {
    visibility: hidden;
  }
`;

export const GithubBox = styled.div`
  width: 50px;
  height: 50px;
  background-color: #4078c0;
  border-radius: 0 10px 0 0;

  &:hover {
    background-color: #bd2c00;
    margin-left: 10px;

    .github {
      color: #fafafa;
    }
  }
`;

export const LinkedInBox = styled.div`
  width: 50px;
  height: 50px;
  background-color: #2867B2;

  &:hover {
    background-color: #fff;
    margin-left: 10px;

    .linkedin {
      color: #2867B2;
    }
  }
`;

export const TwitterBox = styled.div`
  width: 50px;
  height: 50px;
  background-color: #1DA1F2;

  &:hover {
    background-color: #fff;
    margin-left: 10px;

    .twitter {
      color: #1DA1F2;
    }
  }
`;

export const ResumeBox = styled.div`
  width: 50px;
  height: 50px;
  background-color: #DB4437;
  border-radius: 0 0 10px 0;

  &:hover {
    background-color: #fff;
    margin-left: 10px;

    .resume {
      color: #DB4437;
    }
  }
`;

export const SocialIconLink = styled.a`
  display: block;
  box-sizing: inherit;
  color: #fff;
  font-size: 30px;
  padding: 10px 10px;
  cursor: pointer;
`;