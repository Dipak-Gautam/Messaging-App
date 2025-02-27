import { useState } from "react";
import { Modal } from "react-bootstrap";
import { IoMdCloseCircle } from "react-icons/io";
import { useSelector } from "react-redux";
import { IStore } from "../../Schema/Store/store.schema";
import { mainEndPoint } from "../../ApiService/EndPoint/endpoint";

const FileDownload = ({ ...props }) => {
  const { fileId } = props;
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const token = useSelector((store: IStore) => store.token);

  const handleDownload = async () => {
    if (!fileId) {
      setError("File ID is missing.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`${mainEndPoint}/file/${fileId}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) throw new Error("Failed to download file.");

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);

      // Create an anchor tag and trigger download
      const a = document.createElement("a");
      a.href = url;
      a.download = fileId; // You can set a custom filename if needed
      document.body.appendChild(a);
      a.click();

      // Clean up
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    } catch (err) {
      setError("Error downloading file.");
      console.error("Download Error:", err);
    } finally {
      setLoading(false);
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
          File Download
        </div>
        <button
          onClick={handleDownload}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50"
          disabled={loading}
        >
          {loading ? "Downloading..." : "Download File"}
        </button>
        {error && <div className="text-red-400 text-center">{error}</div>}
      </div>
    </Modal>
  );
};

export default FileDownload;
