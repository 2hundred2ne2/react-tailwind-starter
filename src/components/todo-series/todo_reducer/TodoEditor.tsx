import { useState } from "react";
import { TTodoAction } from "../../../reducer/CartReducer";
import Button from "../../html/Button";
import Input from "../../html/Input";

const TodoEditor = ({
  dispatch,
}: {
  dispatch: React.Dispatch<TTodoAction>;
}) => {
  const [product, setProduct] = useState({
    text: "",
    price: 0,
    totalPrice: 0,
  });
  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({ type: "ADD_TODO", payload: product });
    setProduct({ text: "", price: 0, totalPrice: 0 });
  };
  return (
    <>
      <form className="grid gap-4" onSubmit={onSubmitHandler}>
        <div className="flex gap-2">
          제품:
          <Input
            type="text"
            placeholder="Enter Todo List"
            value={product.text}
            onChange={(e) =>
              setProduct((prevProduct) => ({
                ...prevProduct,
                text: e.target.value,
              }))
            }
          />
          가격:
          <Input
            type="number"
            placeholder="Enter Todo List"
            value={product.price}
            onChange={(e) =>
              setProduct((prevProduct) => ({
                ...prevProduct,
                price: Number(e.target.value),
              }))
            }
          />
          <Button
            type="submit"
            className="bg-[#4f4f4f] text-white w-[77px] shrink-0 rounded-lg"
          >
            Add
          </Button>
        </div>
      </form>
    </>
  );
};
export default TodoEditor;
