import React from 'react';
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';
import ChannelRow from './ChannelRow';
import './SearchPage.css';
import VideoRow from './VideoRow';

const SearchPage = () => {
  return (
    <div>
      <div className="searchPage">
        <div className="searchPage__filter">
          <TuneOutlinedIcon />
        </div>
        <h2>FILTER</h2>
      </div>
      <hr />

      <ChannelRow
        image="https://yt3.ggpht.com/FjeN785fVWx0Pr6xCbwPhhq8hHj_gocc3FygDXYDEQgp2gE_FQzRNsFHFAjQ3oE-VJaeGR1a=s176-c-k-c0x00ffffff-no-rj"
        channel="Clever Programmer"
        verified
        subs="660K"
        noOfVideos={382}
        description="You can find awesome programming lessons here! 
        Also, expect programming tips and tricks that will take 
        your coding skills to the ..."
      />

      <hr />

      <VideoRow
        views="1.4M"
        subs="659K"
        description="Do you want a FREE one hour training... check this out"
        timestamp="59 seconds ago"
        channel="Clever Programmer"
        title="Let's Build You Tube Clone with REACT JS for Beginners"
        image="https://i.ytimg.com/vi/NT299zIk2JY/hqdefault.jpg?"
      />
      <VideoRow
        views="700K"
        subs="659K"
        description="Join the 3-part epic masterclass that shows you how to become
        a 6-figure developer...https://cleverprogrammer.com if you want to..."
        timestamp="4 days ago"
        channel="Clever Programmer"
        title="Python Tutorial for Beginners Full Course in 11"
        image="https://i.ytimg.com/vi/4F2m91eKmts/hqdefault.jpg?"
      />
      <VideoRow
        views="1.2M"
        subs="659K"
        description="In this LIVE training, Sonny and Qazi will show you how to build a Facebook messenger..."
        timestamp="1 months ago"
        channel="Clever Programmer"
        title="Full Stack React and Firebase Tutorial - Build
          a Facebook Messenger Clone"
        image="https://i.ytimg.com/vi/KB7JEnfc7Dc/hqdefault.jpg?"
      />
      <VideoRow
        views="2.2M"
        subs="659K"
        description="Here is the best free programming"
        timestamp="2 months ago"
        channel="Clever Programmer"
        title="Javascript Tutorial for Beginners Full Stack course in...
          a Facebook Messenger Clone"
        image="https://i.ytimg.com/vi/Qqx_wzMmFeA/hqdefault.jpg?"
      />
      <VideoRow
        views="166,008"
        subs="659K"
        description="In this LIVE training, Sonny and Qazi will show you how simple it it to create a
        full stack fully featured messenger application using React, Firebase & Material-UI..."
        timestamp="1 months ago"
        channel="Clever Programmer"
        title="Full Stack React and Firebase Tutorial - Build
          a Facebook Messenger Clone"
        image="https://i.ytimg.com/an_webp/KB7JEnfc7Dc/mqdefault_6s.webp?du=3000&sqp=CPa8-5YG&rs=AOn4CLC3xIsqJWkw3m6pxI0A33iCAGpY2w"
      />
    </div>
  );
};

export default SearchPage;
