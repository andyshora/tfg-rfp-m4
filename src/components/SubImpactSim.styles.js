import styled from "@emotion/styled";

export const Header = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  border-bottom: 1px solid white;
  padding: 0.5rem 2rem 0.5rem 1rem;
  background: white;
  clip-path: polygon(0 0, 100% 0, 84% 100%, 0% 100%);
  z-index: 1;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 42px;
    left: 0;
    width: 100%;
    height: 100%;
    background: #0e1151;
    z-index: -1;
  }
`;

export const StatsWrap = styled.section`
  padding: 0.5rem;
  position: relative;
`;

export const RadarWrap = styled.div`
  width: 400px;
  height: 400px;
  posion: relative;
  z-index: 0;
`;

export const LogoWrap = styled.div`
  height: 26px;
  background: white;
`;

export const HintWrap = styled.div`
  display: none;
  position: absolute;
  left: 0;
  flex-direction: column;

  @media (min-width: 1024px) {
    display: flex;
  }

  > div {
    font-size: 1rem;
    padding: 0.5rem 1.5rem 0.5rem 0.5rem;
    text-align: left;
    clip-path: polygon(0% 0%, 90% 0, 100% 50%, 90% 100%, 0% 100%);

    background: #0e1151;
  }

  > em {
    font-size: 0.7rem;
    font-style: italic;
    margin-left: 1rem;
    text-align: left;
    position: absolute;
    top: 2.5rem;
    width: 200px;
  }
`;

export const AchievementsWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin: 0;
`;

export const FormCellWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0;
`;

export const PitchOverflowWrap = styled.div`
  position: relative;
  overflow: hidden;
  width: 800px;
  margin: 0 auto;
`;

export const HomePitchOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  background: rgba(0, 0, 0, 0);
  transition: background 1s ease;
`;

export const AwayPitchOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 800px;
  width: 50%;
  height: 100%;
`;

export const Pitch = styled.div`
  position: relative;
  height: 600px;
  width: 1600px;
  margin: 0 auto 0;
  background: rgba(0, 0, 0, 0.1);
  transition: all 1s ease;

  &::before {
    content: "";
    border: 1px solid #343664;
    width: 1540px;
    height: 540px;
    position: absolute;
    left: 30px;
    top: 30px;
  }
`;

export const PitchBottomTextWrap = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SubTextWrap = styled.div`
  display: inline-flex;
  font-size: 0.8rem;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: #fff;
  padding: 0 10px;
`;

export const LiveScoreWrap = styled.div`
  padding: 1rem 0;
`;
export const MatchPredictionWrap = styled.div`
  position: relative;
  width: 600px;
  margin: 1.5rem auto 2rem;
`;

export const MatchPredictionBarWrap = styled.div`
  height: 8px;
  width: 100px;
  position: relative;
  background: rgba(0 0 0 / 25%);
  position: relative;

  > div {
    position: absolute;
    height: 100%;
    left: 0;
    top: 0;
    width: 0;
  }

  &::before {
    content: "";
    position: absolute;
    height: 100%;
    right: 0;
    bottom: -30px;
    margin-right: 40px;
    width: 0;
    font-size: 0.8rem;
    opacity: ${(p) => (p.deltaShowing ? 1 : 0)};
    transition: opacity 0.3s ease;
    content: "${(p) => {
      if (p.delta > 0) {
        return `(+${p.delta}%)`;
      } else {
        return `(${p.delta}%)`;
      }
    }}";
    font-family: monospace;
    color: ${(p) => p.deltaColor};
  }
`;

export const InsightsChipsWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  margin: 0;
`;

export const ScoreWrap = styled.div`
position: relative;
  background: linear-gradient(
    -192deg,
    #cd2529 0%,
    #be2022 48.5%,
    #b70709 49%,
    #a00000 100%
  );
  border-radius: 5px;
  padding: 8px;
  min-width: 58px;

  &::before {
    content: ${(p) => `"${p.mins}mins"`};
    font-size: 0.8rem;
    color: #fff;
    position: absolute;
    width 80px;
    margin-left: -24px;
    text-align: center;
    left: 50%;
    top: -21px;
    background: black;
    color: white;
    padding: 2px 4px 0 4px;
    border-radius: 2px 2px 0 0;
  }
`;
export const PlayerOnPitch = styled.div`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  display: ${(p) => (p.isHidden ? "none" : "flex")};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 0.8rem;
  color: #fff;
  width: 80px;
  padding: 4px;
  border-radius: 5px;
  transition: background 0.3s ease;
  background: ${(p) =>
    p.isActive || p.isSub ? "rgba(255,255,255,0.15)" : "none"};
  border: ${(p) =>
    p.isSub
      ? "dashed 1px rgb(255 255 255 / 40%)"
      : "dashed 1px rgba(255,255,255,0)"};

  > .MuiAvatar-root,
  > .MuiTypography-root {
    opacity: ${(p) => (p.isActive ? 0.4 : 1)};
  }
`;

export const HomeTeamWrap = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  white-space: nowrap;
  padding: 5px 10px;
  border-radius: 5px;
  transition: background 0.3s ease;
  position: relative;
`;

export const AwayTeamWrap = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  white-space: nowrap;
  padding: 5px 10px;
  border-radius: 5px;
  transition: background 0.3s ease;
  position: relative;
`;

export const GoalScorersWrap = styled.div`
  position: absolute;
  width: 200px;
  display: block;
  margin: 0;
  clear: both;
  widtj: 100%;
  top: 40px;
`;
