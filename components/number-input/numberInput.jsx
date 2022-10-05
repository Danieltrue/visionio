import NumberInputStyle from "./numberInput.css";

const NumberInput = ({ placeholder, ...props }) => {
  return (
    <NumberInputStyle
      type={"number"}
      placeholder={placeholder}
      {...props}
    ></NumberInputStyle>
  );
};

export default NumberInput;
