import { Stack } from "@mui/system";
import React,{} from "react";
import PersonalInfo from "./components/PersonalInfo";
import ThemeChanger from "./components/ThemeChanger";
import { Provider } from './layouts/Provider';
import Parent  from './layouts/Parent';
import ProjectComponent from "./components/ProjectComponent";
import Improving from "./components/Imporving";

function App() {

  return (  
    <Provider>
      <Parent>
        <Stack spacing={2} direction='column' justifyContent='center' alignItems='center'>
          <ThemeChanger/>
          <PersonalInfo/>
          <ProjectComponent/>
          <Improving/>
        </Stack>
      </Parent>
    </Provider>
  );
}

export default App;
