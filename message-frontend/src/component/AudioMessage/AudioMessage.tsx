import React, { useState, useRef } from "react";
import { IoMdCloseCircle } from "react-icons/io";
import Modal from "react-bootstrap/Modal";

const AudioMessage = ({ ...props }) => {
  const [recording, setRecording] = useState(false);
  const [audioBlob, setAudioBlob] = useState<Blob | null>(null);
  const [audioURL, setAudioURL] = useState<string | null>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunks = useRef<Blob[]>([]);

  // Start recording
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
        audioChunks.current = []; // Clear chunks
      };

      mediaRecorderRef.current.start();
      setRecording(true);
    } catch (error) {
      console.error("Error starting audio recording:", error);
    }
  };

  // Stop recording
  const stopRecording = () => {
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
      setRecording(false);
    }
  };

  // Send recorded audio to backend
  const handleSend = async () => {
    if (!audioBlob) return alert("No audio recorded!");

    const formData = new FormData();
    formData.append("audio", audioBlob, "recorded_audio.webm");

    try {
      const response = await fetch("http://localhost:5000/upload-audio", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      alert(data.message);
    } catch (error) {
      console.error("Error uploading audio:", error);
    }
  };

  return (
    <Modal {...props} size="sm" centered>
      <div className="bg-dark rounded-xl flex flex-col p-4 gap-4">
        <div
          onClick={props.onHide}
          className="absolute -top-9 right-0 bg-white rounded-full"
        >
          <IoMdCloseCircle className="text-red-500 font-bold text-3xl" />
        </div>
        <div className="text-white font-bold text-2xl text-center border-b-2 pb-2">
          Send Audio
        </div>

        <div className="flex justify-center">
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

        {audioURL && (
          <div className="flex justify-center">
            <audio controls src={audioURL}></audio>
          </div>
        )}

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
