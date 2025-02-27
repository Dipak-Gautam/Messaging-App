import { useState } from "react";
import { Modal } from "react-bootstrap";
import { IoMdCloseCircle } from "react-icons/io";
import { useSelector } from "react-redux";
import { IStore } from "../../Schema/Store/store.schema";
import { mainEndPoint } from "../../ApiService/EndPoint/endpoint";

const FileSend = ({ ...props }) => {
  const { convId } = props;
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const token = useSelector((store: IStore) => store.token);
  const userInfo = useSelector((store: IStore) => store.userInfo);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setFile(event.target.files[0]);
      setError(null);
      setSuccess(null);
    }
  };

  const handleUpload = async () => {
    if (!file) {
      setError("Please select a file to upload.");
      return;
    }
    if (!convId || !token) {
      setError("Missing conversation ID or authentication token.");
      return;
    }

    setUploading(true);
    setError(null);
    setSuccess(null);

    const formData = new FormData();
    formData.append("file", file);
    formData.append("senderId", userInfo._id);
    formData.append("senderName", userInfo.name);

    try {
      const response = await fetch(`${mainEndPoint}/file/upload/${convId}`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`Server error: ${response.statusText}`);
      }

      setSuccess("File uploaded successfully!");
      setFile(null);
    } catch (err) {
      setError("Failed to upload file.");
    } finally {
      setUploading(false);
    }
  };

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
          File Upload
        </div>
        <input
          type="file"
          onChange={handleFileChange}
          className="text-white bg-gray-800 p-2 rounded"
          disabled={uploading}
        />
        <button
          onClick={handleUpload}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50"
          disabled={uploading || !file}
        >
          {uploading ? "Uploading..." : "Upload File"}
        </button>
        {error && <div className="text-red-400 text-center">{error}</div>}
        {success && <div className="text-green-400 text-center">{success}</div>}
      </div>
    </Modal>
  );
};

export default FileSend;
