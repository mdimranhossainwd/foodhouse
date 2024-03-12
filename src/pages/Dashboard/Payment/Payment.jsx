const Payment = () => {
  return (
    <div className="mx-10 h-screen grid items-center justify-center">
      <div>
        <h2 className="text-5xl font-medium uppercase font-pt text-center ">
          Payment
        </h2>
        <div className="grid grid-cols-2 gap-6 my-8">
          <div>
            <input
              type="number"
              name="no"
              id="date"
              placeholder="Card Number"
              className="bg-gray-50 w-full border border-gray-300 p-2.5 dark:placeholder-gray-400 py-3 px-4"
            />
          </div>
          <div>
            <input
              type="text"
              name="date"
              placeholder="MM/YY/CVC"
              id="name"
              className="bg-gray-50 border w-full border-gray-300 p-2.5 dark:placeholder-gray-400 py-3 px-4"
            />
          </div>
        </div>
        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="bg-[#1F2937] flex items-center gap-3 mt-4 px-8 text-md space-x-2 font-medium py-3 text-white border-0 "
          >
            Payment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Payment;
