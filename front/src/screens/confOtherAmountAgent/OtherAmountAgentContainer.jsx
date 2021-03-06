import  React, {useState} from "react";
import  { View } from "react-native";
import { updateAmountAgent } from '../../redux/store/actions/transactions'
import { useDispatch , useSelector} from "react-redux";
import OtherAmountAgent from "./OtherAmountAgent";


const OtherAmountContainer = ({ navigation }) => {
  const dispatch =  useDispatch();
  const agent = useSelector(state => state.agents.agent)

  const mode = useSelector(
    (state) => state.users.mode
  );
  const [value, setValue] = useState("")

  const handlerValue = (value) =>{
    setValue(value)
  }

  const handlerSubmit = () => {
    dispatch(updateAmountAgent(value,agent._id))  }

    return(
        
          <OtherAmountAgent
          //  onChangeInput={onChangeInput}
          handlerValue={handlerValue}
          handlerSubmit={handlerSubmit}
          navigation={navigation}
          value={value}
          mode={mode}
          />
        
    )
}

export default OtherAmountContainer;