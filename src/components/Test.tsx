import { useInput } from "../hooks/useInput";

const Test = () => {
  const [test, setTest] = useInput<string>("");
  return (
    <>
      <input type="text" onChange={setTest} value={test} />
    </>
  );
};

export default Test;
