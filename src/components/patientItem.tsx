import { useState } from "react";
import { Patient } from "../common/types";
import { getDisplayYear, getInitials } from "../common/utils";
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
  console.warn("showModal", showModal);

  return (
    <>
      <tr key={patient?.resource?.id} className="border-b bg-neutral-100">
        <td className="whitespace-nowrap px-6 py-4 font-medium">
          <div className="w-8 h-8 bg-slate-200 rounded-full p-2 flex items-center justify-center">
            {getInitials(
              patient?.resource?.name[0]?.text ||
                patient?.resource?.name[0]?.given[0]
            )}
          </div>
        </td>
        <td className="whitespace-nowrap px-6 py-4 max-w-28 truncate">
          {patient?.resource?.name[0]?.text ||
            patient?.resource?.name[0]?.given[0]}
        </td>
        <td className="whitespace-nowrap px-6 py-4 max-w-28 truncate">
          {patient?.resource?.gender}
        </td>
        <td className="whitespace-nowrap px-6 py-4 max-w-28 truncate">
          {getDisplayYear(patient?.resource?.birthDate)}
        </td>
        <td className="whitespace-nowrap px-6 py-4 max-w-28 truncate">
          <button
            className="rounded-full bg-blue-600 py-1 px-4 text-slate-50"
            type="button"
            onClick={toggleModal}
          >
            view
          </button>
        </td>
      </tr>
      <DetailsModal toggleModal={toggleModal} showModal={showModal} />
    </>
  );
}

export default PatientItem;
