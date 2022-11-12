function TransactionCard() {
  return (
    <div className="grid grid-cols-2 overflow-hidden rounded-xl bg-[#283618]">
      <div className="p-4">
        <img
          src="https://via.placeholder.com/500x350"
          className="h-full w-full rounded"
        />
      </div>
      <div className="flex h-full flex-col rounded-xl bg-[#181818] p-4 text-xs text-slate-200">
        <div>
          Quantity: <span className="font-semibold text-white">100kg</span>
        </div>
        <div>
          Date Delivered:{" "}
          <span className="font-semibold text-white">March 18, 2023</span>
        </div>
        <div>
          Total Price:{" "}
          <span className="font-semibold text-white">100,000php</span>
        </div>

        <a className="block">See transaction details</a>

        <button className="mt-auto self-end rounded-full bg-[#606C38] px-8 py-1 text-sm font-semibold">
          Rate
        </button>
      </div>
    </div>
  );
}

export default function Orders() {
  return (
    <div className="p-4">
      <div className="text-2xl font-bold">My Purchases</div>

      <div className="mt-4 flex flex-col gap-4">
        <TransactionCard />
        <TransactionCard />
        <TransactionCard />
        <TransactionCard />
      </div>
    </div>
  );
}
