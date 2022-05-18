import React from "react";
import familyImage from "/Users/conleyfam/Desktop/lambdaAssignments/unit4/build-week-scaffolding-node/client/src/Components/assets/DSC_9537 (2).jpg";
import mountainBiking from "/Users/conleyfam/Desktop/lambdaAssignments/unit4/build-week-scaffolding-node/client/src/Components/assets/IMG_1775.JPG";
import skingimg from "/Users/conleyfam/Desktop/lambdaAssignments/unit4/build-week-scaffolding-node/client/src/Components/assets/IMG_0194.JPG";
import styled from "styled-components";

const StyledAboutContainer = styled.div`
  margin-bottom: 4rem;
`;

const StyledUpperDiv = styled.div`
  border: 1px solid black;
  background: #d3d3d3;
  margin-top: 0;
`;

const StyledTitle = styled.h1`
  display: flex;
  justify-content: center;
`;

const StyledFamilyImage = styled.img`
  width: 60%;
  margin-left: 20%;
`;

const StyledCareerP = styled.p`
  margin: 3rem 5rem;
`;

const StyledMountainBiking = styled.img`
  width: 40%;
`;

const StyledSkiingImg = styled.img`
  width: 60%;
`;

const StyledImageContainer = styled.div`
  display: flex;
  background: white;
`;

const StyledBottomDiv = styled.div`
  background: #d3d3d3;
  border: 1px solid black;
`;

const StyledAboutTitle = styled.h2`
  margin-left: 4rem;
  text-decoration: underline;
`;

const StyledBottomP = styled.p`
  margin: 0.2rem 3rem 2rem 3rem;
`;

const About = () => {
  return (
    <StyledAboutContainer>
      <StyledUpperDiv>
        <StyledTitle>Healthy Plants is just the beginning!</StyledTitle>
        <StyledFamilyImage
          src={familyImage}
          alt="Dave Conley's family"
        ></StyledFamilyImage>
        <StyledCareerP>
          My name is Dave Conley and I am a recent grad from BloomTech's
          (formerly Lambda School) coding program. My story is kind of unique. I
          graduated from Brigham Young University in molecular biology and
          decided I wanted to go into sales due to my excellent communication
          skills. After 6+ years in tech sales, I decided to challenge myself
          and get into the technical side of things. I knew due to my collegiate
          experience that I could learn something difficult and it would benefit
          me in the long run.
          <br></br>
          <br></br>
          Fast forward to today, I feel like I have a very solid foundation in
          front-end and back-end development. I have a lot to learn, but the
          last 8 months have demonstrated to me, and hopefully you, that I can
          learn quickly on the job.
        </StyledCareerP>
      </StyledUpperDiv>
      <StyledImageContainer>
        <StyledMountainBiking
          src={mountainBiking}
          alt="Dave Conley mountain biking with his Dog, Walter"
        />
        <StyledSkiingImg
          src={skingimg}
          alt="Skiing with my brother at Targhee Resort, Idaho"
        />
      </StyledImageContainer>
      <StyledBottomDiv>
        <StyledAboutTitle>Outside of work</StyledAboutTitle>
        <StyledBottomP>
          My wife, Amy, and our daughter, Romee, make up my world. Also, can't
          forget my dog, Walter. Who loves to be the center of attention, and is
          very much part of the family. We live in Cottonwood Heights, UT. We
          enjoy outdoor recreation like skiing, mountain biking, hiking, and
          some competitive pickle ball with friends.
          <br></br>
          <br></br>
          One unique story to ask me about is when I was on the front page of
          the Boston Globe. As well as, when I was able to go to both the
          Atlantic and Pacific Ocean in the same day. This is a little glimpse
          into my life and I would love to connect to see if I am good fit at
          your company!
        </StyledBottomP>
      </StyledBottomDiv>
    </StyledAboutContainer>
  );
};

export default About;
