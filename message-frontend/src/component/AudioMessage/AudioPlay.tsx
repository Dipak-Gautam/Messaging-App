import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import { IoMdCloseCircle } from "react-icons/io";
import { useSelector } from "react-redux";
import { IStore } from "../../Schema/Store/store.schema";

const AudioPlay = ({ ...props }) => {
  const { fileId } = props;
  const [audioURL, setAudioURL] = useState<string | null>(null);
  const token = useSelector((store: IStore) => store.token);

  useEffect(() => {
    if (!fileId || !token) return;

    const fetchAudio = async () => {
      try {
        const response = await fetch(`http://localhost:3000/file/${fileId}`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`, // Attach token here
          },
        });

        if (!response.ok) throw new Error("Failed to fetch audio");

        const blob = await response.blob();
        const url = URL.createObjectURL(blob);
        setAudioURL(url);
      } catch (error) {
        console.error("Error fetching audio:", error);
      }
    };

    fetchAudio();
  }, [fileId, token]);

  return (
    <Modal {...props} size="sm" centered>
      <div className="bg-dark rounded-xl flex flex-col p-4 gap-4">
        <div
          onClick={props.onHide}
          className="absolute -top-9 right-0 bg-white rounded-full cursor-pointer"
        >
          <IoMdCloseCircle className="text-red-500 font-bold text-3xl" />
        </div>
        <div className="text-white font-bold text-2xl text-center border-b-2 pb-2">
          Play Audio
        </div>

        {audioURL ? (
          <div className="flex justify-center">
            <audio controls src={audioURL} autoPlay></audio>
          </div>
        ) : (
          <div className="text-gray-400 text-center">
            {token ? "Loading audio..." : "Authentication required!"}
          </div>
        )}
      </div>
    </Modal>
  );
};

export default AudioPlay;
