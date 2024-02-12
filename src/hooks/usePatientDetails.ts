import { useState, useEffect, useMemo } from "react";
import { PatientResource } from "../common/types";

export function usePatientDetails() {
  const [patientDetails, setPatientDetails] = useState<
    Partial<PatientResource>
  >({});
  const [url, setUrl] = useState("");

  const fetchPatientsDetails = useMemo(
    () => async () => {
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          setPatientDetails(data);
        })
        .catch((error) => console.log(error));
    },
    [url]
  );

  useEffect(() => {
    fetchPatientsDetails();
  }, [url]);

  return {
    patientDetails,
    setUrl,
  };
}
