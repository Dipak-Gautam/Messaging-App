import React, { useState, useRef } from "react";
import { IoMdCloseCircle } from "react-icons/io";
import Modal from "react-bootstrap/Modal";
import { useSelector } from "react-redux";
import { IStore } from "../../Schema/Store/store.schema";
import { mainEndPoint } from "../../ApiService/EndPoint/endpoint";

const AudioMessage = ({ ...props }) => {
  const token = useSelector((store: IStore) => store.token);
  const conversationId = props.id;
  const userInfo = useSelector((store: IStore) => store.userInfo);
  // console.log("userInfo", userInfo);

  const [recording, setRecording] = useState(false);
  const [audioBlob, setAudioBlob] = useState<Blob | null>(null);
  const [audioURL, setAudioURL] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunks = useRef<Blob[]>([]);

  // 🎤 Start Recording
  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorderRef.current = new MediaRecorder(stream);

      mediaRecorderRef.current.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunks.current.push(event.data);
        }
      };

      mediaRecorderRef.current.onstop = () => {
        const audioBlob = new Blob(audioChunks.current, { type: "audio/webm" });
        setAudioBlob(audioBlob);
        setAudioURL(URL.createObjectURL(audioBlob));
        audioChunks.current = [];
      };

      mediaRecorderRef.current.start();
      setRecording(true);
    } catch (error) {
      console.error("Error starting audio recording:", error);
    }
  };

  // 🛑 Stop Recording
  const stopRecording = () => {
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
      setRecording(false);
    }
  };

  // 🎵 Handle File Selection
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      setAudioURL(URL.createObjectURL(file));
    }
  };

  // 📤 Send Audio to Backend
  const handleSend = async () => {
    if (!conversationId) {
      return alert("Conversation ID is missing!");
    }

    const formData = new FormData();
    if (selectedFile) {
      formData.append("audio", selectedFile);
    } else if (audioBlob) {
      formData.append("audio", audioBlob, "recorded_audio.webm");
    } else {
      return alert("No audio selected or recorded!");
    }
    formData.append("senderId", userInfo._id);
    formData.append("senderName", userInfo.name);

    try {
      const response = await fetch(
        `${mainEndPoint}/file/upload/audio/${conversationId}`,
        {
          method: "POST",
          body: formData,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await response.json();
      if (response.ok) {
        props.onHide();
        setAudioBlob(null);
        setAudioURL(null);
        setSelectedFile(null);
      } else {
        alert(`Error: ${data.message}`);
      }
    } catch (error) {
      console.error("Error uploading audio:", error);
      alert("Failed to upload audio.");
    }
  };

  return (
    <Modal {...props} size="sm" centered>
      <div className="bg-dark rounded-xl flex flex-col p-4 gap-4">
        {/* Close Button */}
        <div
          onClick={props.onHide}
          className="absolute -top-9 right-0 bg-white rounded-full cursor-pointer"
        >
          <IoMdCloseCircle className="text-red-500 font-bold text-3xl" />
        </div>

        {/* Header */}
        <div className="text-white font-bold text-2xl text-center border-b-2 pb-2">
          Send Audio
        </div>

        {/* 🎤 Recording Buttons */}
        <div className="flex justify-center gap-3">
          {recording ? (
            <button
              className="bg-red-500 text-white p-2 rounded-lg"
              onClick={stopRecording}
            >
              Stop Recording
            </button>
          ) : (
            <button
              className="bg-blue-500 text-white p-2 rounded-lg"
              onClick={startRecording}
            >
              Start Recording
            </button>
          )}
        </div>

        {/* 📁 File Upload Input */}
        <div className="flex justify-center">
          <label className="flex cursor-pointer">
            <div className="text-white bg-gray-500 px-2 py-1 rounded-lg hover:bg-gray-600">
              Choose file
            </div>
            <input
              type="file"
              accept="audio/*"
              className="hidden flex-1"
              onChange={handleFileChange}
            />
          </label>
        </div>

        {/* 🎵 Audio Preview */}
        {audioURL && (
          <div className="flex justify-center">
            <audio controls src={audioURL}></audio>
          </div>
        )}

        {/* 📤 Send Button */}
        <div
          className="p-2 bg-green-600 rounded-lg text-white font-bold text-base text-center cursor-pointer"
          onClick={handleSend}
        >
          Send
        </div>
      </div>
    </Modal>
  );
};

export default AudioMessage;
