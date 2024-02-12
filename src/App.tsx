import "./App.css";
import Filter from "./components/filter";
import PatientItem from "./components/patientItem";
import { usePatientData } from "./hooks";

function App() {
  const { patientData, minValue, maxValue, changeVal } = usePatientData();

  return (
    <>
      <div className="flex flex-col bg-slate-100 px-24 pb-24 pt-8">
        <Filter minValue={minValue} maxValue={maxValue} changeVal={changeVal} />
        <div className=""> Showing results from x to y</div>

        <table className="min-w-full text-left text-sm font-light rounded-md overflow-x-auto">
          <thead className="border-b bg-white font-medium">
            <tr>
              <th scope="col" className="px-6 py-4">
                #
              </th>
              <th scope="col" className="px-6 py-4">
                Name
              </th>
              <th scope="col" className="px-6 py-4">
                Gender
              </th>
              <th scope="col" className="px-6 py-4">
                Birth Date
              </th>
              <th scope="col" className="px-6 py-4">
                actions
              </th>
            </tr>
          </thead>
          <tbody>
            {patientData.map((patient) => {
              return <PatientItem patient={patient} />;
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
