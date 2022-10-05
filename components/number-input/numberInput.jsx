import NumberInputStyle from "./numberInput.css";

const NumberInput = ({ placeholder }) => {
  return (
    <NumberInputStyle
      type={"number"}
      placeholder={placeholder}
    ></NumberInputStyle>
  );
};

export default NumberInput;
