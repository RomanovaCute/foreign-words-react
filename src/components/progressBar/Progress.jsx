import ProgressBar from "@ramonak/react-progress-bar";
// import { words } from "../../sources/wordsStore";

const ProgressLine = (props) => {
  return <ProgressBar 
        // completed={Math.round((props.completed * 100 )/(words.length))}
        completed={Math.round((props.completed * 100 )/(15))}
        maxCompleted={ 100 }
        height='15px'
        labelSize='14px'
        />;
};
  
export default ProgressLine;