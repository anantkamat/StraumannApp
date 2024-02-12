import { useEffect } from "react";
import { usePatientDetails } from "../hooks/usePatientDetails";
import {
  capitalize,
  getAddress,
  getDisplayYear,
  getInitials,
  getRandomBG,
} from "../common/utils";

interface ModalProps {
  showModal: boolean;
  fullUrl: string;
  toggleModal: () => void;
}
export default function DetailsModal(props: ModalProps) {
  const { showModal, toggleModal, fullUrl } = props;
  const { setUrl, patientDetails } = usePatientDetails();

  useEffect(() => {
    if (showModal) {
      setUrl(fullUrl);
    }
  }, [showModal]);

  return (
    <>
      {showModal && Object.keys(patientDetails).length > 0 ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {patientDetails?.name && (
                  <div className="flex items-center justify-center p-5 border-b border-solid border-blueGray-200 rounded-t">
                    <div
                      className="w-12 h-12 rounded-full p-2 flex items-center justify-center text-3xl"
                      style={{ backgroundColor: getRandomBG() }}
                    >
                      {getInitials(
                        patientDetails?.name[0]?.text ||
                          patientDetails?.name[0]?.given[0]
                      )}
                    </div>
                    <div className="text-2xl font-semibold ml-2">
                      {patientDetails?.name[0]?.text ||
                        patientDetails?.name[0]?.given[0]}
                    </div>

                    <button
                      className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                      onClick={toggleModal}
                    >
                      <span className="bg-transparent text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                        ×
                      </span>
                    </button>
                  </div>
                )}
                <div className="relative p-6 flex-auto">
                  <div className="border-gray-200">
                    <dl>
                      {patientDetails?.name &&
                        patientDetails?.name[0]?.family && (
                          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">
                              Family name
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                              {patientDetails?.name[0]?.family}
                            </dd>
                          </div>
                        )}
                      {patientDetails?.telecom && (
                        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                          <dt className="text-sm font-medium text-gray-500">
                            Contact
                          </dt>
                          <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            {patientDetails?.telecom[0]?.value}
                          </dd>
                        </div>
                      )}
                      {patientDetails?.gender && (
                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                          <dt className="text-sm font-medium text-gray-500">
                            Gender
                          </dt>
                          <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            {capitalize(patientDetails?.gender)}
                          </dd>
                        </div>
                      )}
                      {patientDetails?.birthDate && (
                        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                          <dt className="text-sm font-medium text-gray-500">
                            DOB
                          </dt>
                          <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            {getDisplayYear(patientDetails?.birthDate)}
                          </dd>
                        </div>
                      )}
                      {patientDetails?.communication && (
                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                          <dt className="text-sm font-medium text-gray-500">
                            Gender
                          </dt>
                          <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            {patientDetails?.communication[0].language.text}
                          </dd>
                        </div>
                      )}
                      {patientDetails?.address && (
                        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                          <dt className="text-sm font-medium text-gray-500">
                            DOB
                          </dt>
                          <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            {getAddress(patientDetails?.address)}
                          </dd>
                        </div>
                      )}
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
