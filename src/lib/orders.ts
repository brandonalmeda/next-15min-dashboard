export enum OrderStatus {
  ORDERED = "ordered",
  SHIPPED = "shipped",
  DELIVERED = "delivered",
}

export const OrderActions: Record<OrderStatus, string[]> = {
  ordered: ["show details", "cancel"],
  shipped: ["show details"],
  delivered: ["show details"],
};

export const orders = [
  {
    id: 1234,
    customer_id: 1,
    status: OrderStatus.ORDERED,
    date: "2024-01-01",
  },
  {
    id: 1235,
    customer_id: 2,
    status: OrderStatus.SHIPPED,
    date: "2024-01-02",
  },
  {
    id: 1236,
    customer_id: 3,
    status: OrderStatus.SHIPPED,
    date: "2024-01-03",
  },
  {
    id: 1237,
    customer_id: 3,
    status: OrderStatus.ORDERED,
    date: "2024-01-04",
  },
  {
    id: 1238,
    customer_id: 4,
    status: OrderStatus.DELIVERED,
    date: "2024-01-05",
  },
  {
    id: 1239,
    customer_id: 4,
    status: OrderStatus.DELIVERED,
    date: "2024-01-05",
  },
  {
    id: 1240,
    customer_id: 1,
    status: OrderStatus.DELIVERED,
    date: "2024-01-05",
  },
  {
    id: 1241,
    customer_id: 1,
    status: OrderStatus.DELIVERED,
    date: "2024-01-05",
  },
  {
    id: 1242,
    customer_id: 1,
    status: OrderStatus.DELIVERED,
    date: "2024-01-05",
  },
  {
    id: 1243,
    customer_id: 1,
    status: OrderStatus.DELIVERED,
    date: "2024-01-05",
  },
];
