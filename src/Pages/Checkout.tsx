import useDataContext from "../Hooks/useDataContext";
import Recipe from "../Components/Recipe";

const Checkout = () => {
  const { checkoutData } = useDataContext();

  return (
    <div>
      {checkoutData.length > 0 ? (
        checkoutData.map((item) => <Recipe recipe={item} key={item.id} />)
      ) : (
        <p>Your checkout bag is empty.</p>
      )}
    </div>
  );
};

export default Checkout;
