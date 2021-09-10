import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { firestore } from "../firebase";
import "./css/preview.css";

const PublicPreview = () => {
  let { rid } = useParams();

  let [previewData, serPreviewData] = useState(null);
  useEffect(() => {
    firestore
      .collection("resume")
      .doc(rid)
      .get()
      .then((doc) => {
        let data = doc.data();
        serPreviewData(data);
        console.log(previewData);
      });
  }, []);
  return (
    <>
      {previewData && previewData.details.isPublic ? (
        <p className={`template-${previewData.code}`}>
          {previewData.details.fname}
        </p>
      ) : (
        "No Data"
      )}
    </>
  );
};

export default PublicPreview;
