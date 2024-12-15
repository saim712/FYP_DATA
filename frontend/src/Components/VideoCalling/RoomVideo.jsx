import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

function Room() {
  const { roomid } = useParams();

  const myMeeting = async (element) => {
    const appid = 1056617600;
    const serversecret = "155993b5fb7215672202b4c1cd9484ec";

    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appid,
      serversecret,
      roomid,
      Date.now().toString(), // this and line below are used for user authentication by matching with user name and id
      "Satti"
    );

    const zc = ZegoUIKitPrebuilt.create(kitToken);
    zc.joinRoom({
      container: element,
      sharedLinks: [
        {
          name: "Copy Link",
          url: `http://localhost:5173/joinroom/myroom/${roomid}`,
        },
      ],
      scenario: {
        mode: ZegoUIKitPrebuilt.OneONoneCall, // settings for one-on-one calls
      },
      showScreenSharingButton: true,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-600 to-blue-500 flex flex-col items-center justify-center px-4">
      <div className="text-center mb-8">
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-2">Room: {roomid}</h1>
        <p className="text-lg sm:text-xl text-white opacity-90">You're about to join the video call. Ensure your camera and microphone are enabled.</p>
      </div>

      <div ref={myMeeting} className="bg-white shadow-lg rounded-lg p-6 sm:p-10 max-w-4xl w-full mb-6"></div>

      <Link
        to="/"
        className="mt-4 px-6 py-3 bg-white text-blue-500 font-semibold rounded-lg shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
      >
        Back to Home
      </Link>
    </div>
  );
}

export default Room;
