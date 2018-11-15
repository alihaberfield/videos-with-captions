import React, { Component } from 'react';
import './App.css';

const fileNames = [ '002958_ap01_DontBeAFallGuy',
  '005892_ap01_KipAndDavidEpisode3',
  '007667_ap01_NoiseDestroys',
  '007717_ap01_NotByChoice',
  '007831_ap01_MyFriendsOmAndPromFromCambodia',
  '012989_ap01_TheCubbies',
  '323321_ap01_TheFilmFilmLendingCommercial',
  'B1005722_ap01_ForMyGirls',
  'B1005806_ap01_CarmelStoryteller',
  'B1006195_ao01_AustraliaPerForzaEPerAmore',
  'B1006860_ao01_GrandmothersButterfly',
  'B1006947_ao01_ChangingWorlds',
  'B1006951_ao01_LifeIsBeautiful',
  'B2000844_ao01_ILiveAgain',
  'B2001055_ao01_NextGeneration',
  'B2001307_ao01_ILeftMyCountry',
  'B2001308_ao01_AboutMyDad',
  'B2001329_ao01_Sister',
  'B2001338_ao01_StreetsOfFitzroy',
  'B2001341_ao01_StrongAndProud',
  'B2003313_ap01_FlashBack',
  'B2003625_ap01_DressingAChicken' ];

const AWS_VIDEO_BUCKET = `${process.env.PUBLIC_URL}/videos/`;
const CAPTION_PATH = `${process.env.PUBLIC_URL}/vtt/`;


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {currentFile: fileNames[0]};

  }


  render() {
    return (
      <div className="App">
        <p>
          <select value={this.state.currentFile}
              onChange={(e) => this.setState({currentFile: e.target.value})}>
          {
            fileNames.map((fileName, index) => <option key={index} value={fileName}>{fileName}</option>)
          }
        </select>
        </p>
          <VideoPlayer fileName={this.state.currentFile} />
      </div>
    );
  }
}

const VideoPlayer = ({fileName}) => {
  let videoPath = `${AWS_VIDEO_BUCKET}${fileName}.mp4`;
  let captionPath = `${CAPTION_PATH}${fileName}.vtt`;
  return (
    <video className='videoPlayer' src={videoPath} controls>
        <track default kind="subtitles" label="English subtitles" src={captionPath} srcLang="en"></track>
    </video>
)};

export default App;
