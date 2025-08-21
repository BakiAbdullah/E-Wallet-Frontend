/* eslint-disable @typescript-eslint/no-explicit-any */
import SingleImageUploader from "@/components/SingleImageUploader";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useAddDivisionMutation } from "@/redux/features/division/division.api";
import { useState } from "react";
import { useForm, type FieldValues } from "react-hook-form";
import { toast } from "sonner";

export function AddDivisionModal() {
  const [addDivision] = useAddDivisionMutation();
  const [image, setImage] = useState<File | null>(null);
  const [open, setOpen] = useState(false); // Modal open state

  const form = useForm({
    defaultValues: {
      name: "",
      description: "",
    },
  });

  const onSubmit = async (data: FieldValues) => {
    const formData = new FormData();
    formData.append("data", JSON.stringify(data));
    formData.append("file", image as File);
    const toastId = toast.loading("Adding division...");
    // console.log(formData.get("file"));

    try {
      const res = await addDivision(formData).unwrap();
      if (res?.success) {
        toast.success("Division added successfully!", { id: toastId });
        setOpen(false);
      }
    } catch (error: any) {
      toast.error(`Failed to add division ${error?.data?.message}`, { id: toastId });
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>Add Division</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add New Tour Type</DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form
            className="space-y-5"
            id="add-division-form"
            onSubmit={form?.handleSubmit(onSubmit)}
          >
            <FormField
              control={form?.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="mb-2 mt-8">Division Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Division Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form?.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="mb-2 mt-8">
                    Division Description
                  </FormLabel>
                  <FormControl>
                    <Textarea placeholder="Description" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
          <SingleImageUploader onChange={setImage} />
        </Form>

        <DialogFooter>
          <DialogClose asChild>
            <Button className="cursor-pointer" variant="outline">
              Cancel
            </Button>
          </DialogClose>
          <Button
            className="cursor-pointer hover:bg-primary/80"
            disabled={!image}
            form="add-division-form"
            type="submit"
          >
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
