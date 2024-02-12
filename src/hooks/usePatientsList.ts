import { useState, useEffect } from "react";
import { getDiffDate } from "../common/utils";
import { RangeSelectorType } from "../common/types";

export function usePatientsList() {
  const [minValue, setMinValue] = useState(5);
  const [maxValue, setMaxValue] = useState(15);
  const [patientsList, setPatientsList] = useState([]);

  function changeVal(e: RangeSelectorType) {
    setMinValue(e.minValue);
    setMaxValue(e.maxValue);
  }

  useEffect(() => {
    const min = getDiffDate(maxValue, "ge");
    const max = getDiffDate(minValue, "le");

    fetch(
      `https://hapi.fhir.org/baseR4/Patient?birthdate=${min}&birthdate=${max}&_pretty=true`
    )
      .then((response) => response.json())
      .then((data) => {
        setPatientsList(data.entry);
      })
      .catch((error) => console.log(error));
  }, [minValue, maxValue]);

  return {
    minValue,
    maxValue,
    changeVal,
    patientsList,
  };
}
