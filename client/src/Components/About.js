import React from "react";
import familyImage from "/Users/conleyfam/Desktop/lambdaAssignments/unit4/build-week-scaffolding-node/client/src/Components/assets/DSC_9537 (2).jpg";
import mountainBiking from "/Users/conleyfam/Desktop/lambdaAssignments/unit4/build-week-scaffolding-node/client/src/Components/assets/IMG_1775.JPG";
import skingimg from "/Users/conleyfam/Desktop/lambdaAssignments/unit4/build-week-scaffolding-node/client/src/Components/assets/IMG_0194.JPG";
import styled from "styled-components";

const StyledFamilyImage = styled.img`
  width: 60%;
  margin-left: 12rem;
`;

const StyledMountainBiking = styled.img`
  width: 25%;
`;

const StyledSkiingImg = styled.img`
  width: 40%;
`;

const About = () => {
  return (
    <div>
      <h1>Healthy Plants is just the beginning!</h1>
      <StyledFamilyImage
        src={familyImage}
        alt="Dave Conley's family"
      ></StyledFamilyImage>
      <p>
        My name is Dave Conley and I am a recent grad from BloomTech's (formerly
        Lambda School) coding program. My story is kind of unique. I graduated
        from Brigham Young University in molecular biology and decided I wanted
        to go into sales due to my excellent communication skills. After 6+
        years in tech sales, I decided to challenge myself and get into the
        technical side of things. I knew due to my collegiate experience that I
        could learn something difficult and it would benefit me in the long run.
        <br></br>
        <br></br>
        Fast forward to today, I feel like I have a very solid foundation in
        front-end and back-end development. I have a lot to learn, but the last
        8 months have demonstrated to me, and hopefully you, that I can learn
        quickly on the job.
      </p>
      <div>
        <StyledMountainBiking
          src={mountainBiking}
          alt="Dave Conley mountain biking with his Dog, Walter"
        />
        <StyledSkiingImg
          src={skingimg}
          alt="Skiing with my brother at Targhee Resort, Idaho"
        />
      </div>
    </div>
  );
};

export default About;
