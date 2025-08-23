/* eslint-disable @typescript-eslint/no-unused-vars */
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
import { useForm, type FieldValues } from "react-hook-form";

export function AddTourTypeModal() {
  // const [addTourType] = useAddTourTypeMutation();

  const form = useForm();

  const onSubmit = async (data: FieldValues) => {
    // const res = await addTourType(data).unwrap();
    // console.log(res)
    // if (res.success) {
    //   toast.success("Tour type added successfully!");
    // }
    // form.reset();
    
  };

  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button>Add Tour Type</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add New Tour Type</DialogTitle>
          </DialogHeader>

          <Form {...form}>
            <form
              id="add-tour-type-form"
              onSubmit={form?.handleSubmit(onSubmit)}
            >
              <FormField
                control={form?.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="my-4">Tour Type Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Tour Type Name"
                        {...field}
                        value={field.value || ""}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </form>
          </Form>

          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button form="add-tour-type-form" type="submit">
              Save changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
