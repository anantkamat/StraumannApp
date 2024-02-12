import { useState } from "react";
import { Patient } from "../common/types";
import {
  capitalize,
  getDisplayYear,
  getInitials,
  getPatientName,
  getRandomBG,
} from "../common/utils";
import DetailsModal from "./detailsModal";

interface ItemProps {
  patient: Patient;
}

function PatientItem(props: ItemProps) {
  const { patient } = props;
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <tr
        key={patient?.resource?.id}
        className="mb-1 rounded-md overflow-hidden border-b shadow-sm"
      >
        <td className=" bg-white whitespace-nowrap px-6 py-4 font-medium rounded-bl-md rounded-tl-md">
          {patient?.resource?.name && (
            <div
              className="w-8 h-8 rounded-full p-2 flex items-center justify-center font-bold"
              style={{ backgroundColor: getRandomBG() }}
            >
              {getInitials(getPatientName(patient?.resource?.name[0]))}
            </div>
          )}
        </td>
        <td className=" bg-white whitespace-nowrap px-6 py-4 max-w-28 truncate">
          {getPatientName(patient?.resource?.name[0])}
        </td>
        <td className=" bg-white whitespace-nowrap px-6 py-4 max-w-28 truncate">
          {capitalize(patient?.resource?.gender)}
        </td>
        <td className=" bg-white whitespace-nowrap px-6 py-4 max-w-28 truncate">
          {getDisplayYear(patient?.resource?.birthDate)}
        </td>
        <td className=" bg-white whitespace-nowrap px-6 py-4 max-w-28 truncate  rounded-br-md rounded-tr-md">
          <button
            className="rounded-md bg-blue-600 py-1 px-4 text-slate-50"
            type="button"
            onClick={toggleModal}
          >
            Details
          </button>
        </td>
      </tr>
      <DetailsModal
        fullUrl={patient?.fullUrl}
        toggleModal={toggleModal}
        showModal={showModal}
      />
    </>
  );
}

export default PatientItem;
