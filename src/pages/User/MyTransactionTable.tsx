/* eslint-disable @typescript-eslint/no-explicit-any */

import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useGetMyTransactionsQuery, useGetSingleUserTransactionsQuery } from "@/redux/features/transaction/transaction.api";
import { format } from "date-fns";


export const MyTransactionTable = () => {
  const { data } = useGetMyTransactionsQuery(undefined);
  console.log({data},'My Transaction')
  const walletId = data?.data?.[0]?.wallet._id;

  const { data: allTransactionData } = useGetSingleUserTransactionsQuery( walletId );
  console.log( allTransactionData?.data , "All Transaction data");

  return (
    <div className="border rounded-md m-4 p-3">
      <Table>
        <TableHeader>
          <TableRow className="hover:bg-transparent">
            <TableHead>Transaction ID</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Transaction Type</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {allTransactionData?.data?.map((item: any) => (
            <TableRow key={item.id}>
              <TableCell className="font-medium">
                {item.transactionId}
              </TableCell>
              <TableCell>
                {format(new Date(item.createdAt), "MMM dd, yyyy")}
              </TableCell>
              <TableCell>{item.status}</TableCell>
              <TableCell>{item.transactionType}</TableCell>
              <TableCell className="text-right">{item.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter className="bg-transparent">
          <TableRow className="hover:bg-transparent">
            <TableCell colSpan={4}>Total</TableCell>
            <TableCell className="text-right">$2,500.00</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
}
