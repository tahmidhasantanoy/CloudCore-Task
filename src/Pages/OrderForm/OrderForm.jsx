import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import { usePlaceNewOrderMutation } from "../../Redux/api/clothApi";
import "react-toastify/dist/ReactToastify.css";

const OrderForm = () => {
  const [placeNewOrder, { isLoading, isError }] = usePlaceNewOrderMutation({
    onSuccess: (data) => {
      // console.log(data);
    },
    onError: (error) => {
      // console.log(error);
    },
  });

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    console.log("Raw form data:", data);

    const orderInfo = {
      product_ids: data.product_ids.trim(),
      s_product_qty: data.s_product_qty.trim(),
      c_phone: data.c_phone,
      c_name: data.c_name,
      courier: data.courier,
      address: data.address,
      advance: data.advance,
      cod_amount: data.cod_amount,
      discount_amount: data.discount_amount,
      delivery_charge: data.delivery_charge,
    };

    try {
      const responseFromServer = await placeNewOrder(orderInfo);
      console.log("Response from server:", responseFromServer?.data?.status);

      if (responseFromServer?.data?.status) {
        toast.success(responseFromServer?.data?.message);

        reset();
      }
    } catch (err) {
      toast.error("Travel Package Creation Failed");
      console.error(err);
    }
  };

  return (
    <div className="bg-blue-50 min-h-screen flex items-center justify-center px-4 py-10">
      <ToastContainer />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-6 md:p-10 space-y-4"
      >
        <h2 className="text-2xl font-bold text-black mb-6">Place Your Order</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Product IDs (comma separated)
            </label>
            <input
              type="text"
              {...register("product_ids")}
              placeholder="e.g. 1,2"
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Product Quantities (comma separated)
            </label>
            <input
              type="text"
              {...register("s_product_qty")}
              placeholder="e.g. 2,1"
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Customer Name
            </label>
            <input
              type="text"
              {...register("c_name")}
              placeholder="e.g. John Doe"
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Phone
            </label>
            <input
              type="text"
              {...register("c_phone")}
              placeholder="e.g. 017XXXXXXXX"
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Courier
            </label>
            <input
              type="text"
              {...register("courier")}
              placeholder="e.g. steadfast"
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Delivery Charge
            </label>
            <input
              type="number"
              {...register("delivery_charge")}
              placeholder="e.g. 80"
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              COD Amount
            </label>
            <input
              type="number"
              {...register("cod_amount")}
              placeholder="e.g. 1250"
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Advance (optional)
            </label>
            <input
              type="number"
              {...register("advance")}
              placeholder="e.g. 200"
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Discount Amount
          </label>
          <input
            type="number"
            {...register("discount_amount")}
            placeholder="Enter just number"
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Address
          </label>
          <textarea
            {...register("address")}
            rows={3}
            placeholder="e.g. Mirpur 12 Ramzan Essa Market"
            className="w-full border border-gray-300 rounded px-3 py-2"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-md transition w-full md:w-auto"
          disabled={isLoading || isError}
        >
          Place Order
        </button>
      </form>
    </div>
  );
};

export default OrderForm;
