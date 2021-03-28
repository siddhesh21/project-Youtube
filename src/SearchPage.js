import React from "react";
import "./SearchPage.css";
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneOutlinedIcon />
        <h2>FILTER</h2>
      </div>
      <hr />

      <ChannelRow
        image="https://scontent-dub4-1.xx.fbcdn.net/v/t1.0-9/135461166_858933254946649_8912077254214778819_o.jpg?_nc_cat=103&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=G7yPIxvWdB8AX-P9T0l&_nc_ht=scontent-dub4-1.xx&oh=78fd9d745a242bbb4c72b5cd4aeaf498&oe=60880F20"
        channel="My Playlist"
        verified
        subs="1M"
        noOfVideos={100}
        description="Welcome & ThankYou."
      />
      <hr />

      <VideoRow
        views="10M"
        subs="1M"
        description="Work Ethic, Gratitude & Aspire"
        timestamp="59 seconds ago"
        channel="SIDDHESH"
        title="Empathy, Passion, Belief, Be Thoughtful"
        image="https://i.ytimg.com/vi/VSceuiPBpxY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAxFaqC23GzCbOOwmuinFfpy8yTmw"
      />

      <VideoRow
        views="10M"
        subs="1M"
        description="Work Ethic, Gratitude & Aspire"
        timestamp="59 seconds ago"
        channel="SIDDHESH"
        title="Empathy, Passion, Belief, Be Thoughtful"
        image="https://i.ytimg.com/vi/VSceuiPBpxY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAxFaqC23GzCbOOwmuinFfpy8yTmw"
      />

      <VideoRow
        views="10M"
        subs="1M"
        description="Work Ethic, Gratitude & Aspire"
        timestamp="59 seconds ago"
        channel="SIDDHESH"
        title="Empathy, Passion, Belief, Be Thoughtful"
        image="https://i.ytimg.com/vi/VSceuiPBpxY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAxFaqC23GzCbOOwmuinFfpy8yTmw"
      />

      <VideoRow
        views="10M"
        subs="1M"
        description="Work Ethic, Gratitude & Aspire"
        timestamp="59 seconds ago"
        channel="SIDDHESH"
        title="Empathy, Passion, Belief, Be Thoughtful"
        image="https://i.ytimg.com/vi/VSceuiPBpxY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAxFaqC23GzCbOOwmuinFfpy8yTmw"
      />

      <VideoRow
        views="10M"
        subs="1M"
        description="Work Ethic, Gratitude & Aspire"
        timestamp="59 seconds ago"
        channel="SIDDHESH"
        title="Empathy, Passion, Belief, Be Thoughtful"
        image="https://i.ytimg.com/vi/VSceuiPBpxY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAxFaqC23GzCbOOwmuinFfpy8yTmw"
      />
    </div>
  );
}

export default SearchPage;
