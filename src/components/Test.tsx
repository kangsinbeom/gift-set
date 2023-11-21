import { useInput } from "../hooks/useInput";

const Test = () => {
  const initialState = { test: "" };
  const [test, setTest] = useInput<{ test: string }>(initialState);
  return (
    <>
      <input
        className="border-2 bg-slate-500"
        type="text"
        name="test"
        onChange={setTest}
        value={test.test}
      />
    </>
  );
};

export default Test;
