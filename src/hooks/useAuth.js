import { useContext } from "react";
import { AuthContext } from "../context/Auth/AuthContext";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => useContext(AuthContext);