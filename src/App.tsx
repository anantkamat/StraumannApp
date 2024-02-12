import { getDiffDate } from "./common/utils";
import Filter from "./components/filter";
import PatientItem from "./components/patientItem";
import { usePatientsList } from "./hooks/usePatientsList";

function App() {
  const { patientsList, minValue, maxValue, changeVal } = usePatientsList();

  return (
    <>
      <div className="flex flex-col px-24 pb-24 pt-8">
        <Filter minValue={minValue} maxValue={maxValue} changeVal={changeVal} />
        <div className="text-md font-medium">
          {" "}
          Showing results from {getDiffDate(maxValue, "", true)} to{" "}
          {getDiffDate(minValue, "", true)}
        </div>

        <table className="min-w-full text-left text-sm font-light ">
          <thead className="border-b font-medium">
            <tr>
              <th scope="col" className="px-6 py-4 font-medium">
                #
              </th>
              <th scope="col" className="px-6 py-4 font-medium">
                Name
              </th>
              <th scope="col" className="px-6 py-4 font-medium">
                Gender
              </th>
              <th scope="col" className="px-6 py-4 font-medium">
                Birth Date
              </th>
              <th scope="col" className="px-6 py-4 font-medium">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {patientsList &&
              patientsList.map((patient) => {
                return <PatientItem patient={patient} />;
              })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
