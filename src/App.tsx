import { Button } from "./Components/Button"
import {
  Sidebar,
  PersonalInfoCard
} from "./UI"
function App() {

  return (
    <div className="grid grid-cols-[25%_75%] p-5">
      <Sidebar />

      <div className="px-20 pt-10 pb-5">
        <PersonalInfoCard />

        <div className="flex justify-between mt-auto">
          <p className="text-cool-gray cursor-pointer">Go Back</p>
          <Button
            bgColor="marine-blue"
            text={`Continue`}
          />
        </div>
      </div>
    </div>
  )
}

export default App
