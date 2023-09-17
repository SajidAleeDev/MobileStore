import { Button } from "./ui/button";

type PropsButoon = {
  items: any;
  isAddToCart: boolean;
  handleAddToCart: (items: any) => void;
  title: string;
};

function CustomeButton({
  items,
  isAddToCart,
  handleAddToCart,
  title,
  ...props
}: PropsButoon & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <Button
      {...props}
      variant="outline"
      className={` mt-2 w-full bg-[#F5F5F5] text-[#222222] font-bold hover:bg-[#222222] hover:text-[#F5F5F5] ${
        isAddToCart && "bg-green-900 text-white hover:bg-green-900 "
      } `}
      size={"sm"}
      onClick={() => handleAddToCart(items)}
      disabled={items.iStock === 0}
    >
      {title}
    </Button>
  );
}

export default CustomeButton;
