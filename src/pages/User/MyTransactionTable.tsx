/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";
import {
  useGetMyTransactionsQuery,
  useGetSingleUserTransactionsQuery,
} from "@/redux/features/transaction/transaction.api";
import { format } from "date-fns";
import { useState } from "react";

export const MyTransactionTable = () => {
  const { data } = useGetMyTransactionsQuery(undefined);
  const walletId = data?.data?.[0]?.wallet?._id;

  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(10);

  const { data: allTransactionData, isLoading } =
    useGetSingleUserTransactionsQuery(
      { walletId, page: currentPage, limit },
      { skip: !walletId } // prevent calling with undefined walletId
    );
  
  console.log(allTransactionData, "AllTransactionData");

  const meta = allTransactionData?.data?.meta;
  const totalPages = meta?.totalPages ?? 1;
  const total = meta?.total ?? 0;
  const start = total ? (meta!.page - 1) * meta!.limit + 1 : 0;
  const end = total ? Math.min(meta!.page * meta!.limit, total) : 0;

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
          {isLoading
            ? Array.from({ length: limit }).map((_, i) => (
                <TableRow key={i}>
                  <TableCell>
                    <Skeleton className="h-4 w-32" />
                  </TableCell>
                  <TableCell>
                    <Skeleton className="h-4 w-24" />
                  </TableCell>
                  <TableCell>
                    <Skeleton className="h-4 w-20" />
                  </TableCell>
                  <TableCell>
                    <Skeleton className="h-4 w-28" />
                  </TableCell>
                  <TableCell className="text-right">
                    <Skeleton className="h-4 w-16 ml-auto" />
                  </TableCell>
                </TableRow>
              ))
            : allTransactionData?.data?.data?.map((item: any) => (
                <TableRow key={item._id ?? item.id}>
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
      </Table>

      {/* Pagination + Rows per page */}
      <div className="mt-6 flex items-center justify-between gap-3">
        {/* Rows per page */}
        <div className="flex items-center gap-3 w-full">
          <div className="text-sm text-muted-foreground">Rows per page</div>
          <Select
            value={limit.toString()}
            onValueChange={(value) => {
              setLimit(Number(value));
              setCurrentPage(1); // reset to first page on limit change
            }}
          >
            <SelectTrigger className="w-[90px]">
              <SelectValue placeholder="Rows" />
            </SelectTrigger>
            <SelectContent>
              {[5, 10, 25, 50].map((pageSize) => (
                <SelectItem
                  key={pageSize}
                  value={pageSize.toString()}
                  disabled={total < pageSize} 
                >
                  {pageSize}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <div className="text-sm text-muted-foreground">
            {total ? `${start}–${end} of ${total}` : "0 results"}
          </div>
        </div>

        {/* Pagination (Right side) */}
        <div>
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  className={
                    currentPage === 1
                      ? "pointer-events-none text-muted-foreground"
                      : "cursor-pointer"
                  }
                />
              </PaginationItem>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <PaginationItem key={page}>
                    <PaginationLink
                      onClick={() => setCurrentPage(page)}
                      className={
                        currentPage === page
                          ? "pointer-events-none text-muted-foreground"
                          : "cursor-pointer"
                      }
                    >
                      {page}
                    </PaginationLink>
                  </PaginationItem>
                )
              )}

              <PaginationItem>
                <PaginationNext
                  onClick={() =>
                    setCurrentPage((p) => Math.min(totalPages, p + 1))
                  }
                  className={
                    currentPage === totalPages
                      ? "pointer-events-none text-muted-foreground"
                      : "cursor-pointer"
                  }
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </div>
  );
};
