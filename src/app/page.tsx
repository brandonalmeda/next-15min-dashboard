import { orders, OrderActions } from "@/lib/orders";
import { customers } from "@/lib/customers";
import { totals } from "@/lib/totals";
import { TotalCard } from "./TotalCard";

export default function Home() {
  return (
    <div className="flex flex-col gap-4">
      {/* Header */}
      <div id="header" className="flex flex-col gap-4">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <button
          id="export-to-csv"
          className="bg-black w-fit text-white px-2 py-1 rounded-md"
        >
          Export to CSV
        </button>
      </div>
      {/* Totals */}
      <div id="totals" className="grid grid-cols-4 gap-4">
        {totals.map((total) => (
          <TotalCard key={total.title} {...total} />
        ))}
      </div>
      {/* Orders */}
      <div
        id="orders"
        className="flex flex-col gap-4 border border-gray-200 rounded-lg"
      >
        <table className="w-full text-sm text-left [&_td]:p-2">
          <thead>
            <tr className="border-b font-bold border-gray-200">
              <th className="p-2">Order ID</th>
              <th className="p-2">Customer</th>
              <th className="p-2">Status</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => {
              const customer = customers.find(
                (c) => c.id === order.customer_id
              );
              return (
                <tr
                  key={order.id}
                  className="border-b border-gray-200 last:border-b-0"
                >
                  <td>{order.id}</td>
                  <td>
                    {customer?.first_name} {customer?.last_name}
                  </td>
                  <td className="capitalize">{order.status}</td>
                  <td>
                    <div className="flex gap-4">
                      {OrderActions[order.status].map((action) => (
                        <button key={action} className="capitalize font-medium">
                          {action}
                        </button>
                      ))}
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
