import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getAgentTransactions } from "../../redux/store/actions/transactions";
import AgentHome from "./AgentHome";
import { View } from "react-native";
import { fetchAgent } from "../../redux/store/actions/agents";
import moment from "moment";

export default ({ navigation }) => {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const [time, setTime] = useState("");

  const agentTransactions = useSelector(
    (state) => state.transactions.agentTransactions
  );
  const agent = useSelector((state) => state.agents.agent);

  const userId = useSelector((state) => state.users.user._id);

  useEffect(() => {
    var date = moment();
    var fecha = date.locale("es").format("dddd MM-MMMM");

    setTime(fecha);
  });

  useEffect(() => {
    dispatch(fetchAgent(userId)).then((agent) => {
      dispatch(getAgentTransactions("5f10cfed048b9d32761c8146")).then(() =>
        setLoading(true)
      );
    });
  }, []);

  return (
    <AgentHome
      agentTransactions={agentTransactions}
      navigation={navigation}
      loading={loading}
      time={time}
      agent={agent}
    />
  );
};
