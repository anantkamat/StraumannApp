import { useState, useEffect } from "react";
import { PatientResource } from "../common/types";

export function usePatientDetails() {
  const [patientDetails, setPatientDetails] = useState<
    Partial<PatientResource>
  >({});
  const [url, setUrl] = useState("");

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setPatientDetails(data);
      })
      .catch((error) => console.log(error));
  }, [url]);

  return {
    patientDetails,
    setUrl,
  };
}
