import styled from "styled-components/macro";
import { ReactComponent as LinkedinIcon } from "../data/img/linkedin.svg";

import { ReactComponent as GithubIcon } from "../data/img/github-svgrepo-com.svg";
import { ReactComponent as DomnloadBtnIcon } from "../data/img/cv-square.svg";

import { Link } from "../MainComponents/Link";

const StyledSection = styled.section`
  background-color: #f6f0edff; // props
  display: flex;
  flex-direction: column;
  height: 100vh;
  position: relative;
  width: 100%;
`;
const StyledContainer = styled.div`
  margin: 0 auto;
  max-width: 107rem;
  padding: 0 4rem;
`;
const StyledContent = styled.div`
  align-items: center;
  display: flex;
  gap: 5rem;
  height: 65rem;
  justify-content: center;
  position: relative;

  @media only screen and (max-width: 1130px) {
    flex-direction: column-reverse;
  }
`;

const StyledMainInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 30rem;
  position: relative;
`;

const StyledHeader = styled.h1`
  font-size: 56px;
  font-weight: 700;
  line-height: 67px;
  margin: 0;

  @media only screen and (max-width: 1130px) {
    text-align: center;
  }
`;
const StyledParagraph = styled.p`
  font-size: 28px;
  font-weight: 300;
  line-height: 1.6;

  @media only screen and (max-width: 1130px) {
    text-align: center;
  }
`;
const StyledLinksBox = styled.span`
  margin: -8px;
`;
const StyledImageContainer = styled.div`
  width: 25rem;
  height: 25rem;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  border: 2px solid #0e100cff;
  box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.3);

  @media only screen and (max-width: 1130px) {
    text-align: center;
    width: 20rem;
    height: 20rem;
  }
`;
const StyledSkillsContainer = styled.div`
  align-items: center;
  bottom: 0;
  color: #767676;
  display: flex;
  margin-bottom: 80px;
  font-size: 1.7rem;
  position: absolute;
`;
const StyledSkill = styled.div`
  border: 1px solid #212518;
  padding: 8px 16px;
  margin: 4px;
  display: inline-block;
  border-radius: 5px;
  background-color: white;
  color: #212518;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3); // пропс
  font-weight: 200;
  line-height: 1;
  font-size: 1.5rem;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.4);
  }
`;

export const HomeView = () => {
  const skills = [
    "React",
    "Typescript",
    "Styled Components",
    "Mobx",
    "Git",
    "Jira",
    "MS Azure",
  ];

  return (
    <StyledSection>
      <StyledContainer>
        <StyledContent>
          <StyledMainInfoContainer>
            <StyledHeader>Front-End React Developer 👩‍💻</StyledHeader>
            <StyledParagraph>
              Hi, I'm Aleksandra.
              <br />A passionate Front-end React Developer based in Joensuu,
              Finland. 📍
            </StyledParagraph>
            <StyledLinksBox>
              <Link
                aria-label="linkedin"
                title="Go to the Linkedin"
                url={"https://www.linkedin.com/in/aleksandra-ermakova/"}
              >
                <LinkedinIcon />
              </Link>
              <Link title="Download CV" aria-label="downloadCv" url={""}>
                <DomnloadBtnIcon />
              </Link>

              <Link
                title="Go to the Github"
                aria-label="github"
                url={"https://github.com/aermk"}
              >
                <GithubIcon />
              </Link>
            </StyledLinksBox>
          </StyledMainInfoContainer>
          <StyledImageContainer>
            <img src="./heroPhoto.jpeg" alt="heroImg" />
          </StyledImageContainer>
          <StyledSkillsContainer>
            {skills.map((skill, index) => (
              <StyledSkill key={index}>{skill}</StyledSkill>
            ))}
          </StyledSkillsContainer>
        </StyledContent>
      </StyledContainer>
    </StyledSection>
  );
};

export default HomeView;
