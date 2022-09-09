import ProgressBar from "@ramonak/react-progress-bar";

const ProgressLine = (props) => {
  return <ProgressBar 
        completed={props.completed}
        maxCompleted={props.maxCompleted}
        height='15px'
        labelSize='14px'
        />;
};
  
export default ProgressLine;